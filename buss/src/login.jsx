import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const API_URL = "http://localhost:5002/api/auth";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.msg || "Incorrect email or password.");
      }

      localStorage.setItem("token", data.token);
      setSuccess(true);
      setTimeout(() => navigate("/"), 1);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>

        {error && <p className="error-text">{error}</p>}
        {success && <p className="success-text">Login Successful!...</p>}

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-button">Login</button>
        </form>

        <p className="toggle-text" onClick={() => navigate("/signup")}>
          Don't have an account? <span className="signup-link">Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
