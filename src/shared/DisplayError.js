import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const DisplayError = () => {
    const error = useRouteError();
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut()
            .then(() => { navigate('/login') })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <p className="text-red-600">Something went wrong!!</p>
            <p className="text-red-600">{error.statusText || error.message}</p>
            <h3 className="text-3xl text-purple-600 text-center">
                Please <button onClick={handleLogout}>Sign out</button> and log back in
            </h3>
        </div>
    );
};

export default DisplayError;