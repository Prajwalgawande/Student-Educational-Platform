import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const MeetingModal = ({ show, onHide, meeting }) => {
    const {title,start,end}=meeting;
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Meeting details or description go here.</p>
        <p>Start Time: {start}</p>
        {meeting.end && <p>End Time: {end}</p>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MeetingModal;
