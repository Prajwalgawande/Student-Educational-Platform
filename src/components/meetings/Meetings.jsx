import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Container, Row, Col, ListGroup, Badge, Button } from 'react-bootstrap';
import MeetingModal from '../meeting-modals/MeetingModal';
import './meeting.css'; // Import your custom CSS file for additional styling
import PageTitle from '../page-title/PageTitle';

const Meetings = () => {
  // Example data for ongoing and upcoming classes
  const ongoingClasses = [
    { title: 'DBMS', start: '2023-12-10T13:00:00', end: '2023-12-10T13:30:00' },
    { title: 'OOPS', start: '2023-12-10T14:00:00', end: '2023-12-10T15:00:00' },
  ];

  const upcomingClasses = [
    { title: 'Web Development', start: '2023-12-15T10:00:00' },
    { title: 'React Workshop', start: '2023-12-20T15:30:00' },
  ];

  const [selectedMeeting, setSelectedMeeting] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleEventClick = (eventClickInfo) => {
    eventClickInfo.jsEvent.preventDefault(); 
    setSelectedMeeting(eventClickInfo);
    setShowModal(true);
  };

  const handleBadgeClick = (meeting) => {
    setSelectedMeeting(meeting);
    setShowModal(true);
  };

  const eventRender = ({ event }) => (
    <div>
      <strong>{event.title.slice(0, 10)}...</strong>
    </div>
  );

  return (
    <Container fluid>
      {/* Header Section */}
      <PageTitle title={"Class Schedule"}/>

      <Row>
        {/* Calendar View */}
        <Col lg={12} className="d-none d-lg-block">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={[...ongoingClasses, ...upcomingClasses]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay',
            }}
            className="calendar"
            eventContent={eventRender}
            eventClick={handleEventClick} 
          />
        </Col>

        {/* Ongoing Classes Section */}
        <Col lg={8} xs={12} className="mt-lg-0 mt-4">
          <h5 className="mb-3">Ongoing Classes</h5>
          <ListGroup>
            {ongoingClasses.map((classItem, index) => (
              <ListGroup.Item key={index} className="d-flex justify-content-between">
                <div>
                  <strong>{classItem.title}</strong>
                </div>
                <Badge
                  bg="primary"
                  onClick={() => handleBadgeClick(classItem)}
                  style={{ cursor: 'pointer' }}
                >
                  Ongoing
                </Badge>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        {/* Upcoming Classes Section */}
        <Col lg={4} xs={12} className="mt-lg-0 mt-4">
          <h5 className="mb-3">Upcoming Classes</h5>
          <ListGroup>
            {upcomingClasses.map((classItem, index) => (
              <ListGroup.Item key={index} className="d-flex justify-content-between">
                <div>
                  <strong>{classItem.title}</strong>
                </div>
                <Badge
                  bg="success"
                  onClick={() => handleBadgeClick(classItem)}
                  style={{ cursor: 'pointer' }}
                >
                  Upcoming
                </Badge>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>

      {/* Meeting Modal */}
      <MeetingModal
        show={showModal}
        onHide={() => setShowModal(false)}
        meeting={selectedMeeting || {}}
      />
    </Container>
  );
};

export default Meetings;
