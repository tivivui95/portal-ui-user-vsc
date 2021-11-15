import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import Dashboard from "./Dashboard";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';


const clientId = '3247538855-embvinuieodu2euh2punknhe3dsers3q.apps.googleusercontent.com';



function Login() {
    const [ ui, setUI ] = useState();
    const [ visible, setVisible ] = useState('App');
    const [ outVisible, setOutVisible ] = useState('hide');

    const onLoginSuccess = (res) => {
        console.log('[Login success] currentUser:', res.profileObj);
        setUI(<Dashboard />);
        setVisible('hide');
        setOutVisible('corner');
    }
    const onFailure = (res) => {
        console.log('[Login Failed] res:', res);
    }

    const onLogOutSuccess = () => {
        alert('Log out successful!');
        setUI();
        setVisible('App');
        setOutVisible('hide');
    }
    return (
        <div>
            <div className={visible}>
                <h2>Dashboard</h2>
                <GoogleLogin 
                    clientId={clientId}
                    buttonText="Login with Google"
                    onSuccess={onLoginSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            </div>
            <div>{ui}</div>
            <div className={outVisible}>
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Logout"
                    onLogoutSuccess={onLogOutSuccess}
                ></GoogleLogout>
            </div>
        </div>
    );
}

export default Login;