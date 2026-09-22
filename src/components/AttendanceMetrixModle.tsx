"use client";

import { useState } from "react";
import VeiwAttendanceMatrix from "@/components/VeiwAttendance";
import { Eye, X } from "lucide-react";

interface AttendanceMatrixModalProps {
  courseCode: string;
  dates: string[];
  records: any[];
  students: any[];
  courseName: string;
  Barch: string | null;
}

export default function AttendanceMatrixModal({
  courseCode,
  dates,
  records,
  students,
  courseName,
  Barch,
}: AttendanceMatrixModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow font-medium transition-colors"
      >
        <Eye className="w-4 h-4" />
        View Attendance Form
      </button>

      {/* Modal Backdrop & Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="relative w-full max-w-20xl bg-white dark:bg-gray-600 rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto p-6 space-y-4">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b pb-3 dark:border-gray-800">
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                Attendance Form — {courseName}
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Matrix Component */}
            <div className="pt-2">
              <VeiwAttendanceMatrix
                courseCode={courseCode}
                dates={dates}
                records={records}
                students={students}
                courseName={courseName}
                Barch={Barch}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}