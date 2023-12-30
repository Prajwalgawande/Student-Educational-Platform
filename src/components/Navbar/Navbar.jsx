import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import userImage from '../../assets/user.jpg';

const TopNavbar = () => {
  const username = 'John Doe';
  const current_Date=new Date();
  const currentDate = new Date();
const options = { weekday: 'long', day: 'numeric', month: 'long' };

const formattedDate = currentDate.toLocaleDateString('en-US', options);
  return (
    <Navbar  variant="light" expand="lg" style={{ backgroundColor:"#ffffff",padding: '8px 16px', height: '50px',marginBottom:"10px" }}>
      <Container>
        {/* <Navbar.Brand href="#home">Your Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>

          <Nav className="ms-auto">
            <Nav.Link href="#" className="me-3">
              <i className="bi bi-calendar p-2"></i>
              {formattedDate}
            </Nav.Link>

            <Nav.Link href="#" className="me-3">
              <i className="bi bi-bell"></i>
            </Nav.Link>

            <NavDropdown title={username} id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Logout</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#" className="ms-2">
              <img
                src={userImage}
                alt="User"
                width="30"
                height="30"
                className="rounded-circle"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
