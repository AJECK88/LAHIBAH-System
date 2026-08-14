import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import ExcelJS from "exceljs";
import { any } from "zod";

// Time Slot Mapping (Cols B through K)
const TIME_SLOTS = [
  { start: "08:00", colStart: 2, colEnd: 3 },   // Slot 1: Col B & C
  { start: "10:00", colStart: 4, colEnd: 5 },   // Slot 2: Col D & E
  { start: "12:00", colStart: 6, colEnd: 7 },   // Slot 3: Col F & G
  { start: "14:00", colStart: 8, colEnd: 9 },   // Slot 4: Col H & I
  { start: "16:00", colStart: 10, colEnd: 11 }, // Slot 5: Col J & K
];

const DAYS = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"];

const DAY_LABELS: Record<string, string> = {
  MONDAY: "Monday",
  TUESDAY: "Tuesday",
  WEDNESDAY: "Wednesday",
  THURSDAY: "Thursday",
  FRIDAY: "Friday",
};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const departmentId = searchParams.get("departmentId") || undefined;
    const rawLevelId = searchParams.get("levelId");
    const examName = searchParams.get("examType") || "Second Semester";

    // Safely parse levelId if numeric
    const parsedLevelId = rawLevelId && !isNaN(Number(rawLevelId)) ? Number(rawLevelId) : undefined;

    // -----------------------------------------------------------------
    // 1. SAFE DATABASE FETCHING
    // -----------------------------------------------------------------
    let departmentName =searchParams.get("department")||""
    let levelName = rawLevelId ? `Level ${rawLevelId}` : "100";
    let timetableEntries: any[] = [];

    try {
      if (departmentId) {
        const dept = await prisma.department.findUnique({
          where: { id: departmentId },
          select: { name: true },
        });
        if (dept?.name) departmentName = departmentName;
      }

      if (parsedLevelId !== undefined) {
        const lvl = await prisma.level.findUnique({
          where: { id: parsedLevelId },
          select: { LevelName: true },
        });
        if (lvl?.LevelName) levelName = lvl.LevelName;
      }

      // Fetch timetable with loose relation filters to avoid crash on empty setups
      timetableEntries = await prisma.timetable.findMany({
        where: {
          ...(parsedLevelId !== undefined ? { levelId: parsedLevelId } : {}),
          ...(departmentId ? { departmentId } : {}),
        },
        include: {
          course: { select: { name: true } },
          classroom: { select: { name: true } },
        },
      });
    } catch (dbErr) {
      console.warn("Database query partial fallback triggered:", dbErr);
    }

    // -----------------------------------------------------------------
    // 2. EXCEL WORKBOOK INITIALIZATION
    // -----------------------------------------------------------------
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Timetable", {
      views: [{ showGridLines: true }],
    });

    worksheet.columns = [
      { key: "label", width: 18 },
      { key: "s1_v", width: 14 },
      { key: "s1_l", width: 14 },
      { key: "s2_v", width: 14 },
      { key: "s2_l", width: 14 },
      { key: "s3_v", width: 14 },
      { key: "s3_l", width: 14 },
      { key: "s4_v", width: 14 },
      { key: "s4_l", width: 14 },
      { key: "s5_v", width: 14 },
      { key: "s5_l", width: 14 },
    ];

    const thinBorder: Partial<ExcelJS.Borders> = {
      top: { style: "thin" },
      left: { style: "thin" },
      bottom: { style: "thin" },
      right: { style: "thin" },
    };

    // ROW 1: Department Header Title
    worksheet.mergeCells("A1:K1");
    const titleCell = worksheet.getCell("A1");
    titleCell.value = departmentName.toUpperCase();
    titleCell.font = { name: "Calibri", size: 18, bold: true };
    titleCell.alignment = { vertical: "middle", horizontal: "center" };
    worksheet.getRow(1).height = 32;

    // ROW 2: Level & Semester Meta Row
    worksheet.getRow(2).height = 22;

    worksheet.mergeCells("B2:C2");
    const lvlLabel = worksheet.getCell("B2");
    lvlLabel.value = "Level:";
    lvlLabel.font = { name: "Calibri", size: 14, bold: true };
    lvlLabel.alignment = { vertical: "middle", horizontal: "right" };

    worksheet.mergeCells("D2:E2");
    const lvlVal = worksheet.getCell("D2");
    lvlVal.value = levelName;
    lvlVal.font = { name: "Calibri", size: 14, bold: true };
    lvlVal.alignment = { vertical: "middle", horizontal: "left" };

    worksheet.mergeCells("H2:I2");
    const semLabel = worksheet.getCell("H2");
    semLabel.value = "Semester:";
    semLabel.font = { name: "Calibri", size: 14, bold: true };
    semLabel.alignment = { vertical: "middle", horizontal: "right" };

    worksheet.mergeCells("J2:K2");
    const semVal = worksheet.getCell("J2");
    semVal.value = examName;
    semVal.font = { name: "Calibri", size: 14, bold: true };
    semVal.alignment = { vertical: "middle", horizontal: "left" };

    // ROW 3: Time Slot Headers
    const row3 = worksheet.getRow(3);
    row3.height = 24;

    const timeHeaders = [
      { range: "B3:C3", text: "8 - 10:00 am" },
      { range: "D3:E3", text: "10 - 12:00 pm" },
      { range: "F3:G3", text: "12 - 2pm" },
      { range: "H3:I3", text: "2 - 4:00pm" },
      { range: "J3:K3", text: "4 - 6:00pm" },
    ];

    timeHeaders.forEach((slot) => {
      worksheet.mergeCells(slot.range);
      const cell = worksheet.getCell(slot.range.split(":")[0]);
      cell.value = slot.text;
      cell.font = { name: "Calibri", size: 11, bold: true };
      cell.alignment = { vertical: "middle", horizontal: "center" };
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "D9D9D9" },
      };
    });

    for (let col = 2; col <= 11; col++) {
      row3.getCell(col).border = thinBorder;
    }

    // -----------------------------------------------------------------
    // 3. MAP MATRIX SLOTS
    // -----------------------------------------------------------------
    const gridMap: Record<string, Record<string, any>> = {};
    DAYS.forEach((day) => {
      gridMap[day] = {};
    });

    if (Array.isArray(timetableEntries)) {
      timetableEntries.forEach((entry) => {
        const dayKey = String(entry?.dayOfWeek || "").toUpperCase();
        const timeKey = String(entry?.startTime || "");
        if (gridMap[dayKey]) {
          gridMap[dayKey][timeKey] = entry;
        }
      });
    }

    // -----------------------------------------------------------------
    // 4. GENERATE DAY ROWS
    // -----------------------------------------------------------------
    let currentRowIdx = 4;

    DAYS.forEach((dayKey) => {
      const dayName = DAY_LABELS[dayKey] || dayKey;

      const courseRow = worksheet.getRow(currentRowIdx);
      const venueRow = worksheet.getRow(currentRowIdx + 1);

      courseRow.height = 22;
      venueRow.height = 20;

      // Day Label
      const dayCell = courseRow.getCell(1);
      dayCell.value = dayName;
      dayCell.font = { name: "Calibri", size: 11, bold: true };
      dayCell.alignment = { vertical: "middle", horizontal: "left" };
      dayCell.border = thinBorder;

      // Venue / Lecturer Label
      const subHeaderCell = venueRow.getCell(1);
      subHeaderCell.value = "Venue / Lecturer";
      subHeaderCell.font = { name: "Calibri", size: 10, bold: true, italic: true };
      subHeaderCell.alignment = { vertical: "middle", horizontal: "left" };
      subHeaderCell.border = thinBorder;

      // Populate Slots
      TIME_SLOTS.forEach((slot) => {
        const entry = gridMap[dayKey]?.[slot.start];

        worksheet.mergeCells(
          currentRowIdx,
          slot.colStart,
          currentRowIdx,
          slot.colEnd
        );

        const courseCell = courseRow.getCell(slot.colStart);
        courseCell.value = entry?.subject?.name || "";
        courseCell.font = { name: "Calibri", size: 11 };
        courseCell.alignment = { vertical: "middle", horizontal: "center" };

        courseRow.getCell(slot.colStart).border = thinBorder;
        courseRow.getCell(slot.colEnd).border = thinBorder;

        const venueCell = venueRow.getCell(slot.colStart);
        const lecturerCell = venueRow.getCell(slot.colEnd);

        const teacherName = entry?.teacher
          ? `${entry.teacher.lastName || entry.teacher.firstName || ""}`
          : "";

        venueCell.value = entry?.classroom?.name || "";
        lecturerCell.value = teacherName;

        venueCell.font = { name: "Calibri", size: 10, italic: true };
        lecturerCell.font = { name: "Calibri", size: 10, italic: true };

        venueCell.alignment = { vertical: "middle", horizontal: "center" };
        lecturerCell.alignment = { vertical: "middle", horizontal: "center" };

        venueCell.border = thinBorder;
        lecturerCell.border = thinBorder;
      });

      currentRowIdx += 2;
    });

    // STREAM OUTPUT
    const buffer = await workbook.xlsx.writeBuffer();

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Disposition": `attachment; filename="Timetable_${departmentName.replace(/\s+/g, "_")}.xlsx"`,
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    });
  } catch (error: any) {
    console.error("TIMETABLE EXCEL SEVERE ROUTE ERROR:", error);
    return NextResponse.json(
      { error: "Internal Server Error", message: error?.message || "Unknown error" },
      { status: 500 }
    );
  }
}