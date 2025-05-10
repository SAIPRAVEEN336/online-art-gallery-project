import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullName = e.target.fullName.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    const confirmPassword = e.target.confirmPassword.value.trim();
    const terms = e.target.terms.checked;

    if (!fullName || !email || !password || !confirmPassword) {
      setError("All fields are required!");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match!");
    } else if (!terms) {
      setError("You must agree to the Terms of Service!");
    } else {
      setError("");
      // Proceed with form submission (API call etc.)
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="container">
      <div className="signup-box">
        {/* Left Side (Image & Text) */}
        <div className="left-panel">
          <div className="overlay"></div>
          <div className="text-content">
            <h2>Where imagination meets the canvas</h2> 
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="right-panel">
          <h2>Registration Form</h2>
          {/* Error Message */}
          {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Full Name:</label>
              <input type="text" name="fullName" placeholder="ex: Lindsey Wilson" />
            </div>

            <div className="input-group">
              <label>Your Email:</label>
              <input type="email" name="email" placeholder="Example@email.com" />
            </div>

            <div className="input-group">
              <label>Password:</label>
              <input type="password" name="password" placeholder="" />
            </div>

            <div className="input-group">
              <label>Confirm Password:</label>
              <input type="password" name="confirmPassword" placeholder="" />
            </div>

            <div className="terms">
              <input type="checkbox" id="terms" name="terms" />
              <label htmlFor="terms">
                By signing up, you agree to the{" "}
                <a href="#">Play Term of Service</a>
              </label>
            </div>

            <button type="submit" className="register-btn">Sign up</button>
          </form>

          {/* Login Link */}
          <p className="login-link">
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

(CSS)
/* Container Styling */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url("https://wallpapers.com/images/hd/beautiful-anime-sunset-sky-rxiu2o0d2wba3sss.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
}

/* Signup box */
.signup-box {
  display: flex;
  background: white;
  border-radius: 12px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  max-width: 750px;
  width: 100%;
  max-height: 90vh;
}

/* Left panel styling */
.left-panel {
  width: 300px;
  background: url("https://www.shutterstock.com/image-photo/art-oil-acrylic-smear-blot-600nw-2290801373.jpg") no-repeat center;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 20px;
  color: white;
}

/* Overlay to darken the image */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

/* Text content on the left */
.text-content {
  position: relative;
  z-index: 2;
}

.text-content h2 {
  font-size: 20px;
  font-weight: bold;
  margin: 0;
}

.text-content p {
  margin: 5px 0;
  font-size: 14px;
}

.price {
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
}

/* Right panel styling */
.right-panel {
  width: 350px;
  padding: 30px;
  overflow-y: auto;
  max-height: 90vh;
}

.right-panel h2 {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 15px;
}

/* Form styling */
.input-group {
  margin-bottom: 12px;
}

.input-group label {
  display: block;
  font-size: 14px;
  color: black; /* Changed from white to black */
  margin-bottom: 5px;
}

/* Update placeholder text color for better contrast */
.input-group input::placeholder {
  color: #555;
}

.input-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
}

/* Terms and conditions */
.terms {
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-bottom: 15px;
  color: black; /* Changed from white to black */
}

.terms input {
  margin-right: 8px;
}

.terms a {
  color: #7c3aed;
  text-decoration: none;
  font-weight: bold;
}

/* Register button */
.register-btn {
  width: 100%;
  background: #7c3aed;
  color: white;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}

.register-btn:hover {
  background: #5b21b6;
}
