import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Meetings = () => {
  const events = [
    {
      title: 'DBMS',
      start: '2023-12-10T13:00:00',
      end: '2023-12-10T13:30:00',
    },
    {
      title: 'OOPS',
      start: '2023-12-10T14:00:00',
      end: '2023-12-10T15:00:00',
    },
  ];
  return (
    <div>
      <h2>Meeting Schedule</h2>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth" 
        events={events}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
      />
    </div>
  );
};

export default Meetings;
