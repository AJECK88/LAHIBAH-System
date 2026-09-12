"use client";

import React from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import AttendanceCalendar from "../AttendanceCalender";

type DepartmentType = { id: string; name: string };
type CourseType = { id: number; name: string };
type RoomType = { id: string; name: string };

const AttendanceForm = ({
  departments,
  courses,
  room,
}: {
  departments: DepartmentType[];
  courses: CourseType[];
  room: RoomType[];
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get current active filter values from URL or fallback to the first item
  const currentDepartmentId = searchParams.get("departmentId") || departments[0]?.id || "";
  const currentCourseId = searchParams.get("courseId") || String(courses[0]?.id || "");
  const currentSemester = searchParams.get("semester") || "SEMESTER_1";
  const currentRoomId = searchParams.get("roomId") || room[0]?.id || "";
  
  const currentDate = searchParams.get("date") 
    ? new Date(searchParams.get("date")!) 
    : new Date();

  // Helper function to update URL search parameters
  const updateQueryParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    router.push(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="space-y-2">
      {/* Calendar updating URL parameter */}
      <AttendanceCalendar
        selectedDate={currentDate}
        onDateSelect={(d: Date) => updateQueryParam("date", d.toISOString().split("T")[0])}
      />

      {/* Filter Dropdowns updating URL parameters */}
      <form className="space-y-4 text-xs">
        {/* Department Select */}
        <div className="border bg-white rounded-sm border-gray-200 flex flex-col gap-1 p-4">
          <label className="block text-gray-900 font-semibold mb-1">Department</label>
          <select
            value={currentDepartmentId}
            onChange={(e) => updateQueryParam("departmentId", e.target.value)}
            className="w-full font-medium text-gray-500 outline-none focus:border-blue-500 transition-colors"
          >
            {departments.map((dept) => (
              <option key={dept.id} value={dept.id}>
                {dept.name}
              </option>
            ))}
          </select>
        </div>

        {/* Course Select */}
        <div className="border bg-white rounded-sm border-gray-200 flex flex-col gap-1 p-4">
          <label className="block text-gray-900 font-semibold mb-1">Course</label>
          <select
            value={currentCourseId}
            onChange={(e) => updateQueryParam("courseId", e.target.value)}
            className="w-full rounded-xl font-medium text-gray-500 outline-none focus:border-blue-500 transition-colors"
          >
            {courses.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        {/* Semester Select */}
        <div className="border bg-white rounded-sm border-gray-200 flex flex-col gap-1 p-4">
          <label className="block text-gray-900 font-semibold mb-1">Semester</label>
          <select
            value={currentSemester}
            onChange={(e) => updateQueryParam("semester", e.target.value)}
            className="w-full font-medium text-gray-500 outline-none focus:border-blue-500 transition-colors"
          >
            <option value="SEMESTER_1">Winter Sem - Term 1</option>
            <option value="SEMESTER_2">Spring Sem - Term 2</option>
          </select>
        </div>

        {/* Class Room Select */}
        <div className="border bg-white rounded-sm border-gray-200 flex flex-col gap-1 p-4">
          <label className="block text-gray-900 font-semibold mb-1">Class Room</label>
          <select
            value={currentRoomId}
            onChange={(e) => updateQueryParam("roomId", e.target.value)}
            className="w-full font-medium text-gray-500 outline-none focus:border-blue-500 transition-colors"
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