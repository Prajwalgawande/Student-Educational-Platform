import React, { useState } from 'react';
import SubjectDetailsTab from '../subjects/SubjectDetilesTab';
import { Container, ListGroup, Form, Button, Modal } from 'react-bootstrap';

const NotesTab = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Note 1', content: 'This is the content of Note 1.' },
    { id: 2, title: 'Note 2', content: 'This is the content of Note 2.' },
    // Add more notes as needed
  ]);

  const [newNote, setNewNote] = useState({ title: '', content: '' });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);
  const [showAddNoteModal, setShowAddNoteModal] = useState(false);
  const [editingNote, setEditingNote] = useState(null);

  const handleAddNote = () => {
    if (newNote.title.trim() !== '' && newNote.content.trim() !== '') {
      if (editingNote) {
        // Update existing note
        const updatedNotes = notes.map((note) =>
          note.id === editingNote.id ? { ...note, ...newNote } : note
        );
        setNotes(updatedNotes);
        setEditingNote(null);
      } else {
        // Add new note
        setNotes([...notes, { id: notes.length + 1, ...newNote }]);
      }

      setNewNote({ title: '', content: '' });
      setShowAddNoteModal(false);
    }
  };

  const handleDeleteNote = (noteId) => {
    setNoteToDelete(noteId);
    setShowDeleteModal(true);
  };

  const handleEditNote = (note) => {
    setNewNote({ title: note.title, content: note.content });
    setEditingNote(note);
    setShowAddNoteModal(true);
  };

  const confirmDelete = () => {
    const updatedNotes = notes.filter((note) => note.id !== noteToDelete);
    setNotes(updatedNotes);
    setShowDeleteModal(false);
  };

  const closeDeleteModal = () => {
    setNoteToDelete(null);
    setShowDeleteModal(false);
  };

  return (
    <div className="d-flex flex-column h-100">
      <SubjectDetailsTab />
      <Container className="flex-grow-1 p-4">
        {/* List of notes */}
        <ListGroup>
          {notes.map((note) => (
            <ListGroup.Item key={note.id} className="mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5>{note.title}</h5>
                  <p className="text-muted">{note.content}</p>
                </div>
                <div>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    className="me-2"
                    onClick={() => handleEditNote(note)}
                  >
                    <i className="bi bi-pencil"></i> Edit
                  </Button>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => handleDeleteNote(note.id)}
                  >
                    <i className="bi bi-trash"></i> Delete
                  </Button>
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>

      {/* Button to open Add Note modal */}
      <Button
        variant="primary"
        className="position-fixed bottom-0 end-0 m-4 p-3"
        onClick={() => {
          setEditingNote(null);
          setShowAddNoteModal(true);
        }}
      >
        <i className="bi bi-plus"></i>
      </Button>

      {/* Modal for adding/editing notes */}
      <Modal show={showAddNoteModal} onHide={() => setShowAddNoteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editingNote ? 'Edit Note' : 'Add Note'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="noteTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter note title"
                value={newNote.title}
                onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="noteContent">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter note content"
                value={newNote.content}
                onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddNoteModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddNote}>
            {editingNote ? 'Save Changes' : 'Add Note'}
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for confirming note deletion */}
      <Modal show={showDeleteModal} onHide={closeDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this note?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDeleteModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NotesTab;
