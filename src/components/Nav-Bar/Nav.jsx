import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/funngro-logo.svg';
import './Nav.css';

const NavScrollExample = () => {
  return (
    <Navbar expand="lg" id="nav" className="custom-navbar">
      <Container fluid>
        {/* Left side logo */}
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            height="30"
            className="d-inline-block align-top logo-img"
            alt="Logo"
          />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        
        <Navbar.Collapse id="navbarScroll">
          {/* Centered Nav links */}
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/teen" className="nav-link-custom">Teen</Nav.Link>
            <Nav.Link as={Link} to="/company" className="nav-link-custom">Company</Nav.Link>
          </Nav>
          
          {/* Right side button */}
          <Form className="d-flex">
            <Button variant="success">Company Login</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
