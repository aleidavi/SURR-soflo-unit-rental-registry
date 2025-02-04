
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Landlord.css';

interface LandlordProps {
	id: number;
	username: string;
	password: string;
	first_name: string;
	last_name: string;
	business_name: string;
	phoneNumber: string;
	email: string;
	mailingAddress: string;
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
		
		<>
		<div className="landlord-profile">
			<h2>Landlord Dashboard</h2>
			<p><strong>First Name:</strong> {currentLandlord.first_name}</p>
			<p><strong>Last Name:</strong> {currentLandlord.last_name}</p>
			<p><strong>Business Name:</strong> {currentLandlord.business_name} </p>
			<p><strong>Phone Number:</strong> {currentLandlord.phone_number}</p>
			<p><strong>Email:</strong> {currentLandlord.email}</p>
			<p><strong>Mailing Address:</strong> {currentLandlord.mailing_address}</p>
			{/* Display properties if needed */}
		</div>

		<div className="property-table">
			<h3>Property Table</h3>

		</div>
		</>

	);
};

export default Landlord;