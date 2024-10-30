// src/components/LoginPage.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./login.css";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login, setToken, setUser } = useAuth(); // Get login, setToken, and setUser from context
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(email, password); // Call login function
    if (success) {
      // Assuming you get user data along with token from your API
      const user = { id: "user-id", name: "User Name", email }; // Replace with actual user data
      setUser(user); // Set user data
      navigate("/profile");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="page-wrapper">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
