
import { useState } from 'react'
import NavBar  from './components/home_page/NavBar';
import LandlordRegister from './components/login_register/LandlordRegister';
import LandlordLogin from './components/login_register/LandlordLogin';
import { ReactProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Optional, for components like modals or dropdowns
import { Navbar } from 'react-bootstrap';




const App:React.FC = ()  => {

	const [newLandlords, setNewLandlords] = useState();

	/* USING react-router-dom to render components to specific endpoints! */
	//const route: React.FC = createBrowserRouter([
		//{
			//path: '/',
			//element: <LandlordLogin />

		//}
	//]);

	return (
	
			<div> 
				<NavBar/>
			</div>
			//{/*<LandlordRegister/>*/}


	)




};





export default App;
