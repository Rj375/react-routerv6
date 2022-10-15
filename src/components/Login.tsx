import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("login", "true");
    navigate("/");
  };

  return (
    <div>
      <h1>Hi, Iam Login Page</h1>
      Username:- <input type="text" placeholder="Username" /> <br />
      Password:- <input type="password" placeholder="Password" /> <br />
      <button onClick={() => handleClick()}>Login</button>
    </div>
  );
};

export default Login;
