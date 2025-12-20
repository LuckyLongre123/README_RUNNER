import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };
  
  return (
    <nav className="navbar">
      <div className="nav-brand">HiraLearn</div>
      <div className="nav-links">
        <Link to="/" className={`nav-link ${isActive('/')}`}>
          Home
        </Link>
        <Link to="/quiz" className={`nav-link ${isActive('/quiz')}`}>
          Quiz
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;