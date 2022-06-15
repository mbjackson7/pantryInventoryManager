import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import db from "../firebase";
  
function Login() {
  const userName = "admin";
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    console.log(userName, userPassword);
    navigate("/home");
  };
  
  return (
    <div className="Login">

        <input 
          className="PinBox"
          type="text"
          placeholder="PIN"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <Link to="/home"><button onClick={submit} className="Button">Submit</button></Link>
    </div>
  );
}
  
export default Login;