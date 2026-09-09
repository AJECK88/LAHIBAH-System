// src/app/(dashboard)/list/attendance/page.tsx
"use client";

import { useState, useTransition } from "react";

import {
  Download,
  Check,
  X,
  Clock,
  Pencil,
  BarChart2,
  ChevronLeft,
} from "lucide-react";
import { toast } from "react-toastify";
import AttendanceCalendar from "@/components/AttendanceCalender";

type Student = {
  id: string;
  studentId: string;
  name: string;
  totalAttdHours: number;
  status: "Enrolled" | "Inactive";
};

type AttendanceStatus = "PRESENT" | "ABSENT" | "LATE";

// Mock Data
const MOCK_STUDENTS: Student[] = [
  { id: "1", studentId: "BSBAD0555", name: "Jeremy Schmidt", totalAttdHours: 12, status: "Enrolled" },
  { id: "2", studentId: "BSBAD0556", name: "Carlota Monteiro", totalAttdHours: 11, status: "Enrolled" },
  { id: "3", studentId: "BSBAD0557", name: "Lungelo Ngcaba", totalAttdHours: 12, status: "Enrolled" },
  { id: "4", studentId: "BSBAD0558", name: "Sampson Totton", totalAttdHours: 12, status: "Enrolled" },
  { id: "5", studentId: "BSBAD0559", name: "Abbie Wilson", totalAttdHours: 12, status: "Enrolled" },
  { id: "6", studentId: "BSBAD0560", name: "Sukhbirpal Dhalan", totalAttdHours: 11, status: "Enrolled" },
  { id: "7", studentId: "BSBAD0561", name: "Joana Leite", totalAttdHours: 12, status: "Enrolled" },
  { id: "8", studentId: "BSBAD0562", name: "Shen Zhi", totalAttdHours: 12, status: "Enrolled" },
];

