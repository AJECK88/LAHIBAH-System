"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

interface Department {
  id: string;
  name: string;
}

interface Level {
  id: string | number;
  LevelName: string;
}

interface TimeTableFilterProps {
  department: Department[];
  level: Level[];
}

export default function TimeTableFilter({ department, level }: TimeTableFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const selectedDept = (formData.get("department") as string) || "";
    const selectedLevel = (formData.get("level") as string) || "";
    const selectedSemester = (formData.get("semester") as string) || "";

    // Preserve existing search params and selectively set/delete updated values
    const params = new URLSearchParams(searchParams.toString());

    if (selectedDept) params.set("department", selectedDept);
    else params.delete("department");

    if (selectedLevel) params.set("level", selectedLevel);
    else params.delete("level");

    if (selectedSemester) params.set("semester", selectedSemester);
    else params.delete("semester");

    startTransition(() => {
      // 1. Push updated query string to URL
      router.push(`/list/timeTables?${params.toString()}`);
      // 2. Refresh server component data
      router.refresh();
    });
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
                  <button className='col-span-2 bg-blue-400 text-white p-2 rounded-md hover:bg-blue-300 font-semibold '>{isPending ?"Fetching...":"Fetch"}</button>               
        </div>
      </div>
      </form>
    )
}
