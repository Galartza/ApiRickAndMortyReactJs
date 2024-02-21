// En NavBar.jsx

import styled from 'styled-components';

export const Nav = styled.nav `
    .navbar {
        z-index: 1;
        position: fixed;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 4rem;
        padding: 0 2rem;
        background-color: #233d4d;
        -webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
    }

    .menu-icon {
        display: none;
        cursor: pointer;
        font-size: 1.5rem;
        color: #a6cccc;
    }



    @media only screen and (max-width: 768px) {
    .nav-item {
        display: none;
        flex-direction: column;
        gap: 0.5rem;
        width: 10rem;
        height: 10rem;
        text-align: center;
        position: absolute;
        top: 4rem; /* Ajusta la posición vertical según tus necesidades */
        right: 0; /* Coloca el menú en la esquina superior derecha */
        background-color: #233d4d;
    }

    .menu-icon {
        
        display: block;
        cursor: pointer;
        font-size: 1.5rem;
        color: #a6cccc;
    }

    .nav-item.active {
        display: none;
        flex-direction: column;
        gap: 0.5rem;
        width: 100%;
        text-align: center;
    
        
    }
    .nav-item.active .nav-link {
        display: none;
       
    }
}

    .logo {
        font-size: 1.5rem;
        color: #a6cccc;
        -webkit-text-stroke: 0.5px #88e23b;
    }

    .nav-item {
        display: flex;
        list-style: none;
        gap: 1rem;
    }

    .nav-link a {
        text-decoration: none;
        color: #a6cccc;
        font-size: 1.5rem;
        font-family: "Barlow Condensed", sans-serif;
    }

    .nav-link a:hover {
        color: #88e23b;
    }
`;
