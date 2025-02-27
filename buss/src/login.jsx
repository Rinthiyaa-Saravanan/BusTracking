import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter all required fields.");
      return;
    }
    setError(""); // Clear error if all fields are filled
    alert("Login successful!"); // Replace with actual authentication logic
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <div className="input-group">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error-text">{error}</p>}
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
        <p className="toggle-text" onClick={() => navigate("/signup")}>
          Don't have an account? Sign up
        </p>
      </div>
    </div>
  );
}
