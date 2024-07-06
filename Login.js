import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuth }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Hardcoded credentials
    const validUsername = "admin";
    const validPassword = "password";

    try {
      if (username === validUsername && password === validPassword) {
        // Simulating token response
        const token = "dummytoken123"; // You can replace this with a real token if needed

        localStorage.setItem("token", token);
        setAuth(true);
        navigate("/");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container-login">
      <form className="login-form" onSubmit={handleLogin}>
        <span className="login-form-title">Login</span>
        <div className="wrap-input">
          <input
            className="input"
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <span className="focus-input" data-placeholder="USERNAME"></span>
        </div>
        <div className="wrap-input">
          <input
            className="input"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="PASSWORD"></span>
        </div>
        <button className="btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
