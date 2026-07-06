import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import ExcelJS from "exceljs";
import { date, number, string } from "zod";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const departmentId = searchParams.get("departmentId");
    const levelId = searchParams.get("levelId");
    const examName = searchParams.get("examName");
    console.log("Received Query Parameters:", { departmentId, levelId , examName});

    // 1. Fetch data from Prisma based on user inputs
    // We fetch existing exam records that match these parameters as a boilerplate template
  const subjects = await prisma.department.findMany({
  where: {
    id: departmentId ? departmentId : undefined,
  },

    include: {
  subjects: {
    where: {
      levelId: levelId ? Number(levelId) : undefined,
    },
    select: {
      name: true,
      level: {
        select: {
          LevelName: true,
        },
      },
    },
  },
  }
});
 console.log("Fetched Subjects from DB:", subjects);

    // 2. Initialize a professional ExcelJS Workbook
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Exams Upload Form", {
      views: [{ showGridLines: true, state: 'frozen', ySplit: 1 }] // Freeze header row
    });

    // 3. Define the columns matching your exact schema layout requirements
    worksheet.columns = [
      { header: "caurses", key: "courses", width: 20 }, // Match exact typo expected by seed
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
   
    // Making row 2 to take just department name and level 
   const row2 =  worksheet.addRow(2) 
   row2.height = 22;
   row2.getCell(1).value = examName|| "Sample Exam" ,
   worksheet.mergeCells("A2:C2")
  row2.getCell(4).value = subjects[0]?.subjects[0]?.level?.LevelName || "";
   worksheet.mergeCells("D2:E2") ;

   // Apply basic centering alignment styles for Row 2 data blocks
["A2", "D2"].forEach(cellRef => {
  const cell = worksheet.getCell(cellRef);
  cell.font = { name: "Segoe UI", size: 14, bold: true };
  cell.alignment = { vertical: "middle", horizontal: "center" };
  cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "1B365D" } }; // Deep Navy

});
     
    // marking row 3 to take just examType e.g first semester or second semester
    const row3 = worksheet.addRow(3)
    row3.height = 22;
    row3.getCell(1).value = subjects[0].name
    worksheet.mergeCells("A3:E3");


// Apply centered palette layout for the main row banner header element
const bannerCell = worksheet.getCell("A3");
bannerCell.font = { name: "Segoe UI", size: 12, bold: true, color: { argb: "FFFFFF" } };
bannerCell.alignment = { vertical: "middle", horizontal: "center" };
bannerCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "1B365D" } }; // Deep Navy


    // 5. Populate rows with existing matching database entries or fallback example row
    if (subjects.length > 0) {
      subjects.forEach((subject) => {
      subject.subjects.map((courseName) => {
        worksheet.addRow({ 
          courses: courseName.name,
          classroom: "",
          startDate: new Date().toISOString().replace('T', ' ').substring(0, 16), // Default to current date/time in ISO format
          duration: 2.0, // Default duration numeric layout value
          invigilator:""
        });
      })
      });
    } else {
      // Fetch structural lookup helpers to provide an accurate default guide row
      const targetDept = departmentId ? await prisma.department.findUnique({ where: { id: departmentId } }) : null;
      const targetLevel = levelId ? await prisma.level.findUnique({ where: { id: Number(levelId) } }) : null;

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