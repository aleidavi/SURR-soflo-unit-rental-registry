
import { useState } from 'react'
import NavBar  from './components/home_page/NavBar';
import LandlordRegister from './components/login_register/LandlordRegister';
import LandlordLogin from './components/login_register/LandlordLogin';
import { ReactProvider, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Optional, for components like modals or dropdowns
import { Navbar } from 'react-bootstrap';



export const App:React.FC = ()  => {

	const handleSubmit = (params: any) => {
		// handle submit logic
	  };
	

	/* USING react-router-dom to render components to specific endpoints! */
	const route: React.FC = createBrowserRouter([
		{
			path: '/landlords/login',
			element: <LandlordLogin />

		},
		{
			path: "/landlords",
			element: <LandlordRegister/>
		}
	]);

	return (
	
			<div> 
				<NavBar/>
				<RouterProvider router={}></RouterProvider>
			</div>
			//{/*<LandlordRegister/>*/}

			


	)




};






