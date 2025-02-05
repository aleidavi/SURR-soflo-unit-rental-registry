import React, { useState } from 'react';
import { } from 'react-bootstrap';
import '../../App.tsx';
import './PropertyList.css';
import Property from './Property.tsx';

interface PropertyListProps {
	propertiesData: Array<any>;
	onDeleteProperty: (id: number) => void;
}



const PropertyList: React.FC<PropertyListProps> = ({ propertiesData, onDeleteProperty }) => {

	const propertyComponents = propertiesData.map((property) => {

		return (
			<Property
				key={property.id}
				id={property.id}
				address={property.address}
				unit_quantity={property.unit_quantity}
				property_type={property.property_type}
				monthly_rent={property.monthly_rent}
				last_increase_date={property.last_increase_date}
				rent_increase_percentage={property.rent_increase_percentage}
				occupancy_start_date={property.occupancy_start_date}
				occupancy_status={property.occupancy_status}
				onDeleteProperty={onDeleteProperty}
			/>
		)
	})
	return (
		<div className="table-container">
			{propertyComponents}
		</div>
	)
}

export default PropertyList;