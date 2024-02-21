import styled from 'styled-components'

export const ImagenLogoContainer = styled.div`
    height: 4rem;
`;

export const ImgLogo = styled.img`
    height: 4rem;
`;

export const Nav = styled.nav `
    .navbar {
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
    & .logo {
        font-size: 2rem;
        color: #a6cccc;
        -webkit-text-stroke: .5px #88e23b;
    }
    &  .nav-item {
        display: flex;
        list-style: none;
        gap: 1rem;
    }
    & .nav-link a {
        text-decoration: none;
        color: #a6cccc;
        font-size: 1.5rem;
        font-family: "Barlow Condensed", sans-serif;
    }
    & .nav-link a:hover {
        color: #88e23b;
    }
`;