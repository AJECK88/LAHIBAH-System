  "use client"
import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import React, { useEffect, useState } from 'react'
import { TeacherCalendarEvents} from '@/lib/data'
import "react-big-calendar/lib/css/react-big-calendar.css"
import moment from 'moment'
import { string } from 'zod'
const localizer = momentLocalizer(moment)
const currentdate = new Date().getFullYear();

export type TeacherTimeTableItem = {
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
  TimeTableData?: TeacherTimeTableItem[];
};

const BigCalendar = ({ TimeTableData = [] }: BigCalendarProps) => {
  const  [MobileView , mobileView] = useState(true);
  moment.updateLocale("en", {
  week: {
    dow: 1, // 0 = Sunday, 1 = Monday
    doy: 2,
  },
})
console.log(TimeTableData.map(e=>e.department.map(e=>e)))
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

    const destination = "Level" + " " +e.course.level?.LevelName 
    const Course = e.course.name

    return { ...e, start, end, destination ,  Course};
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
            <div className='gap-2 flex flex-col'>
            <div>{event.department.length >1 ? "Genral course" :event.department[0].name}</div>
            <div className='flex gap-2 text-gray-800 bg-blue-200 p-2'>
            <span className='font-medium text-sm'>
               {event.classroom?.name}
            </span>
             <span className='font-medium text-sm'>
               {event.destination}
            </span>
            </div>
              <span>{event.course.name}</span>
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