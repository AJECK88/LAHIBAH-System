// src/components/AttendanceCalendar.tsx
"use client";

import { Calendar } from "react-calendar";
import React, { useState } from "react";
import { Value } from "react-calendar/dist/shared/types.js";
import Image from "next/image";
import "react-calendar/dist/Calendar.css";

  type valuePiece = Date | null ;
  type value = valuePiece | [valuePiece ,valuePiece ]

export default function AttendanceCalendar({
  selectedDate,
  onDateSelect,
}: {
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
}) {
     const [value ,onchange] =React.useState <value>(new Date());
     const currentDate = new Date().getFullYear();
  return (
    <div className="bg-white rounded-sm space-y-3">
     <div className=" p-4 rounded-md" >
      < Calendar
       onChange={(newValue) => onchange(newValue as unknown as value)} 
       value={value}
       minDate={new Date(currentDate -2 ,0 ,1)}
       maxDate={new Date(currentDate + 2, 11, 31)}
        />
        </div>
    </div>
  );
}