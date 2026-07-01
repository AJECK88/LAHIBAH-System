import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import ExcelJS from "exceljs";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const departmentId = searchParams.get("departmentId");
    const levelId = searchParams.get("levelId");

    // 1. Fetch data from Prisma based on user inputs
    // We fetch existing exam records that match these parameters as a boilerplate template
    const exams= await prisma.exam.findMany({
      where: {
        levelId: levelId ? Number(levelId) : undefined,
        examDepartments: departmentId ? {
          some: { departmentId: departmentId }
        } : undefined
      },
      include: {
        course: true,
        level: true,
        classroom: true,
        examDepartments: {
          include: { department: true }
        }
      }
    });

    // 2. Initialize a professional ExcelJS Workbook
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Exams Upload Form", {
      views: [{ showGridLines: true, state: 'frozen', ySplit: 1 }] // Freeze header row
    });

    // 3. Define the columns matching your exact schema layout requirements
    worksheet.columns = [
      { header: "Exam Name", key: "examName", width: 25 },
      { header: "Department", key: "department", width: 30 },
      { header: "caurses", key: "courses", width: 20 }, // Match exact typo expected by seed
      { header: "Level", key: "level", width: 15 },
      { header: "ClassRoom", key: "classroom", width: 15 },
      { header: "Start Date", key: "startDate", width: 22 },
      { header: "Duration/hrs", key: "duration", width: 15 },
      { header: "Invigilator", key: "invigilator", width: 20 }
    ];

    // 4. Design & Polish Styles (Muted Slate / Executive Dark Navy Palette)
    const headerRow = worksheet.getRow(1);
    headerRow.height = 26;
    headerRow.eachCell((cell) => {
      cell.font = { name: "Segoe UI", size: 11, bold: true, color: { argb: "FFFFFF" } };
      cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "1B365D" } }; // Deep Navy
      cell.alignment = { vertical: "middle", horizontal: "center" };
    });

    // 5. Populate rows with existing matching database entries or fallback example row
    if (exams.length > 0) {
      exams.forEach((exam) => {
        const deptName = exam.examDepartments[0]?.department?.name || "";
        worksheet.addRow({
          examName: exam.title,
          department: deptName,
          courses: exam.course.name,
          level: exam.level.LevelName,
          classroom: exam.classroom.name,
          startDate: exam.startDate.toISOString().replace('T', ' ').substring(0, 16),
          duration: 2.0, // Default duration numeric layout value
          invigilator: exam.Invigilator || ""
        });
      });
    } else {
      // Fetch structural lookup helpers to provide an accurate default guide row
      const targetDept = departmentId ? await prisma.department.findUnique({ where: { id: departmentId } }) : null;
      const targetLevel = levelId ? await prisma.level.findUnique({ where: { id: Number(levelId) } }) : null;

      worksheet.addRow({
        examName: "First Semester Exams",
        department: targetDept?.name || "Computer Science and Networks",
        courses: "Math",
        level: targetLevel?.LevelName || "Level 1",
        classroom: "Room 302",
        startDate: "2024-07-01 11:00",
        duration: 2,
        invigilator: "Dr. Franklin"
      });
    }

    // 6. Style data body cells (subtle grid borders & zebra formatting)
    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber === 1) return; // Skip header formatting rules
      row.height = 20;
      row.eachCell((cell) => {
        cell.font = { name: "Segoe UI", size: 11 };
        cell.border = {
          top: { style: 'thin', color: { argb: 'E5E7EB' } },
          left: { style: 'thin', color: { argb: 'E5E7EB' } },
          bottom: { style: 'thin', color: { argb: 'E5E7EB' } },
          right: { style: 'thin', color: { argb: 'E5E7EB' } }
        };
        // Zebra striping for readability
        if (rowNumber % 2 === 0) {
          cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "F9FAFB" } };
        }
      });
    });

    // 7. Write workbook into an arraybuffer response stream
    const buffer = await workbook.xlsx.writeBuffer();

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Disposition": `attachment; filename="migration_template_${Date.now()}.xlsx"`,
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      }
    });

  } catch (error) {
    console.error("EXCEL GENERATION ROUTE EXCEPTION:", error);
    return NextResponse.json(
      { error: "Failed to construct configuration spreadsheet" },
      { status: 500 }
    );
  }
}