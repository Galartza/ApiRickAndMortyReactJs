import React from 'react'
import { Nav } from '../NavBar/nav-styles.js'
import { Outlet, Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <Nav>
            <nav className='navbar'>
                <h1 className='logo'>Rick & Morty</h1>
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
            <Outlet/>
        </Nav>
    )
}

export default NavBar;
