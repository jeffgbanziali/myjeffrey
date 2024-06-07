import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = ({ user }) => {
  const [courses, setCourses] = useState([]);

  const rawCourses = user.cours_suivis || user.courses;

  useEffect(() => {
    const parsedCourses = rawCourses.map(course => ({
      ...course,
      start: new Date(course.start),
      end: new Date(course.end),
    }));
    setCourses(parsedCourses);
  }, [rawCourses]);

  return (
    <div className="w-full h-full">
      <Calendar
        localizer={localizer}
        events={courses}
        startAccessor="start"
        endAccessor="end"
        style={{
          height: 'calc(100vh - 200px)', // Ajuste la hauteur pour qu'elle s'adapte à l'écran
          width: '100%',
        }}
      />
    </div>
  );
};

export default MyCalendar;
