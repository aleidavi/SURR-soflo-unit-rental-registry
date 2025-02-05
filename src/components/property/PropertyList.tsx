import React, { useState } from 'react';
import { } from 'react-bootstrap';
import '../../App.tsx';
import './PropertyList.css';
import Property from './Property.tsx';

interface PropertyData {
	id: number;
	address: string;
	unitQuantity: number;
	propertyType: string;
	monthlyRent: number;
	lastIncreaseDate: string;
	rentIncreasePercentage: number;
	occupancyStartDate: string;
	occupancyStatus: string;
}

interface PropertyListProps {
	propertiesData: Array<PropertyData>;
	onDeleteProperty: (id: number) => void;
}



const PropertyList: React.FC<PropertyListProps> = ({ propertiesData, onDeleteProperty }) => {

	const propertyComponents = propertiesData.map((property) => {

		return (
			<Property
				key={property.id}
				id={property.id}
				address={property.address}
				unitQuantity={property.unitQuantity}
				propertyType={property.propertyType}
				monthlyRent={property.monthlyRent}
				lastIncreaseDate={property.lastIncreaseDate}
				rentIncreasePercentage={property.rentIncreasePercentage}
				occupancyStartDate={property.occupancyStartDate}
				occupancyStatus={property.occupancyStatus}
				onDeleteProperty={onDeleteProperty}
			/>
		)
	});
	return (
		<ul className="table-container">
			{propertyComponents}
		</ul>
	)
}

export default PropertyList;