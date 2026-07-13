import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import ExcelJS from 'exceljs';

const prisma = new PrismaClient();

// Helper to convert index to Excel Column letters (0 -> A, 1 -> B, 2 -> C, etc.)
function getColumnLetter(colIndex: number): string {
  let letter = '';
  while (colIndex >= 0) {
    letter = String.fromCharCode((colIndex % 26) + 65) + letter;
    colIndex = Math.floor(colIndex / 26) - 1;
  }
  return letter;
}

export async function GET(req: Request) {
  try {
    const {searchParams} = new URL(req.url)
    const departmentId =searchParams.get("departmentId")
    const levelId  = searchParams.get("levelId")
    
    // 1. Fetch Department along with its subjects, exams, courses, and student results
    const departmentData = await prisma.department.findUnique({
      where: { id: String(departmentId) },
      include: {
        subjects: {
          where :{
             level:{
              id:Number(levelId)
             }
          },
          include: {
            exams: {
              include: {
                course: true
              }
            }
          }
        },
        students: {
          include: {
            results: {
              include: {
                course: true
              }
            }
          }
        }
      }
    });

    if (!departmentData) {
      return new Response(JSON.stringify({ error: "Department not found" }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 2. Extract unique dynamic courses/subjects available from the data
    const activeCourses: { id: number; name: string }[] = [];
    const seenCourseIds = new Set<number>();

    departmentData.subjects.forEach(subject => {
      subject.exams.forEach(exam => {
        if (exam.course && !seenCourseIds.has(exam.course.id)) {
          seenCourseIds.add(exam.course.id);
          activeCourses.push({
            id: exam.course.id,
            name: exam.course.name
          });
        }
      });
    });

    // 3. Initialize ExcelJS Workbook & Worksheet
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Results');

    // Style assets
    const centerAlignment: Partial<ExcelJS.Alignment> = { vertical: 'middle', horizontal: 'center' };
    const fontBold = { name: 'Calibri', bold: true, size: 11 };
    const fontNormal = { name: 'Calibri', size: 11 };
    const thinBorder = {
      top: { style: 'thin' as const },
      left: { style: 'thin' as const },
      bottom: { style: 'thin' as const },
      right: { style: 'thin' as const }
    };

    // 4. Dynamic Title Block calculation (3 static columns now: No, Names, Mat No)
    const totalColumnsCount = 3 + (activeCourses.length * 2); 
    const lastColumnLetter = getColumnLetter(totalColumnsCount - 1);
    
    worksheet.mergeCells(`A1:${lastColumnLetter}1`);
    const titleCell = worksheet.getCell('A1');
    titleCell.value = departmentData.name || 'Student Results';
    titleCell.font = { ...fontBold, size: 14 };
    titleCell.alignment = centerAlignment;

    // 5. Structural sub-headers (Row 2 & Row 3)
    worksheet.mergeCells('A2:A3');
    worksheet.getCell('A2').value = 'No';

    worksheet.mergeCells('B2:B3');
    worksheet.getCell('B2').value = 'Names';

    worksheet.mergeCells('C2:C3');
    worksheet.getCell('C2').value = 'Mat No';

    // FIX 1: Start dynamic subjects at index 3 (which maps out to Column 'D')
    let currentColIndex = 3; 

    activeCourses.forEach((course) => {
      const startCol = getColumnLetter(currentColIndex);
      const endCol = getColumnLetter(currentColIndex + 1);
      
      // Merge Row 2 across two cells for Course Name
      worksheet.mergeCells(`${startCol}2:${endCol}2`);
      worksheet.getCell(`${startCol}2`).value = course.name;
      
      // Assign structural splits to Row 3
      worksheet.getCell(`${startCol}3`).value = 'CA /40';
      worksheet.getCell(`${endCol}3`).value = 'Exam /60';
      
      currentColIndex += 2; 
    });

    // 6. Dynamic Mapping Loop over Student Row Matrix
    departmentData.students.forEach((student, index) => {
      // FIX 2: Added fullName matching your static "Names" column position
      const fullName = `${student.firstName || ''} ${student.lastName || ''}`.trim() || 'N/A';
      
      const rowData: (string | number)[] = [
        index + 1,
        fullName,
        student.matricule || 'N/A'
      ];

      // Dynamically align grades matching the calculated active header order
      activeCourses.forEach((course) => {
        const matchingResult = student.results?.find(r => r.courseId === Number(course.id));
        
        rowData.push(matchingResult ? (matchingResult.CA ?? 0) : 0);
        rowData.push(matchingResult ? (matchingResult.Exam ?? 0) : 0);
      });

      worksheet.addRow(rowData);
    });

    // 7. Dynamic Column Auto-Width Allocator
    const columnsConfig: { key: string; width: number }[] = [
      { key: 'no', width: 6 },
      { key: 'names', width: 25 }, // Added layout config for names
      { key: 'matNo', width: 18 }
    ];
    activeCourses.forEach((_, index) => {
      columnsConfig.push({ key: `ca_${index}`, width: 12 });
      columnsConfig.push({ key: `exam_${index}`, width: 12 });
    });
    worksheet.columns = columnsConfig;

    // 8. Style Application Pass
    worksheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
      if (rowNumber === 1) {
        row.height = 30;
      } else if (rowNumber === 2 || rowNumber === 3) {
        row.height = 22;
      } else {
        row.height = 20;
      }
      
      row.eachCell({ includeEmpty: true }, (cell) => {
        cell.border = thinBorder;
        cell.alignment = centerAlignment;
        cell.font = rowNumber <= 3 ? fontBold : fontNormal;
      });
    });

    // 9. Generate workbook stream buffer
    const buffer = await workbook.xlsx.writeBuffer();

    const filename = (departmentData.name || 'Results').replace(/\s+/g, '_');
    return new Response(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': `attachment; filename="${filename}_Results.xlsx"`,
      },
    });

  } catch (error) {
    console.error("Dynamic Excel Error:", error);
    return new Response(JSON.stringify({ error: 'Failed to generate dynamic dataset' }), { status: 500 });
  }
}