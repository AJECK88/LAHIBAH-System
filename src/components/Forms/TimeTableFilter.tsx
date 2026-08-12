 "use client";


import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { string } from "zod";

function TimeTableFilter({department, level}:{department: any, level: any}){
    const [ispedind , startTransition] =useTransition()

    const [SetView, setviewFuction] = useState(false);
   var queryParams:any
   const routre = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);

  const department = formData.get("department") as string;
  const level = formData.get("level") as string;
  const semester = formData.get("semester") as string;
    queryParams = new URLSearchParams({
    department,
    level,
    semester,
  }).toString();
  startTransition( ()=>
  {routre.push(`/list/timeTables?${queryParams}`);
   routre.refresh()
}
 
        
  )
};

  
return (

  <form onSubmit={handleSubmit} className="space-y-4">
      <div className="bg-white p-5 items-center rounded-2xl shadow-sm border border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
            Department
          </label>
          <select 
            name="department"
            className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl p-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all font-medium"
          >
            {department.map((d: any) => (
              <option key={d.id} value={d.id}>{d.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
            Academic Level
          </label>
          <select 
            name="level"
            className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl p-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all font-medium"
          >
            {level.map((l: any) => (
              <option key={l.id} value={l.id}>{l.LevelName}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
            Semester
          </label>
          <select 
           name="semester"
            className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl p-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all font-medium"
          >
            <option value="SEMESTER_1">First Semester</option>
            <option value="SEMESTER_2">Second Semester</option>
          </select>
        </div>

                <div>  
                  <button className='bg-blue-600 p-2 rounded-2xl w-30 hover:bg-blue-800 text-white font-semibold '>Fetch</button>               
        </div>
      </div>
      </form>
    )
}
export default TimeTableFilter