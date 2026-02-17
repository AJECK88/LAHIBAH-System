"use server"
import { PrismaClient } from "@prisma/client";
import { e } from "node_modules/@clerk/elements/dist/step-MsK0UT__";
import { a } from "node_modules/@clerk/elements/dist/submit-gXm55DfO";
import * as XLSX from "xlsx"

const prisma = new PrismaClient();
type ResultUploadRespone ={
   success: Boolean;
   error? : String;
}



export  async function UploadResult(ResultUploadRespone:ResultUploadRespone , FormData : FormData) {
  try{
     const file = FormData.get("file") as File;
     if (!file|| file.size === 0 ){
      throw new Error ("No file uploaded or file is Emtty....")
     }

     const buffer = Buffer.from(await file.arrayBuffer());
     const workbook = XLSX.read(buffer, { type: "buffer" });
     const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const Rowdata = XLSX.utils.sheet_to_json(sheet, {
  header: 1,   // VERY IMPORTANT
  raw: false
}) as any[][];
const data = Rowdata
  .filter(row =>
    row &&
    row.some(cell => cell && String(cell).trim() !== "")
  )
  .map(row =>
    row.map(cell =>
      typeof cell === "string" ? cell.trim() : cell
    )
  );

   const subjectRow = data[1];   // English, Economics, Math
   const subHeaderRow = data[2]; // CA /40, Exam /60 ...

// Build subject column map
const subject: { name: string; startIndex: number }[] = [];
console.log("Subject Row:", subjectRow);
console.log("SubHeader Row:", subHeaderRow);
console.log("Data Rows:", data.length);

for (let i = 2; i < subjectRow.length; i++) {
  if (subjectRow[i]) {
    subject.push({
      name: subjectRow[i],
      startIndex: i
    });
  }
}
 
        for (let i = 4; i < data.length; i++) {
  const row = data[i];

  const matricule = row[1]; // Assuming Matricule is in the second column (index 1)

  for (const subjectS of subject) {
    const base = subjectS.startIndex;

    const marks = {
      ca: Number(row[base]),
      exam: Number(row[base + 1]),
      total: Number(row[base + 2]),
      grade: row[base + 3]
    };

    // 3️⃣ STUDENT (must exist)
    const student = await prisma.student.findUnique({
      where: {matricule: matricule}
    });
    if (!student) throw new Error(`Student ${matricule} not found`);

    // 4️⃣ SUBJECTS → RESULTS
    const subjects = Object.entries(row).filter(
      ([key]) => !["Level", "Department", "Matricule"].includes(key)
    );

    for (const [courseName, marks] of subjects) {

      // 5️⃣ COURSE (must exist)
      const course = await prisma.subject.findUnique({
        where: { name: courseName }
      });
      if (!course) throw new Error(`Course "${courseName}" not found`);
      
      // 6️⃣ EXAM (must exist)
      const exam = await prisma.exam.findFirst({
        where: {
          courseId: course.id,
          levelId: student.levelId,
        
        }
      });
      if (!exam) throw new Error(`Exam for course "${courseName}" not found for student's level and department`);

      // 7️⃣ RESULT (create or update ONLY)
      await prisma.result.upsert({
  where: {
    studentId_courseId: {
      studentId: student.id,
      courseId: course.id
    }
  },
  update: {
    CA: marks.ca,
    Exam: marks.exam,
    total: marks.total,
    date: new Date(),
    examId: exam.id
  },
  create: {
    studentId: student.id,
    courseId: course.id,
    CA: marks.ca,
    Exam: marks.exam,
    total: marks.total,
    date: new Date(),
    examId: exam.id
  }
});

    }
  
  
  
  }
  }
 return {
   success: true,
   }
}
catch (error:any) {
  if (error.code === "P1001" || error.code === "P2002") {
    return {
      success: false,
      error: "Network error please check your connection and try again"
    };
  } 
 else if (error instanceof Error) { 
  return {
 success: false, error: error instanceof Error ? error.message : "Unknown error" };
} 

 else { 
  
  return {
    success: false,
    error: "An unexpected error occurred. Please try again later."
  };
}
}
}