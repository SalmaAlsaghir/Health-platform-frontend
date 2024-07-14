import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// In Login.jsx or Register.jsx

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation (add more as needed)
    if (!email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      // API call to your registration endpoint
      const response = await fetch("https://your-api-endpoint.com/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Handle successful registration
        const data = await response.json();
        // You might want to redirect to a confirmation page,
        // or directly to the login page:
        navigate("/login");
      } else {
        // Handle registration failure
        console.error("Registration failed");
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("An error occurred during registration. Please try again later.");
    }
  };

  return (
    <div className="register_container">
      <div className="register">
        <h2 className="register__title">New User Registration</h2>
        <form className="register__form" onSubmit={handleSubmit}>
          <div className="register__field">
            <label className="register__label" htmlFor="email">
              Email:
            </label>
            <input
              className="register__input"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="register__field">
            <label className="register__label" htmlFor="password">
              Password:
            </label>
            <input
              className="register__input"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="register__field">
            <label className="register__label" htmlFor="confirmPassword">
              Confirm Password:
            </label>
            <input
              className="register__input"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button className="register__button" type="submit">
            Register
          </button>
        </form>
      </div>
      <div className="register__side-panel"></div>
    </div>
  );
};

export default Register;
