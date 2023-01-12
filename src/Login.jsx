import React, { useState } from "react";
import { Title } from "./Title";
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
        <Reading className="reading"/>
        <div className="auth-form-container">
            <title className="title-login">Log In</title>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="avatar"> <Avatar /> </div>
                

                <h1>Welcome!</h1>
                
                <label htmlFor="email">Email:</label>
                <input value = {email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />

                <label htmlFor="password">Password:</label>
                <input value = {pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="********" id="password" name="password" />
                
                <button className="login-btn" type="submit"><b>Login</b></button>
            </form>

            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
        </div>
    )
}