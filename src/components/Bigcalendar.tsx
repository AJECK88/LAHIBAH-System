"use client"
import { Calendar, momentLocalizer, View, Views, ToolbarProps } from 'react-big-calendar'
import React from 'react'
import { calendarEvents } from '@/lib/data'
import CustomToolbar from '@/components/customToobar'
import moment from 'moment'
import next from 'next'

const localizer = momentLocalizer(moment)
const currentdate = new Date().getFullYear();
const BigCalendar = () => {
  moment.updateLocale("en", {
  week: {
    dow: 1, // 0 = Sunday, 1 = Monday
    doy: 2,
  },
});
    function generateWeeklyEvents(baseWeek = moment()) {
  return calendarEvents.map((e) => {
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

    return { ...e, start, end };
  });
}

const events = generateWeeklyEvents();
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView={Views.DAY}
        views={[Views.DAY]}
        components={{
          toolbar: CustomToolbar as React.ComponentType<ToolbarProps<CalendarEvent, object>>,
        }}
        style={{ height: 600 }}
       min={new Date(1970, 1, 1, 8, 0)}  
        max={new Date(1970, 1, 1, 18, 0)}
      />
    </div>
  );
}

export default BigCalendar

export type CalendarEvent = {
  id: number;
  title: string;
  day: number;
  startHour: number;
  endHour: number;
  start: Date;
  end: Date;
};