import '../../App.tsx';
import './Property.css';
import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';

interface PropertyProps {
	id: number;
	address: string;
	unit_quantity: number;
	property_type: string;
	monthly_rent: number;
	last_increase_date: string,
	rent_increase_percentage: number;
	occupancy_start_date: string;
	occupancy_status: string;
	onDeleteClick: (id: number) => void; // Add onDelete prop
}

const Property: React.FC<PropertyProps> = ({
	id,
	address,
	unit_quantity,
	property_type,
	monthly_rent,
	last_increase_date,
	rent_increase_percentage,
	occupancy_start_date,
	occupancy_status,
}) => {

	const onDeleteClick = () => {
		onDeleteProperty(id);
	};

	return (
		<Card className="property-container border-dark mb-3" style={{ maxWidth: '18rem' }}>

			<Card.Header>
				<div className="d-flex justify-content-between align-items-center">
					<span>Property ID: {id}</span>
					<Button variant="danger" size="sm" onClick={onDeleteClick}>
						&times;
					</Button>
				</div>
			</Card.Header>

			<Card.Body className="text-dark">

				<Card.Text>
					<strong>Address</strong> {address}
				</Card.Text>

				<Card.Text>
					<strong>Unit Quantity</strong> {unit_quantity}
				</Card.Text>

				<Card.Text>
					<strong>Property Type </strong> {property_type}
				</Card.Text>

				<Card.Text>
					<strong>Occupancy Status</strong> {occupancy_status}
				</Card.Text>

				<Card.Text>
					<strong>Monthly Rent </strong> {monthly_rent}
				</Card.Text>

				<Card.Text>
					<strong>Last Increase Date</strong> {last_increase_date}
				</Card.Text>

				<Card.Text>
					<strong>Increase Percentage (%)</strong> {rent_increase_percentage}
				</Card.Text>

				<Card.Text>
					<strong>Occupancy Start Date</strong> {occupancy_start_date}
				</Card.Text>


			</Card.Body>
		</Card>
	);
};

export default Property;







