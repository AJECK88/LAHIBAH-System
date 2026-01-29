import { PrismaClient } from "@prisma/client";
import XLSX from "xlsx";
import fs from "fs";
import path from "path";
import promptSync from "prompt-sync";

const prisma = new PrismaClient();
const prompt = promptSync();

async function main() {
  const folderPath = "./"; // or let user enter
  const files = fs.readdirSync(folderPath).filter(f => f.endsWith(".xlsx"));

  if (files.length === 0) {
    console.error("❌ No Excel files found in folder:", folderPath);
    process.exit(1);
  }

  console.log("Select an Excel file to import:");
  files.forEach((file, i) => console.log(`${i + 1}: ${file}`));

  const choice = prompt("Enter the number of the file: ");
  const fileIndex = Number(choice) - 1;

  if (!Number.isInteger(fileIndex) || fileIndex < 0 || fileIndex >= files.length) {
    console.error("❌ Invalid selection");
    process.exit(1);
  }

  const selectedFile = path.resolve(folderPath, files[fileIndex]);
  console.log(`📄 You selected: ${files[fileIndex]}`);

  const workbook = XLSX.readFile(selectedFile);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const rows = XLSX.utils.sheet_to_json(sheet);

  for (const row of rows) {
    const { level: levelValue, department: deptName, matricule, ...subjects } = row;

    const level = await prisma.level.findUnique({ where: { LevelName: String(levelValue) } });
    if (!level) throw new Error(`Level ${levelValue} not found`);

    const department = await prisma.department.findUnique({ where: { name: deptName } });
    if (!department) throw new Error(`Department "${deptName}" not found`);

    const student = await prisma.student.findUnique({ where: { matricule } });
    if (!student) throw new Error(`Student ${matricule} not found`);

    for (const [courseName, marks] of Object.entries(subjects)) {
      const course = await prisma.course.findUnique({ where: { name: courseName } });
      if (!course) throw new Error(`Course "${courseName}" not found`);

      const examDept = await prisma.examDepartment.findUnique({
        where: {
          departmentId_courseId_levelId: {
            departmentId: department.id,
            courseId: course.id,
            levelId: level.id
          }
        }
      });
      if (!examDept) throw new Error(`ExamDepartment missing: ${courseName}, ${deptName}, Level ${levelValue}`);

      await prisma.result.upsert({
        where: {
          studentId_courseId: {
            studentId: student.id,
            courseId: course.id
          }
        },
        update: {
          ca: marks.ca ?? 0,
          exam: marks.exam ?? 0,
          total: marks.total ?? 0,
          grade: marks.grade ?? "N/A"
        },
        create: {
          ca: marks.ca ?? 0,
          exam: marks.exam ?? 0,
          total: marks.total ?? 0,
          grade: marks.grade ?? "N/A",
          studentId: student.id,
          courseId: course.id,
          levelId: level.id
        }
      });
    }
  }

  console.log("✅ Results seeded successfully from Excel!");
}

main()
  .catch(e => {
    console.error("❌ Seeding failed:", e.message);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
