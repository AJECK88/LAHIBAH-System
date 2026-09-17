import { PrismaClient } from "@prisma/client";
import { advanceCohortWithResits } from "@/lib/utlity/promotion";

const prisma = new PrismaClient();

async function runPromotionTest() {
  console.log("🧪 Starting Cohort Promotion Test...\n");

  try {
    // 1. Setup Academic Years
    const year1 = await prisma.academicYear.upsert({
      where: { year: "2025/2026" },
      update: { isCurrent: false },
      create: { year: "2025/2026", isCurrent: false },
    });

    const year2 = await prisma.academicYear.upsert({
      where: { year: "2026/2027" },
      update: { isCurrent: true },
      create: { year: "2026/2027", isCurrent: true },
    });

    // 2. Fetch or create Levels 100 & 200
    const level100 = await prisma.level.findFirst({ where: { LevelName: "100" } });
    const level200 = await prisma.level.findFirst({ where: { LevelName: "200" } });

    if (!level100 || !level200) {
      throw new Error("Ensure Level 100 and Level 200 exist in your database before testing.");
    }

    // 3. Setup Test Department & Subjects
    const dept = await prisma.department.findFirst();
    if (!dept) throw new Error("No department found. Please seed a department first.");

    const coursePass = await prisma.subject.upsert({
      where: { name: "TEST_CS101" },
      update: {},
      create: { name: "TEST_CS101", levelId: level100.id, department: { connect: { id: dept.id } } },
    });

    const courseFail = await prisma.subject.upsert({
      where: { name: "TEST_MATH101" },
      update: {},
      create: { name: "TEST_MATH101", levelId: level100.id, department: { connect: { id: dept.id } } },
    });

    const courseLevel200 = await prisma.subject.upsert({
      where: { name: "TEST_CS201" },
      update: {},
      create: { name: "TEST_CS201", levelId: level200.id, department: { connect: { id: dept.id } } },
    });

    // 4. Create Dummy Student
    const testStudent = await prisma.student.upsert({
      where: { username: "test_student_001" },
      update: { levelId: level100.id },
      create: {
        id: "test_student_clerk_id",
        username: "test_student_001",
        email: "teststudent@example.com",
        firstName: "Test",
        lastName: "Student",
        phoneNumber: "+237600000000",
        address: "Test Address",
        age: 20,
        sex: "Male",
        matricule: "TEST001",
        departmentId: dept.id,
        levelId: level100.id,
      },
    });

    // 5. Create Past Results (Passed CS101, Failed MATH101)
    await prisma.result.upsert({
      where: { studentId_courseId: { studentId: testStudent.id, courseId: coursePass.id } },
      update: { grade: "A" },
      create: { studentId: testStudent.id, courseId: coursePass.id, CA: 20, Exam: 60, total: 80, grade: "A", date: new Date() },
    });

    await prisma.result.upsert({
      where: { studentId_courseId: { studentId: testStudent.id, courseId: courseFail.id } },
      update: { grade: "F" },
      create: { studentId: testStudent.id, courseId: courseFail.id, CA: 10, Exam: 20, total: 30, grade: "F", date: new Date() },
    });

    console.log("✅ Seed Data Ready. Executing advanceCohortWithResits...");

    // 6. RUN THE FUNCTION UNDER TEST
    const result = await advanceCohortWithResits(year1.id, year2.id, level100.id, level200.id);

    console.log("\n📊 Promotion Execution Results:", result);

    // 7. VERIFY RESULTS
    const updatedStudent = await prisma.student.findUnique({
      where: { id: testStudent.id },
      include: {
        enrollments: { where: { academicYearId: year2.id } },
        courseRegs: { where: { academicYearId: year2.id }, include: { subject: true } },
      },
    });

    console.log("\n🔍 Verification Check:");
    console.log(`- New Student Level: ${updatedStudent?.levelId} (Expected: ${level200.id})`);
    console.log(`- New Year Enrollment Status: ${updatedStudent?.enrollments[0]?.status} (Expected: PROMOTED)`);
    console.log(`- Total Registered Courses in 2026/2027: ${updatedStudent?.courseRegs.length}`);

    updatedStudent?.courseRegs.forEach((reg) => {
      console.log(`  └─ [${reg.type}] ${reg.subject.name} (Status: ${reg.status})`);
    });

    // Assertions
    const isLevelCorrect = updatedStudent?.levelId === level200.id;
    const hasRegularCourse = updatedStudent?.courseRegs.some((r) => r.subjectId === courseLevel200.id && r.type === "REGULAR");
    const hasResitCourse = updatedStudent?.courseRegs.some((r) => r.subjectId === courseFail.id && r.type === "RESIT");

    if (isLevelCorrect && hasRegularCourse && hasResitCourse) {
      console.log("\n🎉 TEST PASSED! All promotion and resit rules were applied correctly.");
    } else {
      console.error("\n❌ TEST FAILED! Mismatch in expected promotion outcomes.");
    }
  } catch (error) {
    console.error("Test execution failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

runPromotionTest();