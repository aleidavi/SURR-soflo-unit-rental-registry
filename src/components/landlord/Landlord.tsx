
import React, { useState, useEffect, useCallback} from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
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
}

interface PropertyProps {
	id: number,
	address: string,
	unit_quantity: number,
	property_type: string,
	occupancy_status: string,
	monthly_rent: number,
	last_increase_date: string,
	rent_increase_percentage: number,
	occupancy_start_date: string
}

interface Property {
    propertyId: number;
    // Add other property fields as needed
}

const Landlord: React.FC<LandlordProps> = () => {
	const [currentLandlordId, setCurrentLandlord] = useState<LandlordProps | null>(null);
	const [landlordProperties, setLandlordProperties] = useState<Property[]>([]);

	
	const kBaseURL = 'http://127.0.0.1:8000';



	const getCurrentLandlord = useCallback(() => {
		//setCurrentLandlord(1);
		axios.get(`${kBaseURL}/landlords/1`)
			.then(response => {
				console.log(response.data)
				setCurrentLandlord(response.data);
			})
			.catch(error => {
				console.error('Error fetching landlord data:', error);
			});
	}, []);

	const convertFromAPI = (apiProperty:PropertyProps) => {
		const newProperty = {
			
			id: apiProperty.id,
			address: apiProperty.address,
			unitQuantity: apiProperty.unit_quantity,
			propertyType: apiProperty.property_type,
			occupancyStatus: apiProperty.occupancy_status, 
			monthlyRent: apiProperty.monthly_rent,
			lastIncreaseData: apiProperty.last_increase_date? apiProperty.last_increase_date: 'None',
			rentIncreasePercentage: apiProperty.rent_increase_percentage? apiProperty.rent_increase_percentage: 'None',
			occupancyStartDate: apiProperty.occupancy_start_date? apiProperty.occupancy_start_date: 'None',
		}
		return newProperty;
	};

	const getLandlordPropertiesAPI = useCallback(() => {
		axios.get(`${kBaseURL}/landlords/1/properties`)
				.then(response => {
					console.log(response.data);
					const apiProperties = response.data;
					const newProperties = apiProperties.map(convertFromAPI)
					return newProperties;
				})
				.catch(error => {
					console.error('Error fetching properties data:', error);
					return [];
				});
	}, []);

	const getAllProperties = useCallback(() => {
		getLandlordPropertiesAPI()
			.then((properties: Property[]) => {
				setLandlordProperties(properties);
			});
	}, [getLandlordPropertiesAPI]);

	useEffect(() => {
		// Replace with the actual ID you want to use for demonstration purposes
		getCurrentLandlord();
		getAllProperties();
	}, []);


	if (!currentLandlordId) {
		return <div>Loading...</div>;
	}

	const onDeleteProperty = (propertyId: number) => {
		return axios.delete(`${kBaseURL}/landlords/${currentLandlordId}/properties/${propertyId}`)
			.then(()=> {
				setLandlordProperties(landlordProperties => landlordProperties.filter(property => {
					return property.propertyId != propertyId;
				}))
			})
			.catch(error => {
                console.error('Error deleting property:', error);
            });
    };


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
						onDeleteProperty = {onDeleteProperty}
					</PropertyList>

				</Col>
			</Row>

		</Container>

	);
};

export default Landlord;