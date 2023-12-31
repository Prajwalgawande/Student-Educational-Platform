import React, { useState } from 'react';
import { Container, Row, Col, ListGroup,Card, Button, Form, Image } from 'react-bootstrap';
import userImage from '../../assets/user.jpg';
import PageTitle from '../page-title/PageTitle';

const ProfilePage = () => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    username: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Student',
    additional_detiles: 'Student of Information Technology department.',
    skills: ['JavaScript', 'React', 'Node.js'],
    location: 'City, Country',
    class: 'Information Technology',
    certification: 'Certified React Developer',
  });
  const [newProfilePhoto, setNewProfilePhoto] = useState(null);

  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setNewProfilePhoto(e.target.files[0]);
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    // Add logic to update profile details and photo (API call or state update)
    setEditMode(false);
    setNewProfilePhoto(null);
  };

  return (
    <Container fluid className="profile-container">
      <div className="d-flex justify-content-between">
        <PageTitle title={'Profile'} />
        <Button
          variant="primary"
          onClick={handleEditToggle}
          className="edit-profile-btn mt-3"
          style={{ width: '140px', height: '35px', margin: '10px' }}
        >
          <i className="bi bi-pencil-square me-2"></i>
          Edit Profile
        </Button>
      </div>
      <Row>
        <Col md={4} className="mb-4">
          <div className="d-flex justify-content-center h-100 w-100 align-items-center flex-column">
            <Image
              src={newProfilePhoto ? URL.createObjectURL(newProfilePhoto) : userImage}
              alt="Profile"
              className="profile-image"
              style={{ width: '200px', height: '200px', border: '5px solid #ced8ff' }}
              roundedCircle
            />
            {editMode && (
              <Form.Group controlId="formFile" className="mt-3">
                <Form.Label>Update Profile Photo</Form.Label>
                <Form.Control type="file" onChange={handleFileChange} />
              </Form.Group>
            )}
          </div>
        </Col>
        <Col md={8} className="mb-4">
          <Card className="profile-card">
            <Card.Body>
              {editMode ? (
                <Form onSubmit={handleUpdateProfile}>
                  <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formBio">
                    <Form.Label>Addtitional Detiles</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="additional_detiles"
                      value={formData.additional_detiles}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="mt-2 me-2">
                    <i className="bi bi-check-circle m-2"></i>
                    Save Changes
                  </Button>
                  <Button variant="secondary" className="mt-2" onClick={handleEditToggle}>
                    Cancel
                  </Button>
                </Form>
              ) : (
                <>
                  <Card.Title className="mb-3">
                    <i className="bi bi-person-circle me-2"></i>
                    {formData.username}
                  </Card.Title>
                  <Card.Text>
                    <i className="bi bi-envelope me-2"></i>
                    {formData.email}
                  </Card.Text>
                  <Card.Text>
                    <i className="bi bi-briefcase-fill me-2"></i>
                    {formData.role}
                  </Card.Text>
                  <Card.Text>
                    <i className="bi bi-geo-alt me-2"></i>
                    {formData.location}
                  </Card.Text>
                  <Card.Text className="mb-4">
                    <ListGroup>
                      <ListGroup.Item>
                        <strong>Class:</strong> {formData.class}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Certification:</strong> {formData.certification}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Additional Detiles:</strong> {formData.additional_detiles}
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                  <Card.Text>
                    <strong>Skills:</strong> {formData.skills.join(', ')}
                  </Card.Text>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
