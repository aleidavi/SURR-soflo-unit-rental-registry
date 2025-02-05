import '../../App.tsx';
import './Property.css';
import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';

interface PropertyProps {
	id: number;
	address: string;
	unitQuantity: number;
	propertyType: string;
	monthlyRent: number;
	lastIncreaseDate: string,
	rentIncreasePercentage: number;
	occupancyStartDate: string;
	occupancyStatus: string;
	onDeleteClick: (id: number) => void; // Add onDelete prop
}

const Property: React.FC<PropertyProps> = ({
	id,
	address,
	unitQuantity,
	propertyType,
	monthlyRent,
	lastIncreaseDate,
	rentIncreasePercentage,
	occupancyStartDate,
	occupancyStatus,
	onDeleteClick
	}) => {

	const handleDelete = () => {
		onDeleteClick(id);
	};

	return (
		<Card className="property-container border-dark mb-3" style={{ maxWidth: '18rem' }}>

			<Card.Header>
				<div className="d-flex justify-content-between align-items-center">
					<span>Property ID: {id}</span>
					<Button variant="danger" size="sm" onClick={handleDelete}>
						&times;
					</Button>
				</div>
			</Card.Header>

			<Card.Body className="text-dark">

				<Card.Text>
					<strong>Address</strong> {address}
				</Card.Text>

				<Card.Text>
					<strong>Unit Quantity</strong> {unitQuantity}
				</Card.Text>

				<Card.Text>
					<strong>Property Type </strong> {propertyType}
				</Card.Text>

				<Card.Text>
					<strong>Occupancy Status</strong> {occupancyStatus}
				</Card.Text>

				<Card.Text>
					<strong>Monthly Rent </strong> {monthlyRent}
				</Card.Text>

				<Card.Text>
					<strong>Last Increase Date</strong> {lastIncreaseDate}
				</Card.Text>

				<Card.Text>
					<strong>Increase Percentage (%)</strong> {rentIncreasePercentage}
				</Card.Text>

				<Card.Text>
					<strong>Occupancy Start Date</strong> {occupancyStartDate}
				</Card.Text>


			</Card.Body>
		</Card>
	);
};

export default Property;







