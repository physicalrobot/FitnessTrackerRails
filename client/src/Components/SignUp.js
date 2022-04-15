
import React, { useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import Home from "./Home";


function SignUp({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  let navigate = useNavigate();


  function handleSubmit(e) {

    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    })

   navigate("/")
    
  }
    

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h1 className='signuptitletext'>Sign Up</h1>

        <div className="signupstuff">
        <h1 id="username">Username</h1>
        <input
          type="text"
          className="username"
          id="usernametextbox"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <h1 id="password">Password</h1>
        <input
          type="password"
          id="passwordtextbox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <h1
        className="passwordconfirmation" htmlFor="password">Password Confirmation</h1>
        <input
          type="password"
          id="passwordconfirmationtextbox"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        </div>
        <button className='signbutt' id='signsignup' type="submit">Sign Up</button>

        <Link to="/login"><button className='loginbutt' id='signlogin'>Login</button></Link>
      </form>

  
    </div>
  );
}


export default SignUp;
