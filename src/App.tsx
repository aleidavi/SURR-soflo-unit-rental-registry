
import react from 'react'
import Header from './components/home_page/Header';
import LandlordRegister from './components/login_register/LandlordRegister';
import LandlordLogin from './components/login_register/LandlordLogin';
import NotFound from './components/NotFound';
import Home from './components/home_page/Home';

import { BrowserRouter, Routes, Route, Navigation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';
import Landlord from './components/landlord/Landlord';
import ProtectedRoute from './components/ProtectedRoute';




// for logout 
function Logout(){
	localStorage.clear();
	return <Navigate to="/login" />;
}

// for Registering and Logging out
// 
function RegisterAndLogout() {
	localStorage.clear();
	return <LandlordRegister />;
}



function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route

					path="/" 
					element={

						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
						
						}

				/>
				<Route path="/login" element={<LandlordLogin />} />
				<Route path="/register" element={<RegisterAndLogout/>} />
				<Route path="*" element={<NotFound />} />

			</Routes>
		
		
		</BrowserRouter>

		
		
	)


	/* USING react-router-dom to render components to specific endpoints! */
	// const router = createBrowserRouter([
	// 	{
	// 		path: '/',
	// 		element: <Home />
	// 	},
	// 	{
	// 		path: '/login',
	// 		element: <LandlordLogin handleLogin={handleLogin} />
	// 	},
	// 	{
	// 		path: "/register",
	// 		element: <LandlordRegister handleRegistrationSubmit={handleRegistrationSubmit} />
	// 	},
	// 	{
	// 		path: "/manage_account",
	// 		//element: isLoggedIn? <Landlord {...currentLandlord} /> : <Home />
	// 		element: <Landlord></Landlord>
	// 	},
	// ]);

	// return (

	// 	<div className='App'>
	// 		<Header />
	// 		<RouterProvider router={router} />
	// 	</div>

	// )
};

export default App;




