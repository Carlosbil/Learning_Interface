import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import NavBar from '../Menu.js';
function HomePage() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="container">
      <NavBar />
      <h1
        className={`welcome-text ${hovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Welcome to this awesome world
      </h1>
      <Link to="/dogNet">
        <button className="futuristic-btn">DogNet</button>
      </Link>
      <Link to="/dogs_vs_cats">
        <button className="futuristic-btn">Dogs Vs Cats</button>
      </Link>
      <Link to="/cifar100">
        <button className="futuristic-btn">What is this ?</button>
      </Link>
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        id="fileInput"
      />
    </div>
  );
}

export default HomePage;
