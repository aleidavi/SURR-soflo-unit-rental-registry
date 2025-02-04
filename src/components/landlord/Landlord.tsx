
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import axios from 'axios';
import './Landlord.css';
import PropertyTable from '../property/PropertyTable';

interface LandlordProps {
	id: number;
	username: string;
	password: string;
	first_name: string;
	last_name: string;
	business_name: string;
	phone_number: string;
	email: string;
	mailing_address: string;
	properties: any[];
	updateLandlordData: (data: any) => void;
}

const Landlord: React.FC<LandlordProps> = ({
	
}) => {
	const [currentLandlord, setCurrentLandlord] = useState<LandlordProps | null>(null);

	const kBaseURL = 'http://127.0.0.1:8000';

	useEffect(() => {
		// Replace with the actual ID you want to use for demonstration purposes
		const demoLandlordId = 1;

		axios.get(`${kBaseURL}/landlords/${demoLandlordId}`)
			.then(response => {
				setCurrentLandlord(response.data);
			})
			.catch(error => {
				console.error('Error fetching landlord data:', error);
			});
	}, []);

	if (!currentLandlord) {
		return <div>Loading...</div>;
	}

	return (
		<Container>
		  <Row className="landlord-profile">
			<Col>
			  <h2>Landlord Profile</h2>
			  <></>
			  <p><strong>First Name:</strong> {currentLandlord.first_name}</p>
			  <p><strong>Last Name:</strong> {currentLandlord.last_name}</p>
			  <p><strong>Business Name:</strong> {currentLandlord.business_name}</p>
			  <p><strong>Phone Number:</strong> {currentLandlord.phone_number}</p>
			  <p><strong>Email:</strong> {currentLandlord.email}</p>
			  <p><strong>Mailing Address:</strong> {currentLandlord.mailing_address}</p>
			</Col>
		  </Row>
		  <Row className="property-table">
			<Col>

			 <PropertyTable />
			  
        </Col>
      </Row>
    </Container>
  );
};

export default Landlord;