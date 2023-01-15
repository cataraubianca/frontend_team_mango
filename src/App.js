import React, { useState} from "react";
import logo from './logo.svg';
import './Authentication/Authentication.css';
import {Login} from "./Authentication/Login";
import {Register} from "./Authentication/Register";
import { RecoverPassword } from "./Authentication/RecoverPassword";


function App () {
  const [currentForm, setCurrentForm] = useState('login');
  
  const toggleForm = (forName) => {
    setCurrentForm(forName);
  }

  return (
    <div className="App">
      {
      currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : (currentForm === "register" ? <Register onFormSwitch={toggleForm}/> : <RecoverPassword  onFormSwitch={toggleForm}/>)
      }
    </div>
  );

}

export default App;
