import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

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
    // Add more events as needed
  ];

  return (
    <Container fluid>
      <h2 className="mt-4 mb-3">Meeting Schedule</h2>
      <Row>
        {/* Calendar for larger screens */}
        <Col lg={12} className="d-none d-lg-block">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={events}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay',
            }}
            className="mb-4"
          />
        </Col>

        {/* List view for smaller screens */}
        <Col xs={12} className="d-lg-none">
          <ListGroup>
            {events.map((event, index) => (
              <ListGroup.Item key={index} className="d-flex justify-content-between">
                <div>{event.title}</div>
                <div>{new Date(event.start).toLocaleString()}</div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Meetings;
