import React from 'react';
import { Nav } from 'react-bootstrap';
import { useParams, NavLink} from 'react-router-dom';

const SubjectDetailsTab = () => {
  const { subjectId } = useParams();

  return (
    <>
      <Nav variant="tabs" className='tabs'>
        <Nav.Item>
          <Nav.Link as={NavLink} to={`/subject/${subjectId}/details`}>
            Details
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to={`/subject/${subjectId}/discussion`}>
            Discussions (Chats)
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to={`/subject/${subjectId}/notes`}>
            Notes
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to={`/subject/${subjectId}/assignments`}>
            Assignments
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default SubjectDetailsTab;


