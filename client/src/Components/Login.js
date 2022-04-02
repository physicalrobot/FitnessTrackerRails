import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';


function Login({ user,setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();

  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user))
          navigate ("/")
        }else{
          console.log("username wrong")
        }
      });
    }
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          
          <h1 className = "logintitletext">Login</h1>
          <div className = "loginstuff">
          <h1 
                      id="username"

         >Username</h1>
          <input
            type="text"
            id="usernametextbox"
            className="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          </div>
          <div className = "passwordstuff">
          <h1 htmlFor="password" id='password'>Password</h1>
          <input
            type="password"
            id="passwordtextbox"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /></div>
          <button className = "otherloginbutton" type="submit">Login</button>
        </form>
      </div>
    );
  }
  
  export default Login;
  