"use client"
 import { ChevronLeft, Download, Building2 } from "lucide-react";
type AttendanceNavProps = {
  departmentName?: string;
};
const AttendanceNav =({departmentName}:AttendanceNavProps)=>{

  

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-gray-100">
      {/* Left Section: Title & Breadcrumbs */}
      <div className="flex items-center gap-3">
        {/* Back Button */}
        <button
          type="button"
          onClick={() => window.history.back()}
          className="p-1.5 rounded-lg border border-gray-200 bg-white text-gray-500 hover:text-gray-900 hover:bg-gray-50 shadow-xs transition-all active:scale-95"
          aria-label="Go back"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Page Title & Context */}
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold tracking-tight text-gray-900">
              Attendance Management
            </h1>
           <span className="relative inline-flex items-center gap-1.5 overflow-hidden rounded-md px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-700/15 bg-size-[200%_200%] bg-linear-to-r from-blue-50 via-blue-100 to-blue-200 animate-[bgShift_3s_ease_infinite]">
    <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-7">
   
  </span>

  <span>Session Live</span>
</span>
          </div>
          <p className="text-xs text-gray-500 mt-0.5">
            Select student rosters and record present/absent statuses
          </p>
        </div>
      </div>

      {/* Right Section: Department Badge & Export Action */}
      <div className="flex items-center gap-3">
        {/* Department Info Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/80 text-gray-700 text-xs font-semibold border border-gray-200/60">
          <Building2 className="w-3.5 h-3.5 text-gray-500" />
          <span>Department:</span>
          <span className="text-gray-900 font-bold">{departmentName}</span>
        </div>

        {/* Download Action Button */}
        <button
          type="button"
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3.5 py-2 rounded-lg shadow-xs hover:shadow-sm transition-all active:scale-95 cursor-pointer"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Export Excel</span>
        </button>
      </div>
    </div>
  );
}
export default AttendanceNav