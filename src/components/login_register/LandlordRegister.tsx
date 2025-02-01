
import React, { ChangeEvent, useState } from 'react';
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
	}

	const [formData, setFormData] = useState(kDefaultFormState);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value
		});
	};

	const onHandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// CALLBACK FUNCTION handleSubmit() must be defined in APP.tsx 
		handleRegistrationSubmit(formData);
	}

	return (
		<div className='addLandlord'>
			<h2>Landlord or Property Owner?</h2>

			<p> Please enter all the information below, to create an account for the Landlord Portal.</p>

			<form onSubmit={onHandleSubmit} className='addLandlordForm'>

				<div className='landlordInput'>
					<label htmlFor='name'> Username (required) </label>
					<input
						type='text'
						id='name'
						autoComplete='off'
						placeholder='Enter username'
						value=''
						onChange={handleChange}
					/>


					<label htmlFor='name'> Password (required) </label>
					<input
						type='password'
						id='password'
						autoComplete='off'
						placeholder='Enter password'
						value=''
						onChange={handleChange}
					/>

					<label htmlFor='name'> First Name (required)  </label>
					<input
						type='firstName'
						id='firstName'
						autoComplete='off'
						placeholder='Enter first name'
						value=''
						onChange={handleChange}
					/>

					<label htmlFor='name'> Last Name (required) </label>
					<input
						type='lastName'
						id='lastName'
						autoComplete='off'
						placeholder='Enter last name'
						value=''
						onChange={handleChange}
					/>

					<label htmlFor='name'> Business Name </label>
					<input
						type='businessName'
						id='businessName'
						autoComplete='off'
						placeholder='Enter business name'
						value=''
						onChange={handleChange}
					/>

					<label htmlFor='name'> Telephone Number (required) </label>
					<input
						type='phoneNumber'
						id='phoneNumber'
						autoComplete='off'
						placeholder='Enter phone number'
						value=''
						onChange={handleChange}
					/>

					<label htmlFor='name'> Email (required) </label>
					<input
						type='email'
						id='email'
						autoComplete='off'
						placeholder='Enter email'
						value=''
						onChange={handleChange}
					/>

					<label htmlFor='name'> Mailing Address (required) </label>
					<input
						type='mailingAddress'
						id='mailingAddress'
						autoComplete='off'
						placeholder='Enter mailing address'
						value={formData.mailingAddress}

						onChange={handleChange}
					/>

					<button type="submit" className="btn btn-success">Register</button>
				</div>
			</form>

			<div className='login'>
				<p>Already have an account?</p>
				<button onClick={handleChange} type="submit" className="btn btn-link">Login to your Landlord account here. </button>
			</div>
		</div>
	)
}

export default LandlordRegister;