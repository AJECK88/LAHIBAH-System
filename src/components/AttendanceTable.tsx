"use client";

import { CreateAttendance } from "@/lib/actions";
import { BarChart2, Check, Clock, Pencil, UserCheck, X } from "lucide-react";
import { useActionState, useState, useTransition } from "react";
import { toast } from "react-toastify";

type Student = {
  id: string;
  matricule: string;
  firstName: string;
  lastName: string;
  totalAttdHours: number;
  status: "Enrolled" | "Inactive";
};

type PropsType = {
  course: string;
  courseId: string;
  room: string;
  Coursetime: string;
  MOCK_STUDENTS: Student[];
};

type AttendanceStatus = "PRESENT" | "ABSENT" | "LATE";

const AttendanceTable = ({ course, courseId, room, Coursetime, MOCK_STUDENTS }: PropsType) => {
  const [selectedDate] = useState<Date>(new Date());
  
  // Track student status values as a map: { [studentId]: "PRESENT" | "ABSENT" | "LATE" }
  const [attendance, setAttendance] = useState<Record<string, AttendanceStatus>>({});

  const [state, FormAction] = useActionState(CreateAttendance, {
    errorMessage: false,
    successMessage: false,
  });

  const [isPending, startTransition] = useTransition();

  // Status Change Handlers
  const handleStatusChange = (studentId: string, status: AttendanceStatus) => {
    setAttendance((prev) => ({ ...prev, [studentId]: status }));
  };

  const handleMarkAllPresent = () => {
    const updatedMap: Record<string, AttendanceStatus> = {};
    MOCK_STUDENTS.forEach((student) => {
      updatedMap[student.id] = "PRESENT";
    });
    setAttendance(updatedMap);
    toast.info("Marked all enrolled students as Present");
  };

  // Submit Handler: Sends bulk payload in a single server call
  const handleSave = () => {
    const payload = MOCK_STUDENTS.map((student) => {
      const status = attendance[student.id] || "PRESENT";
      return {
        studentId: student.id,
        courseId: Number(courseId),
        date: selectedDate,
        status: status,
        present: status === "PRESENT",
      };
    });

    startTransition(async () => {
      try {
        // FormAction expects a single AttendanceType per call; send each record individually
        for (const record of payload) {
          // await each call to ensure errors are caught per record
          // eslint-disable-next-line no-await-in-loop
          await FormAction(record as any);
        }
        toast.success("Attendance saved successfully!");
      } catch (error) {
        toast.error("Failed to save attendance.");
      }
    });
  };

  // Live Count Metrics
  const totalStudents = MOCK_STUDENTS.length;
  const markedCount = Object.keys(attendance).length;
  const presentCount = Object.values(attendance).filter((s) => s === "PRESENT").length;

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-2xs overflow-hidden space-y-0">
      {/* Executive Control Header */}
      <div className="p-4 sm:p-5 bg-gray-50/50 border-b border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-base font-bold text-gray-900">{course}</h2>
            <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-500 text-[11px] font-semibold border border-blue-200/60">
              {room}
            </span>
          </div>
          <p className="text-xs text-gray-500 font-medium mt-0.5">
            Schedule: {Coursetime} • {selectedDate.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric" })}
          </p>
        </div>

        {/* Real-time Counter & Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="text-right px-3 py-1 bg-white rounded-lg border border-gray-200 shadow-2xs">
            <span className="text-xs font-semibold text-gray-500">Progress: </span>
            <span className="text-xs font-bold text-gray-900">{markedCount}/{totalStudents}</span>
            <span className="text-[11px] text-emerald-600 font-bold ml-1">({presentCount} Present)</span>
          </div>

          <button
            type="button"
            onClick={handleMarkAllPresent}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold transition-all"
          >
            <UserCheck className="w-3.5 h-3.5 text-gray-600" />
            Mark All Present
          </button>

          <button
            type="button"
            onClick={handleSave}
            disabled={isPending || totalStudents === 0}
            className="inline-flex items-center gap-1.5 bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-2xs transition-all disabled:opacity-50 cursor-pointer"
          >
            {isPending ? "Saving Records..." : "Save Attendance"}
          </button>
        </div>
      </div>

      {/* Main Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-500 border-b border-gray-200 font-semibold uppercase tracking-wider text-[10px]">
              <th className="py-3 px-4">Matricule</th>
              <th className="py-3 px-4">Student Name</th>
              <th className="py-3 px-4">Attendance Status</th>
              <th className="py-3 px-4">Attd. Hours</th>
              <th className="py-3 px-4">Enrollment</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700 bg-white">
            {MOCK_STUDENTS.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-8 text-center text-gray-400 font-medium">
                  No enrolled students found for this course.
                </td>
              </tr>
            ) : (
              MOCK_STUDENTS.map((student) => {
                const currentStatus = attendance[student.id];

                return (
                  <tr key={student.id} className="hover:bg-gray-50/70 transition-colors">
                    {/* Matricule */}
                    <td className="py-3 px-4 font-mono font-bold text-gray-600">
                      {student.matricule}
                    </td>

                    {/* Student Name */}
                    <td className="py-3 px-4 font-semibold text-gray-900">
                      {student.firstName} {student.lastName}
                    </td>

                    {/* Attendance Status Selector Toggle Group */}
                    <td className="py-2.5 px-4">
                      <div className="inline-flex items-center gap-1 p-1 bg-gray-100/80 rounded-lg border border-gray-200/60">
                        {/* Present Button */}
                        <button
                          type="button"
                          onClick={() => handleStatusChange(student.id, "PRESENT")}
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                            currentStatus === "PRESENT"
                              ? "bg-emerald-600 text-white shadow-2xs"
                              : "text-gray-600 hover:text-gray-900 hover:bg-gray-200/60"
                          }`}
                        >
                          <Check className="w-3.5 h-3.5" />
                          Present
                        </button>

                        {/* Absent Button */}
                        <button
                          type="button"
                          onClick={() => handleStatusChange(student.id, "ABSENT")}
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                            currentStatus === "ABSENT"
                              ? "bg-rose-600 text-white shadow-2xs"
                              : "text-gray-600 hover:text-gray-900 hover:bg-gray-200/60"
                          }`}
                        >
                          <X className="w-3.5 h-3.5" />
                          Absent
                        </button>

                        {/* Late Button */}
                        <button
                          type="button"
                          onClick={() => handleStatusChange(student.id, "LATE")}
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                            currentStatus === "LATE"
                              ? "bg-amber-500 text-white shadow-2xs"
                              : "text-gray-600 hover:text-gray-900 hover:bg-gray-200/60"
                          }`}
                        >
                          <Clock className="w-3.5 h-3.5" />
                          Late
                        </button>
                      </div>
                    </td>

                    {/* Attendance Hours */}
                    <td className="py-3 px-4 font-medium text-gray-600">
                      {student.totalAttdHours} hrs
                    </td>

                    {/* Status Badge */}
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium bg-gray-100 text-gray-700">
                        {student.status}
                      </span>
                    </td>

                    {/* Quick Row Actions */}
                    <td className="py-3 px-4 text-right space-x-1">
                      <button type="button" className="p-1 text-gray-400 hover:text-gray-700 rounded-md transition-colors">
                        <Pencil className="w-3.5 h-3.5" />
                      </button>
                      <button type="button" className="p-1 text-gray-400 hover:text-gray-700 rounded-md transition-colors">
                        <BarChart2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceTable;