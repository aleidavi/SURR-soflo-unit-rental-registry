import { useState } from 'react'

import LandlordRegister from './components/login_register/LandlordRegister';
import LandlordLogin from './components/login_register/LandlordLogin';
import { ReactProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Optional, for components like modals or dropdowns




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
		<>

			<LandlordRegister 

				newLandlords={newLandlords}
			/>
		
		</>
	)




};





export default App;
