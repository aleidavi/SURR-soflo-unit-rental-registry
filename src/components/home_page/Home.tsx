
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  return (
    <Container className="mt-5">
      <Container className="text-center home-container">
        <h1 className="display-4">Welcome to S U R R!</h1>
        <h2 className="mb-4">South Florida's Unit Rental Registry</h2>
        <p className="lead">
          Landlords and businesses that own and rent properties within the Miami Dade County
          area are required to register or update each property.
        </p>
        <hr className="my-4" />
        <p>
          Please refer to the instructions below for more details on
          obtaining a Landlord account.
        </p>
      </Container>
      <Row className="text-center">
        <Col>
          <Image src="path/to/your/image.jpg" rounded fluid className="mb-4" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
