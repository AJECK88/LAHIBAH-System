  "use client"
import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import React, { useEffect, useState } from 'react'
import { TeacherCalendarEvents} from '@/lib/data'
import "react-big-calendar/lib/css/react-big-calendar.css"
import moment from 'moment'
import { string } from 'zod'
const localizer = momentLocalizer(moment)
const currentdate = new Date().getFullYear();

export type StudentTimeTableItem = {
  id: string;
  courseId: number;
  startTime: Date | string;
  endTime: Date | string;
  day: string | number; // Handles both string '2' and number 2
  course: {
    id: number;
    name: string;
    gradeId?: string | null;
    levelId?: number | null;
    level?: {
      LevelName?: string;
    };
      teachers?:[{
      id:number;
      username:string;
    }]
  };
  classroom?:{
    name:string
  }
  department: {
    id: string;
    name: string;
    teacherId?: string | null;
    schoolId?: string | null;
  }[];
};
type BigCalendarProps = {
  TimeTableData?: StudentTimeTableItem[];
};

const BigCalendar = ({ TimeTableData = [] }: BigCalendarProps) => {
  const  [MobileView , mobileView] = useState(true);
  moment.updateLocale("en", {
  week: {
    dow: 1, // 0 = Sunday, 1 = Monday
    doy: 2,
  },
})
useEffect(() => {
   window.addEventListener("resize", () => {
     if (window.innerWidth < 468) {
      mobileView(false);
     }
   });
 }, []);

 function generateWeeklyEvents(baseWeek = moment()) {
  return TimeTableData.map((e) => {
    const startHour = moment(e.startTime).hour();
    const startMinute = moment(e.startTime).minute();
    const endHour = moment(e.endTime).hour();
    const endMinute = moment(e.endTime).minute();

    const start = baseWeek
      .clone()
      .startOf("week")
      .add(e.day, "days")
      .hour(startHour)
      .minute(startMinute)
      .toDate();

    const end = baseWeek
      .clone()
      .startOf("week")
      .add(e.day, "days")
      .hour(endHour)
      .minute(endMinute)
      .toDate();

    const destination = "Level:" + " " +e.course.level?.LevelName 
    const Course = e.course.name
    console.log(e.course.teachers)
    return { ...e, start, end, destination};
  });
}
 
 const events = generateWeeklyEvents(); 
 const [view, setView] = React.useState<View>(Views.AGENDA);
 function handleViewChange(newView: View) {
   setView(newView);
 }
  return (
    <div>
      <Calendar 
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={MobileView ? ["agenda", "day"]:["week", "agenda", "day"]}
        view={view}
        onView={handleViewChange}
        toolbar={true}
        components={{
    event: ({ event }) => (
  <div className="flex flex-col gap-1.5 p-2.5 rounded-lg bg-white border-l-4 border-blue-600 shadow-sm hover:shadow-md transition-all duration-150 border-y border-r border-gray-100">
    {/* Course Name */}
    <h4 className="font-semibold text-sm text-gray-900 truncate leading-snug">
      {event.course.name}
    </h4>

    {/* Location / Meta Badges */}
    <div className="flex items-center gap-1.5 flex-wrap">
      {event.classroom?.name && (
        <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-100">
          📍 {event.classroom.name}
        </span>
      )}
      
      {event.destination && (
        <span className="inline-flex items-center text-xs font-medium px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">
          {event.destination}
        </span>
      )}
    </div>

    {/* Lecturer */}
    {event.course.teachers?.[0]?.username && (
      <span className="text-xs text-gray-500 font-normal flex items-center gap-1 mt-0.5 truncate">
        👤 {event.course.teachers[0].username}
      </span>
    )}
  </div>
          ),
        }}
        style={{ height: 600 }}
       min={new Date(1970, 1, 1, 8, 0)}  
        max={new Date(1970, 1, 1, 18, 0)}
      />
    </div>
  );
}

export default BigCalendar