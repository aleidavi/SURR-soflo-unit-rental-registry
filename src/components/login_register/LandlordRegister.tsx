
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Nav } from 'react-bootstrap';
import './LandlordRegister.css';



interface Props {
	handleRegistrationSubmit: (formData: any) => void;
}

const LandlordRegister: React.FC<Props> = ({ handleRegistrationSubmit }) => {

	const kDefaultFormState = {
		username: '',
		password: '',
		firstName: '',
		lastName: '',
		businessName: '',
		phoneNumber: '',
		email: '',
		mailingAddress: '',
	};

	const [formData, setFormData] = useState(kDefaultFormState);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newFormData = {
			...formData,
			[event.target.name]: event.target.value
		}
		setFormData(newFormData);
	};

	const onHandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// CALLBACK FUNCTION handleSubmit() must be defined in APP.tsx 
		handleRegistrationSubmit(formData);
		setFormData(kDefaultFormState);
	}

	return (
		<div className='addLandlord'>
			<h3>Landlord or Property Owner?</h3>

			<p> Please enter all the information below, to create an account for the Landlord Portal.</p>

			<form onSubmit={onHandleSubmit} className='addLandlordForm'>

				<div className='landlordInput'>
					<label htmlFor='username'> Username (required) </label>
					<input
						type='text'
						id='username'
						name='username'
						autoComplete='off'
						placeholder='Enter username'
						value={formData.username}
						onChange={handleChange}
					/>


					<label htmlFor='password'> Password (required) </label>
					<input
						type='password'
						id='password'
						name='password'
						autoComplete='off'
						placeholder='Enter password'
						value={formData.password}
						onChange={handleChange}
					/>

					<label htmlFor='firstName'> First Name (required)  </label>
					<input
						type='text'
						id='firstName'
						name='firstName'
						autoComplete='off'
						placeholder='Enter first name'
						value={formData.firstName}
						onChange={handleChange}
					/>

					<label htmlFor='lastName'> Last Name (required) </label>
					<input
						type='text'
						id='lastName'
						name='lastName'
						autoComplete='off'
						placeholder='Enter last name'
						value={formData.lastName}
						onChange={handleChange}
					/>

					<label htmlFor='businessName'> Business Name </label>
					<input
						type='text'
						id='businessName'
						name='businessName'
						autoComplete='off'
						placeholder='Enter business name'
						value={formData.businessName}
						onChange={handleChange}
					/>

					<label htmlFor='phoneNumber'> Telephone Number (required) </label>
					<input
						type='text'
						id='phoneNumber'
						name='phoneNumber'
						autoComplete='off'
						placeholder='Enter phone number'
						value={formData.phoneNumber}
						onChange={handleChange}
					/>

					<label htmlFor='email'> Email (required) </label>
					<input
						type='text'
						id='email'
						name='email'
						autoComplete='off'
						placeholder='Enter email'
						value={formData.email}
						onChange={handleChange}
					/>

					<label htmlFor='mailingAddress'> Mailing Address (required) </label>
					<input
						type='text'
						id='mailingAddress'
						name='mailingAddress'
						autoComplete='off'
						placeholder='Enter mailing address'
						value={formData.mailingAddress}

						onChange={handleChange}
					/>

					<button type="submit" className="btn btn-success" value='Register'>Register</button>
				</div>
			</form>

			<div className='login'>
				<p>Already have an account?</p>
				<button type="submit" className="btn btn-link" >
					<Nav.Link href="/login">Login to your Landlord account here. </Nav.Link>
				</button>
			</div>
		</div>
	)
}

export default LandlordRegister;