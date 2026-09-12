"use client"
import { ChevronLeft, Download } from "lucide-react"
type AttendanceNavProps = {
  departmentName?: string;
};
const AttendanceNav =({departmentName}:AttendanceNavProps)=>{

    return(      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Attendance</h1>
         <div className="flex items-center gap-2 text-gray-900 font-bold text-2xs">
                <ChevronLeft className="w-4 h-4 text-gray-500 cursor-pointer hover:text-gray-800" onClick={() => window.history.back()} />
                <span>Mark Attendance</span>
              </div>
               <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold">
               Department: {departmentName} 
              </div>
        <button
          type="button"
          className="flex items-center gap-2 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 text-xs font-semibold px-3 py-2 rounded-xl shadow-sm transition-all"
        >
          <Download className="w-3.5 h-3.5" />
          Download Excel
        </button>
      </div>)
}
export default AttendanceNav