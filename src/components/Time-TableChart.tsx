"use client";

import { useState, useEffect } from "react";
import { AddSlotModal } from "./Forms/timeTableForm";
import { Plus, ShieldAlert, Trash2 } from "lucide-react";

type initialSlots = {
  id: number;
  day: string;
  StartTime?: string;
  EndTime?: string;
  timeSlotId?: number;
  courseCode?: string;
  semester: string;
  courseName: string;
  room: string;
  lecturer: string;
};

type SlotData = Omit<initialSlots, "id"> & {
  hasConflict?: boolean;
  conflictMsg?: string;
  StartTime?: string;
  EndTime?: string;
};

type SlotTarget = {
  day: string;
  timeSlotId: number;
};

export function TimeTableChart({ INITIAL_SLOTS }: { INITIAL_SLOTS: initialSlots[] }) {
  const [selectedProg, setSelectedProg] = useState("hnd-cs");
  const [selectedLevel, setSelectedLevel] = useState("l200");
  const [selectedSemester, setSelectedSemester] = useState("sem1");

  // 1. Local slots state initialized with server props
  const [slots, setSlots] = useState(INITIAL_SLOTS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSlotTarget, setActiveSlotTarget] = useState<SlotTarget | undefined>(undefined);

  // 🔴 CRITICAL FIX FOR SERVER FILTER RE-RENDERING:
  // Update local state whenever new INITIAL_SLOTS arrive from the server query
  useEffect(() => {
    setSlots(INITIAL_SLOTS);
  }, [INITIAL_SLOTS]);

  const handleOpenAddModal = (day = "Monday", timeSlotId = 1) => {
    setActiveSlotTarget({ day, timeSlotId });
    setIsModalOpen(true);
  };

  const handleSaveSlot = (newSlotData: SlotData) => {
    setSlots((prev) => [
      ...prev.filter(
        (s) => !(s.day === newSlotData.day && s.timeSlotId === newSlotData.timeSlotId)
      ),
      { ...newSlotData, id: Date.now() },
    ]);
    setIsModalOpen(false);
  };

  const handleDeleteSlot = (id: number) => {
    setSlots((prev) => prev.filter((s) => s.id !== id));
  };

  const TIME_SLOTS = [
    { id: 1, label: "08:00 ", label1: "10:00", isBreak: false },
    { id: 3, label: "10:00 ", label1: "12:00", isBreak: false },
    { id: 4, label: "12:00 ", label1: " 2:00", isBreak: false },
    { id: 5, label: "2:00 ", label1: "4:00", isBreak: false },
  ];

  const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-x-auto">
        {/* 🔴 Fixed table layout prevents columns from expanding/collapsing */}
        <table className="w-full border-collapse table-fixed min-w-[1000px]">
          <thead>
            <tr className="bg-slate-100/70 border-b border-slate-200 bor text-slate-600 text-xs font-semibold uppercase tracking-wider">
              <th className="p-4 text-left w-10 border-r border-slate-200">Time</th>
              {DAYS.map((day) => (
                <th
                  key={day}
                  className="p-4 text-center border-r border-slate-200 last:border-r-0 w-[140px]"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {TIME_SLOTS.map((timeSlot) => {
              if (timeSlot.isBreak) {
                return (
                  <tr key={timeSlot.id} className="bg-slate-100/60">
                    <td
                      colSpan={8}
                      className="p-3 text-xs font-semibold text-slate-500 text-center border-r border-slate-200"
                    >
                      Break Time ({timeSlot.label} - {timeSlot.label1})
                    </td>
                  </tr>
                );
              }

              return (
                <tr key={timeSlot.id} className="hover:bg-slate-50/50 transition-colors">
                  {/* Time Column */}
                  <td className="p-4 text-xs font-semibold text-slate-600 border-r border-slate-200 align-top bg-slate-50/30 flex flex-col justify-between gap-2 items-center h-[40px]">
                    <span>{timeSlot.label}</span>
                    <span>-</span>
                    <span>{timeSlot.label1}</span>
                  </td>

                  {/* Days Columns */}
                  {DAYS.map((day) => {
                    const entry = slots.find((s) => {
                      const isSameDay = s.day.toLowerCase() === day.toLowerCase();

                      let isSameTime = s.timeSlotId === timeSlot.id;
                      if (!isSameTime && s.StartTime) {
                        if (timeSlot.id === 1 && s.StartTime.startsWith("08")) isSameTime = true;
                        if (timeSlot.id === 3 && s.StartTime.startsWith("10")) isSameTime = true;
                        if (timeSlot.id === 4 && s.StartTime.startsWith("12")) isSameTime = true;
                        if (
                          timeSlot.id === 5 &&
                          (s.StartTime.startsWith("14") || s.StartTime.startsWith("16"))
                        )
                          isSameTime = true;
                      }

                      return isSameDay && isSameTime;
                    });

                    return (
                      <td
                        key={day}
                        className="p-2 border-r border-slate-200 last:border-r-0 align-top w-[140px] h-[140px]"
                      >
                        {/* Wrapper Box enforcing strict fixed width and height */}
                        <div className="w-full h-[124px] overflow-hidden">
                          {entry ? (
                            <div className="h-full p-2.5 rounded-xl border flex flex-col justify-between text-xs transition-all relative group bg-indigo-50/60 border-indigo-200/80 text-indigo-950 hover:shadow-md">
                              <div>
                                <div className="flex items-center justify-between gap-1 mb-1">
                                  <span className="font-semibold text-[10px] text-slate-500 truncate">
                                    {entry.StartTime} - {entry.EndTime}
                                  </span>
                                  <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                                    <button
                                      onClick={() => handleDeleteSlot(entry.id)}
                                      className="p-1 hover:bg-rose-200/50 rounded text-rose-600 transition-colors"
                                    >
                                      <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                  </div>
                                </div>
                                <p className="font-medium text-slate-700 line-clamp-2 text-xs">
                                  {entry.courseName}
                                </p>
                              </div>

                              <div className="mt-1 pt-1 border-t border-indigo-100/80 flex flex-col gap-0.5 text-[10px] text-slate-500 font-medium">
                                <span className="truncate">📍 {entry.room}</span>
                                <span className="truncate">👤 {entry.lecturer}</span>
                              </div>
                            </div>
                          ) : (
                            <button
                              type="button"
                              onClick={() => handleOpenAddModal(day, timeSlot.id)}
                              className="h-full w-full rounded-xl border border-dashed border-slate-300 bg-slate-50/70 text-slate-500 hover:border-indigo-300 hover:bg-indigo-50/50 hover:text-indigo-600 transition-colors flex items-center justify-center text-xs font-medium"
                            >
                              + Add Slot
                            </button>
                          )}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* MODAL DIALOG */}
      {isModalOpen && (
        <AddSlotModal
          target={activeSlotTarget}
          prog={selectedProg}
          level={selectedLevel}
          onClose={() => setIsModalOpen(false)}
          onSave={(slot) =>
            handleSaveSlot({
              ...slot,
              semester: selectedSemester,
              conflictMsg: slot.conflictMsg ?? undefined,
            })
          }
        />
      )}
    </>
  );
}