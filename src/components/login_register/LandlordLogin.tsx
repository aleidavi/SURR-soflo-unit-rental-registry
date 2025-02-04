import React, { ChangeEvent, useRef, useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import './LandlordLogin.css';

// Check for username pw in back-end
// True: Login and move on to Landlord profile page
// useState() for storing the Landlord profile to identify the landlord's page
// For logout -> update state to have the isLoggedIn state to be false

// Conditonally rendering a Manage Propperties button -> based on the state's status

interface Props {
	handleLoginSubmit: (formData: any) => void;
}

const LandlordLogin: React.FC = ({ handleLoginSubmit }) => {

	const kDefaultLoginState = {
		usernameLogin: '',
		passwordLogin: '',
	}

	const [loginFormData, setLoginFormData] = useState(kDefaultLoginState);
	const [currentProfile, setProfile] = useState('');
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [errorMessage, setErrorMessage] = useState()


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
		handleLogin(loginFormData);

		// Once user is logged in, the login form should be reset to it's default empty state
		setLoginFormData(kDefaultLoginState);
	};

	return (
		<div className='loginLandlord'>
				<h3>
					Welcome back!
				</h3>
				<h4>
					Login to your Landlord account.
				</h4>
			

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
				<button type="submit" className="btn btn-link">
					<Nav.Link href="/register">Register Landlord account here. </Nav.Link>
				</button>
			</div>
		</div>
	)

}

export default LandlordLogin;