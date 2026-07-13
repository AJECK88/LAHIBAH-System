"use server";
import { PrismaClient } from "@prisma/client";
import * as XLSX from "xlsx";

const prisma = new PrismaClient();

type ResultUploadResponse = {
   success: boolean;
   error?: string;
}

export async function UploadResult(prevState: any, formData: FormData): Promise<ResultUploadResponse> {
  try {
     const file = formData.get("file") as File;
     if (!file || file.size === 0) {
        throw new Error("No file uploaded or file is empty.");
     }
     
     const buffer = Buffer.from(await file.arrayBuffer());
     const workbook = XLSX.read(buffer, { type: "buffer" });
     const sheet = workbook.Sheets[workbook.SheetNames[0]];
     
     const rowData = XLSX.utils.sheet_to_json(sheet, {
       header: 1,
       raw: false
     }) as any[][];

     // Clean blank rows but keep the index intact
     const data = rowData.filter(row => row && row.some(cell => cell && String(cell).trim() !== ""));

     const subjectRow = data[1]; // Index 1 contains: English, Economics, Math

     // Build explicit tracking indexes 
     const subjectsList: { name: string; startIndex: number }[] = [];
     for (let i = 3; i < subjectRow.length; i++) {
       if (subjectRow[i] && String(subjectRow[i]).trim() !== "") {
         subjectsList.push({
           name: String(subjectRow[i]).trim(),
           startIndex: i
         });
       }
     }

     // Grade mapper utility function
     function grandMap(totalScore: number): string {
       if (totalScore >= 80) return "A+";
       if (totalScore >= 70) return "A";
       if (totalScore >= 65) return "B+";
       if (totalScore > 50) return "B";
       if (totalScore >= 45) return "C+";
       if (totalScore >= 40) return "C";
       return "D"; 
     }

     // 🚀 Core Processing Loop: Data rows start at index 3
     for (let i = 3; i < data.length; i++) {
       const row = data[i];
       const matricule = row[2]; // CSNXXXXXX is in Column B (Index 1)

       if (!matricule) continue;

       // Verify Student exists
       const student = await prisma.student.findUnique({
         where: { matricule: String(matricule).trim() }
       });
       if (!student) throw new Error(`Student ${matricule} not found in database.`);

       // Loop over identified subject blocks
       for (const sub of subjectsList) {
         const baseIndex = sub.startIndex;
         
         const caMark = Number(row[baseIndex] || 0);
         const examMark = Number(row[baseIndex + 1] || 0);
         const totalMark = caMark + examMark;

         // Verify Course/Subject Definition
         const course = await prisma.subject.findUnique({
           where: { name: sub.name }
         });
         if (!course) throw new Error(`Course "${sub.name}" not defined in database structures.`);
         
         // Fetch corresponding Exam configuration meta-id
         const exam = await prisma.exam.findFirst({
           where: {
             courseId: course.id,
             levelId: student.levelId,
           }
         });
         if (!exam) throw new Error(`Exam template mapping for "${sub.name}" not found.`);

         // Safe data persistence upsert tracking
         await prisma.result.upsert({
           where: {
             studentId_courseId: {
               studentId: student.id,
               courseId: course.id
             }
           },
           update: {
             CA: caMark,
             Exam: examMark,
             total: totalMark,
             date: new Date(),
             grade: grandMap(totalMark),
             examId: exam.id
           },
           create: {
             studentId: student.id,
             courseId: course.id,
             CA: caMark,
             Exam: examMark,
             total: totalMark,
             grade: grandMap(totalMark),
             date: new Date(),
             examId: exam.id
           }
         });
       }
     }

     return { success: true };

  } catch (error: any) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unexpected execution error occurred."
    };
  }
}