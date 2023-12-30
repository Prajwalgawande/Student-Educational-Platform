import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import PageTitle from '../page-title/PageTitle';

const WebinarsSection = () => {
  // Example data for webinars
  const webinars = [
    {
      id: 'webinar1', // Unique identifier for each webinar
      title: 'Webinar 1',
      date: 'January 15, 2023',
      time: '3:00 PM',
      speaker: 'John Doe',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1nanH4cogQy58Xbv8hCsFSWWl-8j_iQonzA&usqp=CAU',
    },
    {
      id: 'webinar2',
      title: 'Webinar 2',
      date: 'January 20, 2023',
      time: '2:30 PM',
      speaker: 'Jane Smith',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1nanH4cogQy58Xbv8hCsFSWWl-8j_iQonzA&usqp=CAU',
    },
    {
      id: 'webinar2',
      title: 'Webinar 2',
      date: 'January 20, 2023',
      time: '2:30 PM',
      speaker: 'Jane Smith',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1nanH4cogQy58Xbv8hCsFSWWl-8j_iQonzA&usqp=CAU',
    },
    {
      id: 'webinar2',
      title: 'Webinar 2',
      date: 'January 20, 2023',
      time: '2:30 PM',
      speaker: 'Jane Smith',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1nanH4cogQy58Xbv8hCsFSWWl-8j_iQonzA&usqp=CAU',
    },
    // Add more webinars as needed
  ];

  return (
    <Container >
      <PageTitle title={"Upcoming Webinars"}/>
      <Row xs={1} md={2} lg={3} className="g-4">
        {webinars.map((webinar) => (
          <Col key={webinar.id}>
            <Card className="h-100">
              <Link to={`/webinars/${webinar.id}`}>
                {webinar.poster && (
                  <Card.Img
                    variant="top"
                    src={webinar.poster}
                    alt={`Webinar ${webinar.id}`}
                    style={{ width: '275px', padding:"10px", height: '200px', objectFit: 'cover' }}
                  />
                )}
              </Link>
              <Card.Body>
                <Card.Title>{webinar.title}</Card.Title>
                <Card.Text>
                  <strong>Date:</strong> {webinar.date}<br />
                  <strong>Time:</strong> {webinar.time}<br />
                  <strong>Speaker:</strong> {webinar.speaker}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WebinarsSection;
