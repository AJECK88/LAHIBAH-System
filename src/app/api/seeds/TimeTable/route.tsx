"use server";

import prisma from "@/lib/prisma";
import type { DayOfWeek, Semester } from "@prisma/client";
import * as XLSX from "xlsx";

function mapDayToEnum(value: string): DayOfWeek | null {
  const normalized = value.trim().toUpperCase().replace(/[^A-Z]/g, "");

  const dayMap: Record<string, DayOfWeek> = {
    MONDAY: "MONDAY",
    TUESDAY: "TUESDAY",
    WEDNESDAY: "WEDNESDAY",
    THURSDAY: "THURSDAY",
    FRIDAY: "FRIDAY",
    SATURDAY: "SATURDAY",
    MON: "MONDAY",
    TUE: "TUESDAY",
    TUES: "TUESDAY",
    WED: "WEDNESDAY",
    THU: "THURSDAY",
    THURS: "THURSDAY",
    FRI: "FRIDAY",
    SAT: "SATURDAY",
  };

  return dayMap[normalized] ?? null;
}

export type TimetableUploadResponse = {
  success: boolean;
  error?: string;
  count?: number;
};

type ParsedEntry = {
  dayOfWeek: DayOfWeek;
  startTime: string;
  endTime: string;
  semester: Semester;
  courseId: number;
  classroomId: string | null;
  levelId: number | null;
  teacherId: string | null;
  departmentId: string | null;
};

export async function UploadTimeTable(
  prevState: TimetableUploadResponse,
  formData: FormData
): Promise<TimetableUploadResponse> {
  try {
    const file = formData.get("file") as File | null;

    if (!file || file.size === 0) {
      return { success: false, error: "No Excel file provided" };
    }

    const bytes = await file.arrayBuffer();
    const workbook = XLSX.read(bytes, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    const rawData: any[][] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    if (!rawData || rawData.length === 0) {
      return { success: false, error: "The uploaded Excel sheet is empty" };
    }

    // -----------------------------------------------------------------
    // 1. PRE-FETCH LOOKUP MAPS (Safely formatted with String protection)
    // -----------------------------------------------------------------
    const [subjects, classrooms, teachers, levels, departments] = await Promise.all([
      prisma.subject.findMany({ select: { id: true, name: true } }),
      prisma.classroom.findMany({ select: { id: true, name: true } }),
      prisma.teacher.findMany({ select: { id: true, firstName: true, lastName: true } }),
      prisma.level.findMany({ select: { id: true, LevelName: true } }),
      prisma.department.findMany({ select: { id: true, name: true } }),
    ]);

    const subjectMap = new Map(
      subjects.map((s) => [String(s.name || "").trim().toLowerCase(), s.id])
    );
    const classroomMap = new Map(
      classrooms.map((c) => [String(c.name || "").trim().toLowerCase(), c.id])
    );
    const levelMap = new Map(
      levels.map((l) => [String(l.LevelName || "").trim().toLowerCase(), l.id])
    );
    const departmentMap = new Map(
      departments.map((d) => [String(d.name || "").trim().toLowerCase(), d.id])
    );

    const teacherMap = new Map<string, string>();
    teachers.forEach((t) => {
      const full = `${t.firstName || ""} ${t.lastName || ""}`.trim().toLowerCase();
      if (t.firstName) teacherMap.set(t.firstName.trim().toLowerCase(), t.id);
      if (t.lastName) teacherMap.set(t.lastName.trim().toLowerCase(), t.id);
      if (full) teacherMap.set(full, t.id);
    });

    // -----------------------------------------------------------------
    // 2. PARSE GRID SLOTS
    // -----------------------------------------------------------------
    const timetableEntries: ParsedEntry[] = [];
    let currentDay: DayOfWeek | null = null;

    const timeSlots = [
      { start: "08:00", end: "10:00" },
      { start: "10:00", end: "12:00" },
      { start: "12:00", end: "14:00" },
      { start: "14:00", end: "16:00" },
      { start: "16:00", end: "18:00" },
    ];

    for (let i = 0; i < rawData.length; i++) {
      const row = rawData[i];
      if (!row || row.length === 0) continue;

      const firstCell = String(row[0] || "").trim();

      const detectedDay = mapDayToEnum(firstCell);
      if (detectedDay) {
        currentDay = detectedDay;
        continue;
      }

      if (
        currentDay &&
        (firstCell.toLowerCase().includes("venue") || firstCell.toLowerCase().includes("lecturer"))
      ) {
        const courseRow = rawData[i - 1] || [];
        const detailRow = row;

        for (const [colIdx, slot] of timeSlots.entries()) {
          const rawCourse = String(courseRow[colIdx + 1] || "").trim();
          const rawDetail = String(detailRow[colIdx + 1] || "").trim();

          if (!rawCourse || rawCourse.toLowerCase() === "undefined") continue;

          const cleanCourseKey = rawCourse.toLowerCase();
          const cleanDetailKey = rawDetail.toLowerCase();

          const courseId = subjectMap.get(cleanCourseKey) ?? null;
          const classroomId = classroomMap.get(cleanDetailKey) ?? null;
          const levelId = levelMap.get(cleanDetailKey) ?? null;
          const departmentId = departmentMap.get(cleanDetailKey) ?? null;

          let matchedTeacherId: string | null = null;
          for (const word of rawDetail.split(/\s+/)) {
            const foundId = teacherMap.get(word.toLowerCase());
            if (foundId) {
              matchedTeacherId = foundId;
              break;
            }
          }

          if (courseId) {
            timetableEntries.push({
              dayOfWeek: currentDay,
              startTime: slot.start,
              endTime: slot.end,
              semester: "SEMESTER_1",
              courseId,
              classroomId,
              levelId,
              teacherId: matchedTeacherId,
              departmentId,
            });
          }
        }
      }
    }

    if (timetableEntries.length === 0) {
      return {
        success: false,
        error: "No valid timetable entries matched existing database records.",
      };
    }

    // -----------------------------------------------------------------
    // 3. ATOMIC TRANSACTION (Iterative inserts with Many-to-Many connect)
    // -----------------------------------------------------------------
    const createdCount = await prisma.$transaction(async (tx) => {
      // Clear target semester scope before replacing
      await tx.timetable.deleteMany({
        where: { semester: "SEMESTER_1" },
      });

      let count = 0;
      for (const entry of timetableEntries) {
        await tx.timetable.create({
          data: {
            dayOfWeek: entry.dayOfWeek,
            startTime: entry.startTime,
            endTime: entry.endTime,
            semester: entry.semester,
            courseId: entry.courseId,
            classroomId: entry.classroomId,
            levelId: entry.levelId,
            // Many-to-Many connect for department array
            department: entry.departmentId
              ? {
                  connect: [{ id: entry.departmentId }],
                }
              : undefined,
          },
        });
        count++;
      }

      return count;
    });

    return { success: true, count: createdCount };
  } catch (error: any) {
    console.error("Excel Upload Error:", error);
    return {
      success: false,
      error: error?.message || "An error occurred while processing the Excel sheet.",
    };
  }
}