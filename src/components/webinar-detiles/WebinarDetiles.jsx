import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const WebinarDetail = () => {
  const { webinarId } = useParams();

  // Fetch webinar details based on webinarId (you can use the actual data fetching logic)
  const webinarDetails = {
    id: webinarId,
    title: 'Webinar 1',
    date: 'January 15, 2023',
    time: '3:00 PM',
    speaker: 'John Doe',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1nanH4cogQy58Xbv8hCsFSWWl-8j_iQonzA&usqp=CAU', // Add the image URL
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <Card>
            {webinarDetails.imageUrl && (
              <Card.Img
                variant="top"
                src={webinarDetails.imageUrl}
                alt={`Webinar ${webinarDetails.id}`}
                style={{ height: '100%', border:"2px soild gray",padding:"10px", alignItems:"center", objectFit: 'cover' }}
              />
            )}
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>{webinarDetails.title}</Card.Title>
              <Card.Text className="mb-3">
                <i className="bi-calendar me-2"></i>
                <strong>Date:</strong> {webinarDetails.date}
              </Card.Text>
              <Card.Text className="mb-3">
                <i className="bi-clock me-2"></i>
                <strong>Time:</strong> {webinarDetails.time}
              </Card.Text>
              <Card.Text className="mb-3">
                <i className="bi-person me-2"></i>
                <strong>Speaker:</strong> {webinarDetails.speaker}
              </Card.Text>
              <Card.Text className="mb-3">
                <i className="bi-file-text me-2"></i>
                <strong>Description:</strong> {webinarDetails.description}
              </Card.Text>
              <Button variant="primary">Register Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WebinarDetail;
