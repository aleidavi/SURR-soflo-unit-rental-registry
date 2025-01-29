import React from 'react';

import './LandlordLogin.css';
import '../../App.tsx';


const LandlordLogin: React.FC = () => {

	return (
		<div className='loginLandlord'>
			<h2>Landlord login</h2>

			<form className='loginLandlordForm'>
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

					<button type="submit" className="btn btn-success">Login</button>
				</div>
			</form>
			<div className='login'>
				<p>Don't have an account?</p>
				<button type="submit" className="btn btn-link">Register Landlord account</button>
			</div>
		</div>
	)

}

export  default LandlordLogin;