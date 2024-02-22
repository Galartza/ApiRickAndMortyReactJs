// En NavBar.jsx

// NavBar.js
import React, { useState } from 'react';
import { Nav } from '../NavBar/nav-styles';
import { Outlet, Link } from 'react-router-dom';
import Logo from '../Logo/Logo'; // Ajusta la ruta según tu estructura de archivos

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Nav>
      <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
        <Logo />
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
        <ul className={`nav-item ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-link">
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/characters" onClick={toggleMenu}>
              Characters
            </Link>
          </li>
          <li className="nav-link">
            <a href="#about" onClick={toggleMenu}>
              About Me
            </a>
          </li>
        </ul>
      </nav>
      <Outlet />
    </Nav>
  );
};
