import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import Header from './components/home_page/Header.tsx';
import { BrowserRouter, Routes, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandlordLogin from './components/login_register/LandlordLogin.tsx';
import LandlordRegister from './components/login_register/LandlordRegister.tsx';


createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>,
)
