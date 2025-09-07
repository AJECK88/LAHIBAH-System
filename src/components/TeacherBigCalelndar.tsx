  "use client"
import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import React from 'react'
import { TeacherCalendarEvents} from '@/lib/data'
import "react-big-calendar/lib/css/react-big-calendar.css"
import moment from 'moment'
const localizer = momentLocalizer(moment)
const currentdate = new Date().getFullYear();
const BigCalendar = () => {
  moment.updateLocale("en", {
  week: {
    dow: 1, // 0 = Sunday, 1 = Monday
    doy: 2,
  },
})
    function generateWeeklyEvents(baseWeek = moment()) {
  return TeacherCalendarEvents.map((e) => {
    const start = baseWeek
      .clone()
      .startOf("week")
      .add(e.day, "days")
      .hour(e.startHour)
      .minute(0)
      .toDate();

    const end = baseWeek
      .clone()
      .startOf("week")
      .add(e.day, "days")
      .hour(e.endHour)
      .minute(0)
      .toDate();

    return { ...e, start, end, destination: e.level ?? "Room 101" };
  });
}
 
 const events = generateWeeklyEvents(); 
 const [view, setView] = React.useState<View>(Views.WEEK);
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
        views={["week" ,"agenda","day"]}
        view={view}
        onView={handleViewChange}
        toolbar={true}
        components={{
          event: ({ event }) => (
            <span className='font-medium text-sm'>
              {event.title} - {event.destination}
            </span>
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