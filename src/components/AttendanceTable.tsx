"use client"
import { BarChart2, Check, Clock, Pencil, X } from "lucide-react";
import { startTransition, useState, useTransition } from "react";
import { toast } from "react-toastify";
type propsType={
  course:string,
  room:string
  Coursetime:string
}

const AttendanceTable = (props:propsType)=>{

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

  const [selectedDate, setSelectedDate] = useState<Date>(new Date(2020, 0, 17));
    // Track student status values
  const [attendance, setAttendance] = useState<Record<string, AttendanceStatus>>({

  });
   const [isPending, startTransition] = useTransition();
    const handleSave = () => {
    startTransition(async () => {
      // Execute your save server action here
      await new Promise((resolve) => setTimeout(resolve, 600));
      toast.success("Attendance saved successfully!");
    });
  };

    const handleStatusChange = (studentId: string, status: AttendanceStatus) => {
    setAttendance((prev) => ({ ...prev, [studentId]: status }));
  };


    return(
    <div className="lg:col-span-9  border-gray-100  space-y-6">
          {/* Section Header Bar */}
          <div className="flex flex-col md:flex-row md:items-center rounded-sm justify-between gap-4 p-4 border border-gray-200">
            <div className="space-y-1">
             
              <h2 className="text-lg font-bold text-gray-700">
                Course: {props.course}
              </h2>
              <p className="text-xs text-gray-400 font-medium">
                Class Room: {props.room}
              </p>
            </div>
             <div className="h-8 w-px bg-gray-300" aria-hidden="true" />
            <div className="flex items-center gap-4">

              <div className="text-right">
                <div className="text-xs font-bold text-gray-800">
               Time:{props.Coursetime}
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
              <tbody className=" divide-gray-200 divide-y border border-gray-200 bg-white">
                {MOCK_STUDENTS.map((student) => {
                  const currentStatus = attendance[student.id] || "PRESENT";

                  return (
                    <tr
                      key={student.id}
                      className="hover:bg-slate-50/50 transition-colors "
                    >
                      <td className="py-3.5 font-bold text-gray-700 px-3">
                        {student.studentId}
                      </td>
                      <td className="py-3.5 font-bold text-gray-900">
                        {student.name}
                      </td>

                      {/* Attendance Toggle Group */}
                      <td className="py-3.5">
                        <div className="inline-flex items-center gap-2 p-1 rounded-xl">
                          {/* Present Button */}
                          <button
                            type="button"
                            onClick={() => handleStatusChange(student.id, "PRESENT")}
                            className={`flex items-center gap-1 px-3 py-1 rounded-sm font-semibold transition-all ${
                              currentStatus === "PRESENT"
                                ? "bg-emerald-100 text-emerald-700  shadow-2xs"
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
                            className={`flex items-center gap-1 px-3 py-1 rounded-sm font-semibold transition-all ${
                              currentStatus === "ABSENT"
                                ? "bg-rose-100 text-rose-700 shadow-2xs"
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
                            className={`flex items-center gap-1 px-3 py-1 rounded-sm font-semibold transition-all ${
                              currentStatus === "LATE"
                                ? "bg-amber-100 text-amber-700 shadow-2xs"
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
    )
}
export default AttendanceTable