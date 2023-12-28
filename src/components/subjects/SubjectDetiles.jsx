import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { useParams } from 'react-router-dom';

const SubjectDetiles = () => {
    const { subjectId } = useParams();

  return (
    <Nav variant="tabs" defaultActiveKey="/discussion">
      <Nav.Item>
        <Nav.Link href={`subjects/${subjectId}/detiles`}>Detiles</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/discussion">Discussions (Chats)</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/notes">Notes</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/assignments">Assignments</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/meetings">Meetings</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default SubjectDetiles