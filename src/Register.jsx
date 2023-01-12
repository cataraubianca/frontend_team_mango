import React, { useState } from "react";
import { Title } from "./Title";


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
        <div className="auth-form-container">
            <Title />
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="firstname">First Name:</label>
                <input value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder="First Name" id="firstname" name="firstname" />
                
                <label htmlFor="lastname">Last Name:</label>
                <input value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder="Last Name" id="lastname" name="lastname"/>
                
                <label htmlFor="email">Email:</label>
                <input value = {email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />

                <label htmlFor="password">Password:</label>
                <input value = {pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                
                <label htmlFor="password">Confirm Password:</label>
                <input value = {confirmpass} onChange={(e) => setConfirmPass(e.target.value)} placeholder="********" id="confirmpass" name="confirmpass" />
                
                <button type="submit">Register</button>
            </form>

            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Log in here.</button>
        </div>
    )
}