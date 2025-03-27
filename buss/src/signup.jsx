import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Navigation hook
import "./signup.css";

const API_URL = "http://localhost:5002/api/auth"; // Backend API URL

const Signup = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false); // ✅ Success message state
  const navigate = useNavigate(); // ✅ Navigation hook

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      if (!response.ok) {
        if (data.msg === "User already exists") {
          throw new Error("User already exists. Please login.");
        }
        throw new Error(data.msg);
      }

      setSuccess(true); // ✅ Show success message
      setTimeout(() => navigate("/login"), 2000); // ✅ Redirect to Login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>Signup</h1>
        {error && <p className="error-text">{error}</p>}
        {success && <p className="success-text">Signup Successful! Redirecting to Login...</p>}
        <form onSubmit={handleSignup}>
          <div className="input-group">
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          </div>
          <button type="submit" className="signup-button">Signup</button>
        </form>
        
        {/* 🔹 Redirect to Login if user already has an account */}
        <p className="toggle-text">
          <span onClick={() => navigate("/login")} className="login-link"> Already have an account?  Login</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;