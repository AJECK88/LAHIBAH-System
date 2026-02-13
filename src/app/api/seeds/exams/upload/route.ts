"use server"
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import * as XLSX from "xlsx";

const prisma = new PrismaClient();
  const year = new Date().getFullYear();
       const month = new Date().getMonth(); // 0 = January

  // If before August, we're in the previous school year
  const startYear = month < 7 ? year - 1 : year;
  const endYear = startYear + 1;
export async function UploadExam (formData: FormData) {
  try {
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const workbook = XLSX.read(buffer, { type: "buffer" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(sheet , {raw: false}) as Array<Record<string, any>>;
    console.log(rows);

  for (const row of rows) {
    console.log(row.level);
    
    // 1️⃣ LEVEL
    const level = await prisma.level.findUnique({
      where: { LevelName: String(row.Level) }
    });
    if (!level) throw new Error(`Level ${row.Level} not found`);
     
    // 2️⃣ DEPARTMENT
    const department = await prisma.department.findUnique({
      where: { name: row.Department }
    });
    if (!department) throw new Error(`Department "${row.Department}" not found`);

    // 3️⃣ SUBJECTS ONLY
    const META_KEYS = [
      "Level",
      "Department",
      "Start Date",
      "End Date",  
      "Exam Name",
      "ClassRoom"
    ];

    const subjects = Object.entries(row).filter(
      ([key]) => !META_KEYS.includes(key)
    );
    console.log("Subjects found in row:", subjects.map(([key]) => key));
    for (const [courseName , _] of subjects) { 
         console.log(`Processing course: ${courseName} ....`);
      // 4️⃣ COURSE
      const course = await prisma.subject.findUnique({
        where: { name: courseName }
      });
      if (!course) throw new Error(`Course "${courseName}" not found`);
    // Classroom
    const classRoom = await prisma.classroom.findUnique({
      where: { name: row.ClassRoom}
    });
    if (!classRoom) throw new Error(`Classroom "${row.ClassRoom}" not found`);

     // 6️⃣ CREATE OR UPDATE EXAM FIRST
const exam = await prisma.exam.upsert({
  where: {
    name: `${row['Exam Name']}-${department.name}-${course.name}`, // MUST be unique in schema
  },
  update: {
    name: `${row['Exam Name']}-${department.name}-${course.name}`, // Ensure uniqueness
    startDate: new Date(row['Start Date']),
    endDate: new Date(row['End Date']),
    schoolYear: `${startYear}/${endYear}`,
    title: row['Exam Name'],
    DepartmentId: department.id,
    ClassRoomId: classRoom.id,
    courseId: course.id,
    levelId: level.id,
  },
  create: {
    name: `${row['Exam Name']}-${department.name}-${course.name}`, // Ensure uniqueness
    startDate: new Date(row['Start Date']),
    endDate: new Date(row['End Date']),
    schoolYear: `${startYear}/${endYear}`,
    title: row['Exam Name'],
    DepartmentId: department.id,
    ClassRoomId: classRoom.id,
    courseId: course.id,
    levelId: level.id,
  },
});

// 7️⃣ LINK EXAM TO DEPARTMENT
await prisma.examDepartment.upsert({
  where: {
    examId_departmentId: {
      examId: exam.id,
      departmentId: department.id,
    },
  },
  update: {}, // nothing to update
  create: {
    examId: exam.id,
    departmentId: department.id,
  },
});

    }   
      
    }

    return NextResponse.json({ message: "Upload successful" });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
  finally {
    await prisma.$disconnect();
  }
}
