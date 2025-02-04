import React, { useState } from 'react';
import '../../App.tsx';
import './PropertyTable.css';



const PropertyTable = ({properties}) => {

	const [landlordProperties, setLandlordProperties] = useState()
  return (
	<div className="table-container">Property Table
		<table>
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

			</tbody>

		</table>
	</div>
  )
}

export default PropertyTable;