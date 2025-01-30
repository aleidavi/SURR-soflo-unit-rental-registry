
import React, { ChangeEvent, useState } from 'react';
import './LandlordRegister.css';
import { Link } from 'react-router-dom';



interface Props {
	onLandlordCreate: () => void;
	handleSubmit: (formData: any) => void;

}

const LandlordRegister: React.FC<Props> = ({ onLandlordCreate, handleSubmit }) => {


	const [formData, setFormData] = useState({});

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value
		});
	};

	const onHandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// CALLBACK FUNCTION handleSubmit() must be defined in APP.tsx 
		handleSubmit(formData);
	}

	return (
		<div className='addLandlord'>
			<h2>Landlord or Property Owner?</h2>

			<p> Please enter all the information below, to create an account for the Landlord Portal.</p>

			<form onSubmit={onLandlordCreate} className='addLandlordForm'>

				<div className='landlordInput'>
					<label htmlFor='name'> Username (required) </label>
					<input
						type='text'
						id='name'
						autoComplete='off'
						placeholder='Enter username'
						value=''
					/>


					<label htmlFor='name'> Password (required) </label>
					<input
						type='password'
						id='password'
						autoComplete='off'
						placeholder='Enter password'
						value=''
					/>

					<label htmlFor='name'> First Name (required)  </label>
					<input
						type='firstName'
						id='firstName'
						autoComplete='off'
						placeholder='Enter first name'
						value=''
					/>

					<label htmlFor='name'> Last Name (required) </label>
					<input
						type='lastName'
						id='lastName'
						autoComplete='off'
						placeholder='Enter last name'
						value=''
					/>

					<label htmlFor='name'> Business Name </label>
					<input
						type='businessName'
						id='businessName'
						autoComplete='off'
						placeholder='Enter business name'
						value=''
					/>

					<label htmlFor='name'> Telephone Number </label>
					<input
						type='phoneNumber'
						id='phoneNumber'
						autoComplete='off'
						placeholder='Enter phone number'
						value=''
					/>

					<label htmlFor='name'> Email </label>
					<input
						type='email'
						id='email'
						autoComplete='off'
						placeholder='Enter email'
						value=''
					/>

					<label htmlFor='name'> Mailing Address </label>
					<input
						type='mailingAddress'
						id='mailingAddress'
						autoComplete='off'
						placeholder='Enter mailing address'
						value=''
					/>

					<button type="submit" className="btn btn-success">Register</button>
				</div>
			</form>

			<div className='login'>
				<p>Already have an account?</p>
				<button onClick={handleChange} type="submit" className="btn btn-link">Login to your Landlord account now</button>
			</div>
		</div>
	)
}

export default LandlordRegister;