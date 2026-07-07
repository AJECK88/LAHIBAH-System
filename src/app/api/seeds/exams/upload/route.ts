"use server";

import { PrismaClient } from "@prisma/client";
import * as XLSX from "xlsx";

const prisma = new PrismaClient();

type ExamUploadResponse = {
  success: boolean;
  error?: string;
};

export async function UploadExam(
  prevState: ExamUploadResponse, 
  formData: FormData
): Promise<ExamUploadResponse> {
  try {
    const file = formData.get("file") as File;
    if (!file || file.size === 0 || !file.name.endsWith(".xlsx") ) {
      throw new Error("No file uploaded please select a valid Excel file.");
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const workbook = XLSX.read(buffer, { type: "buffer" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(sheet, { raw: false }) as Array<Record<string, any>>;

    // Dynamic School Year calculation based on the current date context
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const startYear = currentMonth < 7 ? currentYear - 1 : currentYear;
    const endYear = startYear + 1;
    const computedSchoolYear = `${startYear}/${endYear}`;

    for (const row of rows) {
      // 1. Identify Subject/Course column directly (Excel header says 'caurses')
      const courseName = row.caurses || row["caurses"];
      if (!courseName) {
        continue; // Gracefully bypass spacer structural labels or empty rows
      }

      // 2. Fetch dependencies safely from the database
      const level = await prisma.level.findUnique({
        where: { LevelName: String(row.Level) },
      });
      if (!level) throw new Error(`Level value "${row.Level}" was not found.`);

      const department = await prisma.department.findUnique({
        where: { name: row.Department },
      });
      if (!department) throw new Error(`Department string "${row.Department}" was not found.`);

      const classRoom = await prisma.classroom.findUnique({
        where: { name: row.ClassRoom },
      });
      if (!classRoom) throw new Error(`Classroom target "${row.ClassRoom}" was not found.`);

      const course = await prisma.subject.findUnique({
        where: { name: courseName },
      });
      if (!course) throw new Error(`Subject mapping "${courseName}" was not found.`);

      // 3. Compute timestamps accurately via Duration hours
      const startDate = new Date(row["Start Date"]);
      if (isNaN(startDate.getTime())) {
        throw new Error(`Invalid timestamp formatting under row: ${courseName}`);
      }
      const durationHours = parseFloat(row["Duration/hrs"]) || 2;
      const endDate = new Date(startDate.getTime() + durationHours * 60 * 60 * 1000);

      const examUniqueName = `${row["Exam Name"]}-${department.name}-${course.name}`;

      // 4. Perform the upsert operation using your strict scalar keys
      const exam = await prisma.exam.upsert({
        where: { name: examUniqueName },
        update: {
          startDate,
          endDate,
          schoolYear: computedSchoolYear,
          title: row["Exam Name"],
          ClassRoomId: classRoom.id,
          courseId: course.id,
          levelId: level.id,
          Invigilator: row.Invigilator || null, // Directly matches your String? schema property
        },
        create: {
          name: examUniqueName,
          startDate,
          endDate,
          schoolYear: computedSchoolYear,
          title: row["Exam Name"],
          ClassRoomId: classRoom.id,
          courseId: course.id,
          levelId: level.id,
          Invigilator: row.Invigilator || null,
        },
      });

      // 5. Connect the Exam to the Department via explicit join table record
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

    return { success: true };

  } catch (error) {
    console.error("EXCEL SEED RUNTIME FAILURE:", error);
    return { success: false, error: error instanceof Error ? error.message : "Unknown structural parser exception" };
  } finally {
    await prisma.$disconnect();
  }
}