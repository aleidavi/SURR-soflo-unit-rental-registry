
import { ChangeEvent, useState } from 'react'
import NavBar from './components/home_page/NavBar';
import LandlordRegister from './components/login_register/LandlordRegister';
import LandlordLogin from './components/login_register/LandlordLogin';
import { RouterProvider, createBrowserRouter, Route, Link } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';





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

const convertFromAPI = (apiData: RegistrationParams) => {
	const newLandlordData = {
		username: apiData.username,
		password: apiData.password,
		firstName: apiData.first_name,
		lastName: apiData.last_name, 
		businessName: apiData.business_name? apiData.business_name : 'None',
		phoneNumber: apiData.phone_number,
		email: apiData.email,
		mailingAddress: apiData.mailing_address,
	}

	delete apiData.first_name;
	delete apiData.last_name;
	delete apiData.business_name;
	delete apiData.phone_number;
	delete apiData.mailing_address;

	return newLandlordData;
};

const kBaseURL = process.env.API_URL;

const App: React.FC = () => {

	const [landlordData, setLandlordData] = useState<RegistrationParams[]>([])

	const handleRegistrationSubmit = (landlordData) => {

		axios.post(`${kBaseURL}/landlords`, data)
			.then((result)=>{
				setLandlordData((prevLandlords) => [convertFromAPI(result.data), ...prevLandlords]);

			})
			.catch((e) => console.log(`Error occurring at handleRegistrationSubmit callback func: ${e}`));
	};

	/* USING react-router-dom to render components to specific endpoints! */
	const router = createBrowserRouter([
		//{
		//path: '/home',
		//element: <Home />,
		//},
		{
			path: '/login',
			element: <LandlordLogin />
		},
		{
			path: "/register",
			element: <LandlordRegister handleRegistrationSubmit={handleRegistrationSubmit} />
		}
	]);

	return (

		<div className='App'>
			{/*<NavBar/>*/}
			{/*<RouterProvider router={}></RouterProvider>*/}
			{/*<LandlordRegister handleSubmit={handleRegistrationSubmit} />*/}
			<RouterProvider router={router} />
		</div>

	)

};

export default App;




