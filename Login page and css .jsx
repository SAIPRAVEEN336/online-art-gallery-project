import React from 'react';
import './Login.css';
import { FaUser, FaLock } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>
        <div className="input-group">
          <input type="text" placeholder="Email" />
          <FaUser className="icon" />
        </div>
        <div className="input-group">
          <input type="password" placeholder="Password" />
          <FaLock className="icon" />
        </div>
        <div className="options">
          <label><input type="checkbox" /> Remember me</label>
          <a href="#">Forgot password?</a>
        </div>
        <button className="login-btn">Login</button>
        <p className="register-text">
          Don’t have an account? <a href="#">Signup</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

    (CSS)
/* Background */
.login-page {
  height: 150vh;
  width: 550%;
  background: url('https://wallpapers.com/images/hd/blue-aesthetic-background-t88lgm5k7uuulnw6.jpg') no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Login box */
.login-box {
  background: white;
  backdrop-filter: blur(15px);
  padding: 40px;
  border-radius: 15px;
  text-align: center;
  color: black;
  box-shadow: 0 0 20px #4e4a4a33;
  width: 350px;
}

/* Input fields */
.input-group {
  position: relative;
  margin: 20px 0;
}

.input-group input {
  width: 100%;
  padding: 12px 40px 12px 15px;
  border: 1px solid #ccc;
  border-radius: 30px;
  background: white;
  color: black;
  outline: none;
}

.input-group .icon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #555;
}

/* Options row */
.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin: 15px 0;
}

.options a {
  color: black;
  text-decoration: none;
}

.options label {
  display: flex;
  align-items: center;
  gap: 5px;
}

/* Login Button */
.login-btn {
  width: 100%;
  padding: 12px;
  border: none;
  background: #f0f0f0;
  color: black;
  font-weight: bold;
  border-radius: 30px;
  margin-top: 10px;
  cursor: pointer;
  transition: 0.3s;
}

.login-btn:hover {
  background: #ddd;
}

/* Register Text */
.register-text {
  margin-top: 20px;
  font-size: 14px;
}

.register-text a {
  color: black;
  font-weight: bold;
  text-decoration: none;
}