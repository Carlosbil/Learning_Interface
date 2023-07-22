import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './template.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navBar">
      <button className="menu-btn" onClick={toggleMenu}>
        {isOpen ? 'Close menu' : 'Open menu'}
      </button>
      {isOpen && (
        <div className="nav-links">
          <Link to="/">
            <button className="futuristic-btn">Home</button>
          </Link>
          <Link to="/dogNet">
            <button className="futuristic-btn">Go to DogNet</button>
          </Link>
          <Link to="/dogs_vs_cats">
            <button className="futuristic-btn">Dogs Vs Cats</button>
          </Link>
          <Link to="/cifar100">
            <button className="futuristic-btn">What is this?</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavBar;
