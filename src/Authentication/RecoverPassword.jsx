import React, { useState } from "react";

export const RecoverPassword = (props) => {
  const [email, setEmail] = useState("");
  const [newPass, setNewPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="welcome-text">Recover your password</h1>

        <label htmlFor="email">Email:</label>
        <input
          className="input-login"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />

        <label htmlFor="password">Password:</label>
        <input
          className="input-login"
          value={newPass}
          onChange={(e) => setNewPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />

        <button className="login-btn" onClick={() => props.onFormSwitch('login')} type="submit">
          <b>Done</b>
        </button>
      </form>
    </div>
  );
};
