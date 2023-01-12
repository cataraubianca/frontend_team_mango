import React, { useState } from "react";
import {ReactComponent as Avatar} from './avatar.svg';
import {ReactComponent as Reading} from './reading.svg';


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmpass, setConfirmPass] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    } 

    return (
        <div className="div-register">
            <div>
                <Reading className="reading"/>
                <h1 className="title">BOOKGRAM</h1>
            </div>
            <div className="auth-form-container-register">
                <form className="register-form" onSubmit={handleSubmit}>
                    <div className="avatar"><Avatar /></div>

                    <h1 className="welcome-text">Join our team!</h1>
                    
                    <label htmlFor="firstname">First Name:</label>
                    <input className="input-register" value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder="First Name" id="firstname" name="firstname" />
                    
                    <label htmlFor="lastname">Last Name:</label>
                    <input className="input-register" value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder="Last Name" id="lastname" name="lastname"/>
                    
                    <label htmlFor="email">Email:</label>
                    <input className="input-register" value = {email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />

                    <label htmlFor="password">Password:</label>
                    <input className="input-register" value = {pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    
                    <label htmlFor="password">Confirm Password:</label>
                    <input className="input-register" value = {confirmpass} onChange={(e) => setConfirmPass(e.target.value)} placeholder="********" id="confirmpass" name="confirmpass" />
                    
                    <button className="register-btn" type="submit"><b>Register</b></button>
                </form>

                <button className="link-btn-register" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
            </div>
        </div>
    )
}