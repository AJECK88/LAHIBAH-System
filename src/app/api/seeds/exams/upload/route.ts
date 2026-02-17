"use server";

import { PrismaClient } from "@prisma/client";
import * as XLSX from "xlsx";

const prisma = new PrismaClient();
type ExamUploadResponse = {
  success: boolean;
  error?: string;
};

export async function UploadExam( ExamUploadResponse: ExamUploadResponse,formData: FormData) {
  try {
    const file = formData.get("file") as File;
    if (!file || file.size === 0) {
      throw new Error("No file uploaded or file is empty");
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const workbook = XLSX.read(buffer, { type: "buffer" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(sheet, { raw: false }) as Array<Record<string, any>>;

    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const startYear = month < 7 ? year - 1 : year;
    const endYear = startYear + 1;

    for (const row of rows) {
      const level = await prisma.level.findUnique({
        where: { LevelName: String(row.Level) },
      });
      if (!level) throw new Error(`Level ${row.Level} not found`);

      const department = await prisma.department.findUnique({
        where: { name: row.Department },
      });
      if (!department) throw new Error(`Department "${row.Department}" not found`);

      const META_KEYS = [
        "Level",
        "Department",
        "Start Date",
        "End Date",
        "Exam Name",
        "ClassRoom",
      ];

      const subjects = Object.entries(row).filter(
        ([key]) => !META_KEYS.includes(key)
      );

      for (const [courseName] of subjects) {
        const course = await prisma.subject.findUnique({
          where: { name: courseName },
        });
        if (!course) throw new Error(`Course "${courseName}" not found`);

        const classRoom = await prisma.classroom.findUnique({
          where: { name: row.ClassRoom },
        });
        if (!classRoom) throw new Error(`Classroom "${row.ClassRoom}" not found`);

        const exam = await prisma.exam.upsert({
          where: {
            name: `${row["Exam Name"]}-${department.name}-${course.name}`,
          },
          update: {
            startDate: new Date(row["Start Date"]),
            endDate: new Date(row["End Date"]),
            schoolYear: `${startYear}/${endYear}`,
            title: row["Exam Name"],
            DepartmentId: department.id,
            ClassRoomId: classRoom.id,
            courseId: course.id,
            levelId: level.id,
          },
          create: {
            name: `${row["Exam Name"]}-${department.name}-${course.name}`,
            startDate: new Date(row["Start Date"]),
            endDate: new Date(row["End Date"]),
            schoolYear: `${startYear}/${endYear}`,
            title: row["Exam Name"],
            DepartmentId: department.id,
            ClassRoomId: classRoom.id,
            courseId: course.id,
            levelId: level.id,
          },
        });

        await prisma.examDepartment.upsert({
          where: {
            examId_departmentId: {
              examId: exam.id,
              departmentId: department.id,
            },
          },
          update: {},
          create: {
            examId: exam.id,
            departmentId: department.id,
          },
        });
      }
    }

    // ✅ Just return nothing (or simple object)
    return { success: true };

  } catch (error) {
    console.error(error);
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
    //** Ensure Prisma Client is disconnected after operation to prevent hanging connections */
    finally {
      await prisma.$disconnect();
    }
}