export default function MarkAttendancePage() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(2020, 0, 17));
  const [isPending, startTransition] = useTransition();

  // Filter selections
  const [course, setCourse] = useState("Diploma of Accounting (FNS50217)");
  const [subject, setSubject] = useState("Basics of User Research (BB5012)");
  const [semester, setSemester] = useState("Winter Sem - Term 1");
  const [group, setGroup] = useState("Batch B");

  // Track student status values
  const [attendance, setAttendance] = useState<Record<string, AttendanceStatus>>({
    "1": "PRESENT",
    "2": "ABSENT",
    "3": "PRESENT",
    "4": "LATE",
    "5": "PRESENT",
    "6": "ABSENT",
    "7": "PRESENT",
    "8": "PRESENT",
  });

  const handleStatusChange = (studentId: string, status: AttendanceStatus) => {
    setAttendance((prev) => ({ ...prev, [studentId]: status }));
  };

  const handleSave = () => {
    startTransition(async () => {
      // Execute your save server action here
      await new Promise((resolve) => setTimeout(resolve, 600));
      toast.success("Attendance saved successfully!");
    });
  };

  return (
    <div className="p-4 lg:p-6  min-h-screen space-y-6">
      {/* Top Navigation */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Attendance</h1>
         <div className="flex items-center gap-2 text-gray-900 font-bold text-2xs">
                <ChevronLeft className="w-4 h-4 text-gray-500 cursor-pointer hover:text-gray-800" onClick={() => window.history.back()} />
                <span>Mark Attendance</span>
              </div>
               <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold">
               Department: {course} 
              </div>
        <button
          type="button"
          className="flex items-center gap-2 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 text-xs font-semibold px-3 py-2 rounded-xl shadow-sm transition-all"
        >
          <Download className="w-3.5 h-3.5" />
          Download Excel
        </button>
      </div>

      {/* Main Grid: Filters Sidebar + Attendance Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Filters Sidebar */}
        <div className="lg:col-span-3 space-y-4">
          <AttendanceCalendar
            selectedDate={selectedDate}
            onDateSelect={(d: Date) => setSelectedDate(d)}
          />

          {/* Filter Dropdowns */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm space-y-3 text-xs">
            <div>
              <label className="block text-gray-500 font-medium mb-1">
                Course
              </label>
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="w-full bg-slate-50 border border-gray-200 rounded-xl p-2.5 font-semibold text-gray-800 outline-none focus:border-blue-500 transition-colors"
              >
                <option>Diploma of Accounting (FNS50217)</option>
                <option>Computer Science (HND)</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-500 font-medium mb-1">
                Subject
              </label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-slate-50 border border-gray-200 rounded-xl p-2.5 font-semibold text-gray-800 outline-none focus:border-blue-500 transition-colors"
              >
                <option>Basics of User Research (BB5012)</option>
                <option>Database Management Systems</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-500 font-medium mb-1">
                Semester
              </label>
              <select
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                className="w-full bg-slate-50 border border-gray-200 rounded-xl p-2.5 font-semibold text-gray-800 outline-none focus:border-blue-500 transition-colors"
              >
                <option>Winter Sem - Term 1</option>
                <option>Spring Sem - Term 2</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-500 font-medium mb-1">
                Group
              </label>
              <select
                value={group}
                onChange={(e) => setGroup(e.target.value)}
                className="w-full bg-slate-50 border border-gray-200 rounded-xl p-2.5 font-semibold text-gray-800 outline-none focus:border-blue-500 transition-colors"
              >
                <option>Batch B</option>
                <option>Batch A</option>
              </select>
            </div>
          </div>
        </div>

        {/* Right Column: Attendance Marking Area */}
        <div className="lg:col-span-9  border-gray-100  space-y-6">
          {/* Section Header Bar */}
          <div className="flex flex-col md:flex-row md:items-center rounded-sm justify-between gap-4 p-4 border border-gray-200">
            <div className="space-y-1">
             
              <h2 className="text-lg font-bold text-gray-900">
                course: {subject}
              </h2>
              <p className="text-xs text-gray-400 font-medium">
                class Room: {group}
              </p>
            </div>
             <div className="h-8 w-px bg-gray-300" aria-hidden="true" />
            <div className="flex items-center gap-4">

              <div className="text-right">
                <div className="text-xs font-bold text-gray-800">
                  Time: 10:00 AM To 10:45 AM
                </div>
                <div className="text-[11px] text-gray-400 font-medium">
                  Week 3 - Tuesday - {selectedDate.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                </div>
              </div>
              </div>
        <div className="h-8 w-px bg-gray-300" aria-hidden="true" />
           <div className="flex items-center gap-4">
              <span className="text-amber-600  px-3 py-1 rounded-full text-xs font-bold">
                Pending
              </span>

              <button
                onClick={handleSave}
                disabled={isPending}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-5 py-2.5 rounded-xl transition-all shadow-sm disabled:opacity-50"
              >
                {isPending ? "Saving..." : "Save Attendance"}
              </button>
            </div>
          </div>

          {/* Student Attendance Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="text-gray-400 border-b border-gray-100 font-medium">
                  <th className="pb-3 font-semibold">Student ID</th>
                  <th className="pb-3 font-semibold">Student Name</th>
                  <th className="pb-3 font-semibold">Status</th>
                  <th className="pb-3 font-semibold">Total Attd. Hours</th>
                  <th className="pb-3 font-semibold">Status</th>
                  <th className="pb-3 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {MOCK_STUDENTS.map((student) => {
                  const currentStatus = attendance[student.id] || "PRESENT";

                  return (
                    <tr
                      key={student.id}
                      className="hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="py-3.5 font-bold text-gray-700">
                        {student.studentId}
                      </td>
                      <td className="py-3.5 font-bold text-gray-900">
                        {student.name}
                      </td>

                      {/* Attendance Toggle Group */}
                      <td className="py-3.5">
                        <div className="inline-flex items-center gap-1.5 bg-slate-100/70 p-1 rounded-xl">
                          {/* Present Button */}
                          <button
                            type="button"
                            onClick={() => handleStatusChange(student.id, "PRESENT")}
                            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg font-semibold transition-all ${
                              currentStatus === "PRESENT"
                                ? "bg-emerald-100 text-emerald-700 border border-emerald-200 shadow-2xs"
                                : "text-gray-400 hover:text-gray-600"
                            }`}
                          >
                            <Check className="w-3 h-3" />
                            Present
                          </button>

                          {/* Absent Button */}
                          <button
                            type="button"
                            onClick={() => handleStatusChange(student.id, "ABSENT")}
                            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg font-semibold transition-all ${
                              currentStatus === "ABSENT"
                                ? "bg-rose-100 text-rose-700 border border-rose-200 shadow-2xs"
                                : "text-gray-400 hover:text-gray-600"
                            }`}
                          >
                            <X className="w-3 h-3" />
                            Absent
                          </button>

                          {/* Late Button */}
                          <button
                            type="button"
                            onClick={() => handleStatusChange(student.id, "LATE")}
                            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg font-semibold transition-all ${
                              currentStatus === "LATE"
                                ? "bg-amber-100 text-amber-700 border border-amber-200 shadow-2xs"
                                : "text-gray-400 hover:text-gray-600"
                            }`}
                          >
                            <Clock className="w-3 h-3" />
                            Late
                          </button>
                        </div>
                      </td>

                      <td className="py-3.5 font-bold text-gray-700">
                        {student.totalAttdHours} Hours
                      </td>

                      <td className="py-3.5 font-semibold text-gray-600">
                        {student.status}
                      </td>

                      <td className="py-3.5 text-right space-x-2 text-gray-400">
                        <button className="hover:text-gray-600 p-1">
                          <Pencil className="w-3.5 h-3.5" />
                        </button>
                        <button className="hover:text-gray-600 p-1">
                          <BarChart2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}