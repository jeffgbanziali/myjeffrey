import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import students from "../../MyData/Students.json";
//import rawCourses from "../../MyData/Courses.json";


const localizer = momentLocalizer(moment);

const MyCalendar = ({ user }) => {
  const [courses, setCourses] = useState([]);



  const rawCourses = user.cours_suivis || user.courses

  console.log('mes cours que je suis', rawCourses)

 

  useEffect(() => {
    const parsedCourses = rawCourses.map(course => ({
      ...course,
      start: new Date(course.start),
      end: new Date(course.end),
    }));
    setCourses(parsedCourses);
  }, []);

  return (
    <div>

      {
        user.role === "student" ?
          <Calendar
            localizer={localizer}
            events={courses}
            startAccessor="start"
            endAccessor="end"
            style={{
              height: 600,
              width: 1000,
            }}
          /> : <Calendar
            localizer={localizer}
            events={courses}
            startAccessor="start"
            endAccessor="end"
            style={{
              height: 600,
              width: 1000,
            }}
          />
      }

    </div>
  );
};

export default MyCalendar;
