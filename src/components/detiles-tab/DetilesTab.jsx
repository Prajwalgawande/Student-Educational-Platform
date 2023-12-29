import React from 'react'
import SubjectDetailsTab from '../subjects/SubjectDetilesTab'
import { Container, Row, Col, Card } from 'react-bootstrap';

const DetilesTab = () => {
  return (
    <div>
      <SubjectDetailsTab/>
      <Container className="mt-2">
      <h3 className="mb-4">Subject Details</h3>
      <Card className="shadow-lg">
        <Card.Body>
          <Row className="mb-4">
            <Col xs={12} md={6}>
              <h4 className="text-primary mb-3">Subject Name</h4>
              <p className="lead">Mathematics</p>
            </Col>
            <Col xs={12} md={6}>
              <h4 className="text-primary mb-3">Teacher</h4>
              <p className="lead">Faculty Name</p>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col>
              <h4 className="text-primary mb-3">Description</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod leo sed neque
                facilisis, a finibus nulla euismod. Sed tincidunt velit sit amet nisi tincidunt, a
                luctus nisi tristique.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4 className="text-primary mb-3">Additional Details</h4>
              <ul>
                <li>Class Schedule: Monday to Friday</li>
                <li>Room Number: 101</li>
                <li>Textbook: Advanced Mathematics by Author Name</li>
              </ul>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
    </div>
  )
}

export default DetilesTab