import React, { useState } from 'react';
import {Table} from 'react-bootstrap';
import '../../App.tsx';
import './PropertyTable.css';



const PropertyTable: React.FC<PropertyTableProps> = ({landlordProperties}) => {

	//const [landlordProperties, setLandlordProperties] = useState()

  return (
	<div className="table-container">
		<h4>Properties Table</h4>
		<Table>
			<thead>
				<tr>Property ID</tr>
				<tr>Address</tr>
				<tr>Unit Quantity</tr>
				<tr>Property Type</tr>
				<tr>Monthly Rent</tr>
				<tr>Last Increase Date</tr>
				<tr>Rent Increase Percentage</tr>
				<tr>Occupancy Start Date</tr>

			</thead>
			<tbody>
				{landlordProperties.map((property, index) => (
					<tr key={index}>
					<td>{property.id}</td>
					<td>{property.address}</td>
					<td>{property.unit_quantity}</td>
					<td>{property.property_type}</td>
					<td>{property.monthly_rent}</td>
					<td>{property.last_increase_date}</td>
					
				  </tr>

				))}

			</tbody>

		</Table>
	</div>
  )
}

export default PropertyTable;