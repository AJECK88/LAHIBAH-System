import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const results = [
  {
    level: 100,
    department: "Computer Science",
    matricule: "CSN242035",
    English: { ca: 29, exam: 34, total: 63, grade: "B" },
    Economics: { ca: 28, exam: 30, total: 58, grade: "C+" },
    Math: { ca: 38, exam: 90, total: 66, grade: "B" },
  }
];

async function main() {
  
  for (const row of results) {

    // 1️⃣ LEVEL (must exist)
    const level = await prisma.level.findUnique({
      where: { LevelName: String(row.level) }
    });
    if (!level) throw new Error(`Level ${row.level} not found`);

    // 2️⃣ DEPARTMENT (must exist)
    const department = await prisma.department.findUnique({
      where: { name: row.department }
    });
    if (!department) throw new Error(`Department "${row.department}" not found`); 
    const exam = await prisma.exam.findFirst({
      where: {
        levelId: level.id,
        examDepartments: {
          some: {
            departmentId: department.id
          }
        }
      }
    });
    if (!exam) throw new Error(`Exam for ${row.department} at Level ${row.level} not found`);

    // 3️⃣ STUDENT (must exist)
    const student = await prisma.student.findUnique({
      where: {matricule: row.matricule }
    });
    if (!student) throw new Error(`Student ${row.matricule} not found`);

    // 4️⃣ SUBJECTS → RESULTS
    const subjects = Object.entries(row).filter(
      ([key]) => !["level", "department", "matricule"].includes(key)
    );

    for (const [courseName, marks] of subjects) {

      // 5️⃣ COURSE (must exist)
      const course = await prisma.subject.findUnique({
        where: { name: courseName }
      });
      if (!course) throw new Error(`Course "${courseName}" not found`);

      // 6️⃣ EXAM-DEPARTMENT RELATION (must exist)
      const examDept = await prisma.examDepartment.findUnique({
        where: {
          examId_departmentId: {
            departmentId: department.id,
            examId: exam.id

          }
        }
      });

      if (!examDept) {
        throw new Error(
          `ExamDepartment missing: ${courseName} | ${row.department} | Level ${row.level}`
        );
      }

      // 7️⃣ RESULT (create or update ONLY)
      await prisma.result.upsert({
  where: {
    studentId_courseId: {
      studentId: student.id,
      courseId: course.id
    }
  },
  update: {
    CA: marks.ca,
    Exam: marks.exam,
    total: marks.total,
    date: new Date(),
    examId: exam.id
  },
  create: {
    studentId: student.id,
    courseId: course.id,
    CA: marks.ca,
    Exam: marks.exam,
    total: marks.total,
    date: new Date(),
    examId: exam.id
  }
});

    }
  }
  
}

main()
  .then(() => console.log("✅ Results connected successfully"))
  .catch((e) => {
    console.error("❌ Seeding failed:", e.message);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
