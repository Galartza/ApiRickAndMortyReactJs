import styled from 'styled-components'


export const Nav = styled.nav `
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 4rem;
        padding: 0 2rem;
        background-color: #233d4d;
    }
    &  .nav-item {
        display: flex;
        list-style: none;
        gap: 1rem;
    }
    & .nav-link a {
        text-decoration: none;
    }
`;