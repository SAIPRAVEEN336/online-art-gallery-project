import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import "./HomePage.css";

const HomePage = () => {
  const [profilePic, setProfilePic] = useState(() => {
    return localStorage.getItem("profilePic") || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
  });
  const fileInputRef = useRef(null);

  const handleProfileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const base64String = reader.result;
        setProfilePic(base64String);
        localStorage.setItem("profilePic", base64String); 
      };
    }
  };

  const handleEditClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="home-page">
      <div className="profile-container">
        <Link to="/dashboard" className="user-icon">
          <img 
            src={profilePic} 
            alt="User Icon" 
            onError={(e) => { e.target.src = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"; }}
          />
        </Link>

        <span className="edit-icon" onClick={handleEditClick}>
          <FaPencilAlt />
          <input
            type="file"
            accept="image/*"
            onChange={handleProfileChange}
            ref={fileInputRef}
            style={{ display: "none" }}
          />
        </span>
      </div>

      <section className="hero">
        <h1>Welcome to the Online Art Gallery</h1>
        <p>Explore unique collections from talented artists worldwide.</p>
        <div className="cta-buttons">
          <Link to="/explore">
            <button className="explore-btn">Explore Art</button>
          </Link>
          <Link to="/signup">
            <button className="signup-btn">Sign Up</button>
          </Link>
          <Link to="/auctioncard">
            <button className="auction-btn">Join an Auction</button>
          </Link>
        </div>
      </section>

      

      <section className="testimonials">
        <h2>What Art Lovers Say</h2>
        <div className="testimonial-item">
          <p>"This gallery is a treasure trove of artistic brilliance!"</p>
          <span>- Art Enthusiast</span>
        </div>
        <div className="testimonial-item">
          <p>"I found the perfect piece for my collection. Highly recommended!"</p>
          <span>- Collector</span>
        </div>
      </section>
    </div>
  );
};
(css)
export default HomePage;

.home-page {
  text-align: center;
  font-family: Arial, sans-serif;
  color: white;
  overflow-x: hidden;
  width: 100vw;
}

.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
  background: url("https://c4.wallpaperflare.com/wallpaper/649/200/63/digital-art-artwork-abstract-wallpaper-thumb.jpg") no-repeat center/cover fixed;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.hero h1 {
  position: relative;
  font-size: 3em;
  font-weight: bold;
  color: white;
  text-shadow: 4px 4px 10px rgba(0, 0, 0, 1);
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 5px;
  z-index: 2;
}

.hero p {
  font-size: 1.2em;
  max-width: 80%;
  background: rgba(120, 113, 113, 0.6);
  padding: 10px;
  border-radius: 5px;
  z-index: 2;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
  z-index: 2;
}

.cta-buttons button {
  padding: 10px 20px;
  font-size: 1em;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.explore-btn {
  background-color: #007bff;
  color: black;
}

.signup-btn {
  background-color: #28a745;
  color: black;
}

.auction-btn {
  background-color: #ffc107;
  color: black;
}

.highlights {
  margin: 0;
  padding: 50px 20px;
  width: 100%; 
  background-color: palevioletred;
}

.highlight-items {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.highlight-item {
  background: rgb(186, 211, 98);
  padding: 20px 20px;
  margin: 5px;
  border-radius: 10px;
  width: 350px;
  text-align: center;
  font-size: 1.1em;
  border: 2px solid rgb(186, 211, 98);
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.highlight-item:hover {
  background-color: #f0d6db;
  transform: scale(1.05);
}

.testimonials {
  background: #806ee9;
  padding: 40px 20px;
  width: 100%;
}

.testimonial-item {
  margin: 20px auto;
  max-width: 800px;
  font-style: italic;
}

body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}


* {
  box-sizing: border-box;
}

.profile-container {
  position: absolute; 
  top: 20px;
  right: 40px;
  display: flex;
  align-items: center;
  z-index: 2;
}

.user-icon {
  width: 50px;
  height: 50px;
  cursor: pointer;
  position: relative;
}

.user-icon img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: white;
  padding: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease-in-out;
}

.user-icon img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}


.edit-icon {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: white;
  color: black;
  border-radius: 50%;
  padding: 5px;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transform: translate(50%, 50%);
}

.edit-icon:hover {
  color: #007bff;
}
