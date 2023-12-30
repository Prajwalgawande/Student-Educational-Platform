import React, { useState } from 'react';
import SubjectDetailsTab from '../subjects/SubjectDetilesTab';
import { Container, ListGroup, Button, Modal, Form } from 'react-bootstrap';

const AssignmentsTab = () => {
  const [assignments, setAssignments] = useState([
    { id: 1, title: 'Assignment 1', description: 'Complete exercises 1-5', dueDate: '2023-01-15' },
    { id: 2, title: 'Assignment 2', description: 'Write a research paper', dueDate: '2023-02-01' },
    // Add more assignments as needed
  ]);

  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleViewAssignment = (assignmentId) => {
    const assignment = assignments.find((a) => a.id === assignmentId);
    setSelectedAssignment(assignment);
    setShowSubmitModal(true);
  };

  const handleCloseSubmitModal = () => {
    setSelectedAssignment(null);
    setSelectedFile(null);
    setShowSubmitModal(false);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleFileSubmit = () => {
    // Implement the logic to submit the selectedFile
    console.log('File submitted:', selectedFile);
    handleCloseSubmitModal();
  };

  return (
    <div className="d-flex flex-column h-100">
      <SubjectDetailsTab />
      <Container className="flex-grow-1 p-4">
        {/* List of assignments */}
        <ListGroup>
          {assignments.map((assignment) => (
            <ListGroup.Item key={assignment.id} className="mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5>{assignment.title}</h5>
                  <p className="text-muted">{assignment.description}</p>
                  <p>Due Date: {assignment.dueDate}</p>
                </div>
                <div>
                  {/* Download button for teacher to post assignment question set */}
                  <Button variant="success" size="sm" className="mr-2 m-2">
                    Download Question Set
                  </Button>
                  {/* View & Submit button for students */}
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleViewAssignment(assignment.id)}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>

      {/* Modal for viewing and submitting assignment */}
      <Modal show={showSubmitModal} onHide={handleCloseSubmitModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedAssignment?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Description: {selectedAssignment?.description}</p>
          <p>Due Date: {selectedAssignment?.dueDate}</p>
          {/* File upload section for students */}
          <Form>
            <Form.Group controlId="fileUpload">
              <Form.Label>Submit PDF</Form.Label>
              <Form.Control type="file" accept=".pdf" onChange={handleFileUpload} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSubmitModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleFileSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AssignmentsTab;
