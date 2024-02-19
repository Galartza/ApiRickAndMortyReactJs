import React from 'react'
import { Nav } from '../NavBar/nav-styles.js'

export const NavBar = () => {
    return (
        <Nav>
            <nav className='navbar'>
                <h1 className='logo'>Logo</h1>
                <ul className="nav-item">
                    <li className="nav-link"><a href="">home</a></li>
                    <li className="nav-link"><a href="">character</a></li>
                    <li className="nav-link"><a href="">about me</a></li>
                </ul>
            </nav>
        </Nav>

    )
}

export default Nav;