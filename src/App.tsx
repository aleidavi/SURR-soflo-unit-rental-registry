
import { ChangeEvent, useEffect, useState } from 'react'
import Header from './components/home_page/Header';
import LandlordRegister from './components/login_register/LandlordRegister';
import LandlordLogin from './components/login_register/LandlordLogin';
import Home from './components/home_page/Home';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';
import Landlord from './components/landlord/Landlord';



interface RegistrationParams {
	username: string;
	password: string;
	firstName: string;
	lastName: string;
	businessName: string;
	phoneNumber: string;
	email: string;
	mailingAddress: string;
	first_name?: string,
	last_name?: string,
	business_name?: string,
	phone_number?: string,
	mailing_address?: string,
}

interface LoginParams {
	usernameLogin: string;
	passwordLogin: string;
}


interface Props {
	handleLogin: (loginData: LoginParams) => void;
}


interface APILandlordData {
	id: number,
	username: string,
	password: string,
	first_name: string;
	last_name: string;
	business_name: string;
	phone_number: string;
	email: string;
	mailing_address: string;
	[key: string]: any; // for other potential properties
}

const convertFromAPI = (apiData: APILandlordData): RegistrationParams => {
	console.log(apiData);
	return {
		firstName: apiData.first_name,
		lastName: apiData.last_name,
		username: apiData.username,
		password: apiData.password,
		businessName: apiData.business_name,
		phoneNumber: apiData.phone_number,
		email: apiData.email,
		mailingAddress: apiData.mailing_address,
	};
};

const kBaseURL = 'http://127.0.0.1:8000';

// For setting all Landlords Data:
const getAllLandlordsAPI = () => {
	return axios.get(`${kBaseURL}/landlords/`)
		.then(response => {
			console.log(response);
			const apiLandlords = response.data;
			const updatedLandlords = apiLandlords.map(convertFromAPI);
			return updatedLandlords;
		})
		.catch(error => {
			console.log(`Error is coming from getAllLandlordsAPI func: ${error}`)
		});
};

// For completing patching data of a Landlord's Properties:
// Heavily nested -> must provide the landlords_id, and property_id
const updatePropertyAPI = (landlord_id, property_id) => {
	return axios.patch(`${kBaseURL}/landlords/${landlord_id}/properties/${property_id}`)
		.then(response => {
			const updated = convertFromAPI(response.data);
		})
}


function App() {
	const [landlordData, setLandlordData] = useState<RegistrationParams[]>([])
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [currentLandlord, setCurrentLandlord] = useState<RegistrationParams | null>(null);


	const getAllLandlords = () => {
		getAllLandlordsAPI()
			.then((landlords) => {
				console.log(landlords);
				setLandlordData(landlords);
			});
	};

	useEffect(() => {
		getAllLandlords();
	}, []);

	const handleRegistrationSubmit = (newLandlordData: RegistrationParams) => {
		return axios.post(`${kBaseURL}/landlords`, newLandlordData)
			.then((result) => {
				setLandlordData((prevLandlords) => [convertFromAPI(result.data), ...prevLandlords]);
			})
			.catch((e) => console.log(`Error occurring at handleRegistrationSubmit callback func: ${e}`));
	};



	const handleLogin = (loginData: LoginParams) => {
		const foundLandlord = landlordData.find((landlord) =>

			landlord.username === loginData.usernameLogin &&
			landlord.password === loginData.passwordLogin
		);

		if (foundLandlord) {
			setIsLoggedIn(true);
			setCurrentLandlord(foundLandlord);
		} else {
			console.log('Invalid username or password.')
		}
	};


	/* USING react-router-dom to render components to specific endpoints! */
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />
		},
		{
			path: '/login',
			element: <LandlordLogin handleLogin={handleLogin} />
		},
		{
			path: "/register",
			element: <LandlordRegister handleRegistrationSubmit={handleRegistrationSubmit} />
		},
		{
			path: "/manage_account",
			//element: isLoggedIn? <Landlord {...currentLandlord} /> : <Home />
			element: <Landlord></Landlord>
		},
	]);

	return (

		<div className='App'>
			<Header />
			<RouterProvider router={router} />
		</div>

	)
};

export default App;




