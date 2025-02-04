

import React from 'react';
import { Navbar, Nav, Offcanvas, Container } from 'react-bootstrap';
import './Header.css';


const Header: React.FC = () => {
	return (
		<>
			{['xl'].map((expand) => (
				<Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
					<Container fluid>
						<Navbar.Brand href="/"> S U R R</Navbar.Brand>
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
									<Nav.Link href="/">Home</Nav.Link>
									<Nav.Link href="/register">Register</Nav.Link>
									<Nav.Link href="/login">Login</Nav.Link>
									<Nav.Link href="/manage_account">Manage Account</Nav.Link>
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