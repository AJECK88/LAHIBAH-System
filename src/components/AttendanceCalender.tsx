// src/components/AttendanceCalendar.tsx
"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AttendanceCalendar({
  selectedDate,
  onDateSelect,
}: {
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
}) {
  const [currentMonth, setCurrentMonth] = useState(new Date(selectedDate));

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfWeek = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const isSameDay = (d1: Date, dayNum: number) => {
    return (
      d1.getDate() === dayNum &&
      d1.getMonth() === currentMonth.getMonth() &&
      d1.getFullYear() === currentMonth.getFullYear()
    );
  };

  return (
    <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm space-y-3">
      {/* Calendar Header */}
      <div className="flex items-center justify-between px-1">
        <button
          onClick={handlePrevMonth}
          type="button"
          className="p-1 hover:bg-gray-100 rounded-lg text-gray-500 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <span className="text-sm font-bold text-gray-800">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </span>
        <button
          onClick={handleNextMonth}
          type="button"
          className="p-1 hover:bg-gray-100 rounded-lg text-gray-500 transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Weekday Labels */}
      <div className="grid grid-cols-7 gap-1 text-center">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "St"].map((day) => (
          <span key={day} className="text-[11px] font-semibold text-gray-400">
            {day}
          </span>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 text-center">
        {/* Empty slots for month offset */}
        {Array.from({ length: firstDayOfWeek }).map((_, i) => (
          <div key={`empty-${i}`} className="h-7 w-7" />
        ))}

        {/* Days */}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const dayNum = i + 1;
          const isSelected = isSameDay(selectedDate, dayNum);

          return (
            <button
              key={dayNum}
              type="button"
              onClick={() =>
                onDateSelect(
                  new Date(
                    currentMonth.getFullYear(),
                    currentMonth.getMonth(),
                    dayNum
                  )
                )
              }
              className={`h-7 w-7 text-xs font-medium rounded-lg flex items-center justify-center transition-all ${
                isSelected
                  ? "bg-blue-600 text-white shadow-sm font-semibold"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {dayNum}
            </button>
          );
        })}
      </div>
    </div>
  );
}