import React, { useState } from "react";
import {ReactComponent as Avatar} from './avatar.svg';
import {ReactComponent as Reading} from './reading.svg';



export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    } 

    return (
        <div className="div-login">   
            <div>
                <Reading className="reading"/>
                <h1 className="title"> BOOKGRAM </h1>
            </div>
            <div className="auth-form-container-login">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="avatar"> <Avatar /> </div>

                    <h1 className="welcome-text">Welcome!</h1>
                    
                    <label htmlFor="email">Email:</label>
                    <input className="input-login" value = {email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />

                    <label htmlFor="password">Password:</label>
                    <input className="input-login" value = {pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="********" id="password" name="password" />
                    
                    <button className="link-btn-recover" onClick={() => props.onFormSwitch('recover')}>Forgot password?</button>

                    <button className="login-btn" type="submit"><b>Login</b></button>
                </form>

                <button className="link-btn-login" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
            </div>
        </div>
    )
}