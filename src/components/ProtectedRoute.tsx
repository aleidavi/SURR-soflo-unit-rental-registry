
import {Navigate} from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import api from './api';
import {REFRESH_TOKEN, ACCESS_TOKEN} from './constants';
import {useState, useEffect} from 'react';


interface ProtectedRouteProps {
    children: React.ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps): JSX.Element {

    // Front end protection for users to access the protected routes

    const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
    useEffect(() => {
        auth().catch(() => setIsAuthorized(false))}, 
        []
    );


    const refreshToken = async (): Promise<void> => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);

        try {
            const response = await api.post('/api/token/refresh/', {
                refresh: refreshToken,
            });

            if (response.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, response.data.access);
                setIsAuthorized(true);

            } else {
                setIsAuthorized(false);
            }

        }
        catch (error) {
            console.log(error)
            setIsAuthorized(false);
        }
    }

    // Check for access token expiration and refresh if needed
const auth = async (): Promise<void> => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
        setIsAuthorized(false)
        return;
    }

    const decodedToken: { exp: number } = jwtDecode(token);
    const tokenExpiration = decodedToken.exp
    const now = Date.now() / 1000; // Convert to seconds    
    if (tokenExpiration < now) {
        await refreshToken;
    } else {
        setIsAuthorized(true);
    }
}

if (isAuthorized === null) {
    return <div>Loading...</div>;
}
else {
    return isAuthorized ? children : <Navigate to="/login" />;
}
}

export default ProtectedRoute;