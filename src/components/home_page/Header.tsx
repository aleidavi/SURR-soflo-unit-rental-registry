

import React, { Component } from 'react';
import { Navbar, Nav, Offcanvas, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
//import { LinkContainer } from 'react-router-bootstrap';


const  Header: React.FC = () => {
  return (
		<>
		  {['xl'].map((expand) => (
			<Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
			  <Container fluid>
				<Navbar.Brand href="#surr"> S U R R</Navbar.Brand>
				<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
				<Navbar.Offcanvas
				  id={`offcanvasNavbar-expand-${expand}`}
				  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
				  placement="end"
				>
				  <Offcanvas.Header closeButton>
					<Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
					  S U R R
					</Offcanvas.Title>
				  </Offcanvas.Header>
				  <Offcanvas.Body>
					<Nav className="justify-content-end flex-grow-1 pe-3">
					  <Nav.Link href="#home">HOME</Nav.Link>
					  <Nav.Link href="#register">REGISTER</Nav.Link>
					  <Nav.Link href="#login">LOGIN</Nav.Link>
					  <Nav.Link href="#logout">LOGOUT</Nav.Link>
					</Nav>
				  </Offcanvas.Body>
				</Navbar.Offcanvas>
			  </Container>
			</Navbar>
		  ))}
		</>
	  );
}

export default Header;