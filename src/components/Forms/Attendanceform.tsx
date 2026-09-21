"use client";

import React from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import AttendanceCalendar from "../AttendanceCalender";

type AttendanceFormProps = {
  departments: { id: string; name: string }[];
  courses: { id: number; name: string }[];
  room: { id: string; name: string }[];
  activeFilters: {
    departmentId: string;
    courseId: string;
    semester: string;
    roomId: string;
    date: string;
  };
};

const AttendanceForm = ({
  departments,
  courses,
  room,
  activeFilters,
}: AttendanceFormProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateQueryParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="space-y-4">
      <AttendanceCalendar
        selectedDate={new Date(activeFilters.date)}
        onDateSelect={(d: Date) =>
          updateQueryParam("date", d.toISOString().split("T")[0])
        }
      />

      <form className="space-y-4 text-xs" onSubmit={(e) => e.preventDefault()}>
        {/* Department Select */}
        <div className="border bg-white rounded-sm border-gray-200 p-4">
          <label className="block text-gray-900 font-semibold mb-1">Department</label>
          <select
            value={activeFilters.departmentId}
            onChange={(e) => updateQueryParam("departmentId", e.target.value)}
            className="w-full font-medium text-gray-500 outline-none"
          >
            {departments.map((dept) => (
              <option key={dept.id} value={dept.id}>
                {dept.name}
              </option>
            ))}
          </select>
        </div>

        {/* Course Select */}
        <div className="border bg-white rounded-sm border-gray-200 p-4">
          <label className="block text-gray-900 font-semibold mb-1">Course</label>
          <select
            value={activeFilters.courseId}
            onChange={(e) => updateQueryParam("courseId", e.target.value)}
            className="w-full font-medium text-gray-500 outline-none"
          >
            {courses.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        {/* Semester Select */}
        <div className="border bg-white rounded-sm border-gray-200 p-4">
          <label className="block text-gray-900 font-semibold mb-1">Semester</label>
          <select
            value={activeFilters.semester}
            onChange={(e) => updateQueryParam("semester", e.target.value)}
            className="w-full font-medium text-gray-500 outline-none"
          >
            <option value="SEMESTER_1">First semester</option>
            <option value="SEMESTER_2">Second semester</option>
          </select>
        </div>

        {/* Class Room Select */}
        <div className="border bg-white rounded-sm border-gray-200 p-4">
          <label className="block text-gray-900 font-semibold mb-1">Class Room</label>
          <select
            value={activeFilters.roomId}
            onChange={(e) => updateQueryParam("roomId", e.target.value)}
            className="w-full font-medium text-gray-500 outline-none"
          >
            {room.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default AttendanceForm;