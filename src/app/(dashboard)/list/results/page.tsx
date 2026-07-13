import Image from 'next/image';
import TablesearchBar from '@/components/TablesearchBar';
import React from 'react';
import SeedfileInput from '@/components/Forms/SeedfileInput';
import ResultForm from '@/components/Forms/QUERYDB/resultQueryForm';
import UserId, { role } from '@/components/user';
import prisma from '@/lib/prisma';
import { id } from 'zod/locales';
import { string } from 'zod';

// Types for the DB structure
interface CourseResult {
  CA: number | null;
  Exam: number | null;
  total: number | null;
  grade: string | null;
  course: {
    name: string;
  };
}

interface StudentWithResults {
  firstName: string;
  lastName: string;
  level: { LevelName: string };
  matricule: string | null;
  results: CourseResult[];
}

interface DepartmentWithStudents {
  id: string;
  name: string;
  students: StudentWithResults[];
}

const ResultsListPage = async () => {

  const userRole = await role();
  const userId = await UserId();
  const userIdString = typeof userId === 'string' ? userId : undefined;
  let resultsDB : DepartmentWithStudents[] =[]

    //conditional filtering based on roles
  const isStudent = userRole === 'student' ;

  // 1. Fetch data from Prisma 
if(userRole === "student"){
  // Query ONLY the logged-in student and include their single department
  console.log("a student just login")
  const studentData = await prisma.student.findUnique({
    where: {id:userIdString}, // Adjust to 'matricule: userId' if that is your identifier
    include: {
      department: true,
      level: { select: { id: true, LevelName: true } },
      results: {
        select: {
          CA: true,
          Exam: true,
          total: true,
          grade: true,
          course: { select: { name: true } }
        }
      }
    }
  });

  // Re-shape the single student data to fit your existing department loop structure
  if (studentData && studentData.department) {
    resultsDB = [{
      id: studentData.department.id,
      name: studentData.department.name,
      students: [{
        firstName: studentData.firstName,
        lastName: studentData.lastName,
        matricule: studentData.matricule,
        level: studentData.level,
        results: studentData.results
      }]
    }];
  }
   
}
else{
 resultsDB = await prisma.department.findMany({
    include: {
      students: { 
        where :{
          results:{
            some:{}
          }
        },
        select: {
          lastName: true,
          firstName: true,
          matricule: true,
          level:true,
          results: { 
            select: {
              CA: true,
              Exam: true,
              grade:true,
              total:true,
              course: {
                select: { name: true }
              }
            }
          }
        }
      }
    }
  });
}


  const levels = await prisma.level.findMany({
    select: { id: true, LevelName: true }
  });
  
  const departments = await prisma.department.findMany({
    select: { id: true, name: true }
  });

  return (
    <div className="flex-1 bg-white p-4 rounded-md m-4 mt-0 h-full">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-4 items-center md:w-auto justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Results</h1>
        <div>
          <TablesearchBar />
        </div>
      {userRole === "admin" && <SeedfileInput type="Result" />}

      {userRole ==="admin"&& <ResultForm levels={levels} departments={departments} />
      }
        <div className="flex items-center gap-4 self-end">
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-100">
            <Image src="/filter.png" alt="Filter" width={14} height={14} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-100">
            <Image src="/sort.png" alt="Sort" width={14} height={14} />
          </button>
        </div>
      </div>

      {/* Main List Table */}
      <div className="overflow-x-auto p-4">
        {resultsDB.map((dept) => {
          if (dept.students.length === 0) return null;

          // Dynamically gather all unique course names present in this department to build headers
          const uniqueCourses = Array.from(
            new Set(
              dept.students.flatMap((student) =>
                student.results.map((r) => r.course.name)
              )
            )
          );

          return (
            <React.Fragment key={dept.id}>

              <table className="border-collapse border w-full text-sm mb-8">
                <thead className="bg-gray-100">
                  <tr>
                    <td
                      colSpan={3 + uniqueCourses.length * 4}
                      className="p-2 font-semibold bg-white text-base"
                    >
                     Level {dept.students[0]?.level.LevelName} - {dept.name}
                    </td>
                  </tr>

                  <tr>
                    <th rowSpan={2} className="border p-2 w-12">No</th>
                    <th rowSpan={2} className="border p-2">Mat No</th>
                    <th rowSpan={2} className="border p-2">Student Name</th>

                    {uniqueCourses.map((courseName) => (
                      <th key={courseName} colSpan={4} className="border p-2 text-center">
                        {courseName}
                      </th>
                    ))}
                  </tr>

                  <tr>
                    {uniqueCourses.map((_, i) =>
                      ["CA /40", "Exam /60", "Total /100", "Grade"].map((h) => (
                        <th key={`${i}-${h}`} className="border p-1 text-xs font-normal">
                          {h}
                        </th>
                      ))
                    )}
                  </tr>
                </thead>

                <tbody>
                  {dept.students.map((student, index) => (
                    <tr key={student.matricule} className="hover:bg-gray-50">
                      <td className="border p-1 text-center font-semibold">{index + 1}</td>
                      <td className="border p-1 font-mono text-xs">{student.matricule}</td>
                      <td className="border p-1 whitespace-nowrap">{`${student.firstName} ${student.lastName}`}</td>

                      {uniqueCourses.map((courseName) => {
                        // Find the student's grade row for this specific course
                        const match = student.results.find((r) => r.course.name === courseName);
                        
                        if (!match) {
                          // Fallback if the student doesn't take this specific course
                          return (
                            <React.Fragment key={`${student.matricule}-${courseName}`}>
                              <td colSpan={4} className="border p-1 text-center text-gray-400 bg-gray-50">-</td>
                            </React.Fragment>
                          );
                        }

                        const total = match.grade;
                        const grade = match.grade;

                        return (
                          <React.Fragment key={`${student.matricule}-${courseName}`}>
                            <td className={`border p-1 text-center ${match.CA !== null && match.CA < 20 ? "text-red-500 font-semibold" : ""}`}>
                              {Number(match.CA)>0 ?match.CA : "#NAN"}
                            </td>
                            <td className={`border p-1 text-center ${match.Exam !== null && match.Exam < 30 ? "text-red-500 font-semibold" : ""}`}>
                              {Number(match.Exam) >0?match.Exam: "#NAN"}
                            </td>
                            <td className={`border p-1 text-center ${total !== null && Number(total) < 50 && (match.CA !== null || match.Exam !== null) ? "text-red-500 font-semibold" : ""}`}>
                              {Number(total) > 0?total: "#NAN"}
                            </td>
                            <td className={`border p-1 text-center ${grade === 'F' || grade === '#NAN' ? "text-red-500 font-semibold" : ""}`}>
                              {Number(match.CA)<1 && Number(match.Exam)<1 ?"#NAN" :grade}
                            </td>
                          </React.Fragment>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ResultsListPage;