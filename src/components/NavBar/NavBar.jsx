// En NavBar.jsx
import React from 'react';
import {Nav, ImagenLogoContainer, ImgLogo } from '../NavBar/nav-styles'; // Eliminar el espacio en blanco al final
import Logo from "../../assets/Rick-and-Morty-Logo.png";
import { Outlet, Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <Nav>
            <nav className='navbar'>
                <ImagenLogoContainer>
                    <ImgLogo src={Logo} alt="Rick & Morty Logo" />
                </ImagenLogoContainer>
                <ul className="nav-item">
                    <li className="nav-link">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/characters">Characters</Link>
                    </li>
                    <li className="nav-link">
                        <a href='#about'>About Me</a>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </Nav>
    )
}

export default NavBar;
