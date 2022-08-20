import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
// import logo from '../images/logoOjo';

const NavBar = () => {
  return (
    <div>
      <>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#aboutme">About Me</Nav.Link>
                <Nav.Link href="#works">Works</Nav.Link>
                <Nav.Link href="#Software">Software</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default NavBar;
