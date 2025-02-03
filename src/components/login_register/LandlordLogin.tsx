import React, { ChangeEvent, useRef, useState, useEffect } from 'react';
import './LandlordLogin.css';

// Local storage inside browser -> check reactHooks
// Cookie saved inside browser

interface Props {
	handleLoginSubmit: (formData: any) => void;
}

const LandlordLogin: React.FC = ({ handleLoginSubmit }) => {

	const kDefaultLoginState = {
		usernameLogin: '',
		passwordLogin: '',
	}

	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [loginFormData, setLoginFormData] = useState(kDefaultLoginState);


	const handleLoginFormChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newFormData = {
			...loginFormData,
			[event.target.name]: event.target.value
		}
		setLoginFormData(newFormData);
	};

	const onHandleLogin = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// CALLBACK FUNCTION handleSubmit() must be defined in APP.tsx 
		handleLoginSubmit(loginFormData);
		setLoginFormData(kDefaultLoginState);
	};

	return (
		<div className='loginLandlord'>
			<h2>Welcome!
				Login to your Landlord account.
			</h2>

			<form onSubmit={onHandleLogin} className='loginLandlordForm'>
				<div className='landlordLoginInput'>
					<label htmlFor='usernameLogin'> Username (required) </label>
					<input
						type='text'
						id='usernameLogin'
						name='usernameLogin'
						autoComplete='off'
						placeholder='Enter username'
						value={loginFormData.usernameLogin}
						onChange={handleLoginFormChange}
					/>
					<label htmlFor='passwordLogin'> Password (required) </label>
					<input
						type='password'
						id='passwordLogin'
						autoComplete='off'
						placeholder='Enter password'
						value={loginFormData.passwordLogin}
						onChange={handleLoginFormChange}
					/>

					<button type="submit" className="btn btn-success">Login</button>
				</div>
			</form>
			<div className='login'>
				<p>Don't have an account?</p>
				<button type="submit" className="btn btn-link">Register Landlord account here.</button>
			</div>
		</div>
	)

}

export default LandlordLogin;