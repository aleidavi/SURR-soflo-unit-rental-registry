
import React from 'react'
import './LandlordRegister.css';



const Register = () => {

	return (
		<div className='addLandlord'>
			<h2>Landlord or Property Owner?</h2>

			<h3> Please enter all the information below, to create an account for the Landlord Portal.</h3>
			<form className='addLandlordForm'>
				<div className='landlordInput'>
					<label htmlFor='name'> Username (required) </label>
					<input
						type='text'
						id='name'
						autoComplete='off'
						placeholder='Enter username'
					/>


					<label htmlFor='name'> Password (required) </label>
					<input
						type='password'
						id='password'
						autoComplete='off'
						placeholder='Enter password'
					/>

					<label htmlFor='name'> First Name (required)  </label>
					<input
						type='firstName'
						id='firstName'
						autoComplete='off'
						placeholder='Enter first name'
					/>

					<label htmlFor='name'> Last Name (required) </label>
					<input
						type='lastName'
						id='lastName'
						autoComplete='off'
						placeholder='Enter last name'
					/>

					<label htmlFor='name'> Business Name </label>
					<input
						type='businessName'
						id='businessName'
						autoComplete='off'
						placeholder='Enter business name'
					/>

					<label htmlFor='name'> Telephone Number </label>
					<input
						type='phoneNumber'
						id='phoneNumber'
						autoComplete='off'
						placeholder='Enter phone number'
					/>

					<label htmlFor='name'> Email </label>
					<input
						type='email'
						id='email'
						autoComplete='off'
						placeholder='Enter email'
					/>

					<label htmlFor='name'> Mailing Address </label>
					<input
						type='mailingAddress'
						id='mailingAddress'
						autoComplete='off'
						placeholder='Enter mailing address'
					/>

					<button type="submit" className="btn btn-success">Register</button>
				</div>
			</form>

			<div className='login'>
				<p>Already have an account?</p>
				<button type="submit" className="btn btn-link">Login to your Landlord account now</button>
			</div>
		</div>
	)
}

export default Register;