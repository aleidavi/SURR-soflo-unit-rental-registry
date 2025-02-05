
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import axios from 'axios';
import './Landlord.css';
import PropertyList from '../property/PropertyList';
import Property from '../property/Property';

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
	updateLandlordData: (data: any) => void;
}

const Landlord: React.FC<LandlordProps> = ({

}) => {
	const [currentLandlordId, setCurrentLandlord] = useState<LandlordProps | null>(null);
	const [landlordProperties, setLandlordProperties] = useState<any[]>([]);

	const kBaseURL = 'http://127.0.0.1:8000';

	useEffect(() => {
		// Replace with the actual ID you want to use for demonstration purposes
		const currentLandlordId = 1;

		axios.get(`${kBaseURL}/landlords/${currentLandlordId}`)
			.then(response => {
				setCurrentLandlord(response.data);
			})
			.catch(error => {
				console.error('Error fetching landlord data:', error);
			});

		axios.get(`${kBaseURL}/landlords/${currentLandlordId}/properties`)
			.then(response => {
				setLandlordProperties(response.data);
			})
			.catch(error => {
				console.error('Error fetching properties data:', error);
			});
	}, []);


	if (!currentLandlordId) {
		return <div>Loading...</div>;
	}




	return (
		<Container>
			<Row className="landlord-profile">
				<Col>
					<h4>Landlord Profile</h4>
					<></>
					<p><strong>First Name:</strong> {currentLandlordId.first_name}</p>
					<p><strong>Last Name:</strong> {currentLandlordId.last_name}</p>
					<p><strong>Business Name:</strong> {currentLandlordId.business_name === null ? 'None' : currentLandlordId.business_name}</p>
					<p><strong>Phone Number:</strong> {currentLandlordId.phone_number}</p>
					<p><strong>Email:</strong> {currentLandlordId.email}</p>
					<p><strong>Mailing Address:</strong> {currentLandlordId.mailing_address}</p>
				</Col>
			</Row>
			<Row className="property-list">
				<h4> Property List</h4>
				<Col>
					<PropertyList>
						propertiesData = {landlordProperties}
						onDeleteProperty = {handleDeleteProperty}
					</PropertyList>

				</Col>
			</Row>

		</Container>

	);
};

export default Landlord;