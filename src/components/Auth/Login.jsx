import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginimage from "../../assets/loginpattern.webp";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation (add more as needed)
    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    try {
      // API call to your authentication endpoint
      const response = await fetch("https://your-api-endpoint.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Handle successful login
        const data = await response.json();
        // Store authentication token (if provided by API)
        localStorage.setItem("authToken", data.token);
        navigate("/dashboard"); // Redirect to dashboard
      } else {
        // Handle login failure
        console.error("Login failed");
        alert("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login. Please try again later.");
    }
  };

  return (
    <div className="login-container">
      <div className="login">
        <h2 className="login__title">Login</h2>
        <form className="login__form" onSubmit={handleSubmit}>
          <div className="login__field">
            <label className="login__label" htmlFor="email">
              Email:
            </label>
            <input
              className="login__input"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="login__field">
            <label className="login__label" htmlFor="password">
              Password:
            </label>
            <input
              className="login__input"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="login__button" type="submit">
            Login
          </button>
        </form>
        <div className="login__footer">
          <a href="#">Forgot your password?</a> |{" "}
          <a href="#">Create an account</a>
        </div>
      </div>
      <div className="login__side-panel"></div>
    </div>
  );
};

export default Login;
