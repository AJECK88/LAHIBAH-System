"use client";

import React from "react";
import { Check, X, Clock } from "lucide-react";
import Image from "next/image";

interface Student {
  id: string;
  name: string;
  matricule: string;
}

interface AttendanceRecord {
  studentId: string;
  date: string; // YYYY-MM-DD
  status: "PRESENT" | "ABSENT" | "LATE";
}

interface AttendanceMatrixProps {
  courseName: string;
  courseCode: string;
  dates: string[]; // List of session dates e.g. ["2026-09-01", "2026-09-03"]
  students: Student[];
  records: AttendanceRecord[];
  Barch:string | null
}

export default function VeiwAttendanceMatrix({
  courseName,
  courseCode,
  dates,
  students,
  records,
  Barch
}: AttendanceMatrixProps) {
  // Helper to find attendance status
  const getStatus = (studentId: string, date: string) => {
    return records.find(
      (r) => r.studentId === studentId && r.date === date
    )?.status;
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      {/* Header Info */}
      <div className="mb-4 text-center">
        <h2 className="text-xl font-bold text-gray-600 flex flex-row items-center justify-center">
          COURSE ATTENDANCE <Image height={80} width={20} src={"/keyboard_double_arrow.png"} alt="Arrow"/> {courseCode} [{courseName}]
        </h2>
        <p className="text-sm text-gray-500">First Semester Sheet Barch Of:{Barch}</p>
      </div>

      {/* Scrollable Table Container */}
      <div className="overflow-x-auto max-w-full border rounded-lg">
        <table className="w-full border-collapse text-xs text-left">
          <thead>
            <tr className="bg-slate-100 border-b border-gray-300">
              <th className="p-3 sticky left-0 bg-slate-100 z-10 w-12 font-semibold">#</th>
              <th className="p-3 sticky left-12 bg-slate-100 z-10 min-w-[180px] font-semibold border-r">
                Student Name
              </th>
              <th className="p-3 min-w-[120px] font-semibold border-r">Matricule</th>
              
              {/* Date Columns */}
              {dates.map((date, idx) => (
                <th key={idx} className="p-2 text-center border-r min-w-[40px] font-medium">
                  <span className="block transform -rotate-45 text-[10px]">
                    {date}
                  </span>
                </th>
              ))}
              <th className="p-3 text-center font-semibold bg-emerald-50">Total</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => {
              let presentCount = 0;

              return (
                <tr key={student.id} className="border-b hover:bg-slate-50 transition-colors">
                  <td className="p-3 sticky left-0 bg-white z-10 font-medium">{index + 1}</td>
                  <td className="p-3 sticky left-12 bg-white z-10 font-medium text-gray-900 border-r">
                    {student.name}
                  </td>
                  <td className="p-3 border-r font-mono text-gray-600">{student.matricule}</td>

                  {/* Attendance Status Grid Cells */}
                  {dates.map((date, dIdx) => {
                    const status = getStatus(student.id, date);
                    if (status === "PRESENT") presentCount++;

                    return (
                      <td key={dIdx} className="p-2 border-r text-center bg-blue-100 w-1.5 h-1.5">
                        {status === "PRESENT" && (
                          <span className="inline-flex items-center justify-center text-emerald-700 rounded-full font-bold">
                            <Image height={20} width={20} src={"/check.png"} alt="p"/>
                          </span>
                        )}
                        {status === "ABSENT" && (
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-rose-100 text-rose-700 rounded-full font-bold">
                            <Image height={20} width={20} src={"/close_x.png"} alt="A"/>
                          </span>
                        )}
                        {status === "LATE" && (
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-amber-100 text-amber-700 rounded-full font-bold">
                            L
                          </span>
                        )}
                        {!status && <span className="text-gray-300">-</span>}
                      </td>
                    );
                  })}

                  {/* Total Present Count */}
                  <td className="p-3 text-center font-bold bg-emerald-50 text-emerald-800 w-2 h-2">
                    {presentCount}/{dates.length}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}