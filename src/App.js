import React, { useState} from "react";
import logo from './logo.svg';
import './App.css';
import {Login} from "./Login";
import {Register} from "./Register";
import { RecoverPassword } from "./RecoverPassword";

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
