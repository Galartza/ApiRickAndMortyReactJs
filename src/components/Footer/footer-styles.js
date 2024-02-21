import styled from "styled-components";

export const FooterAboutMe = styled.footer`
  position: relative;
  bottom: 0;
  height: 6rem;
  width: 100%;
  background-color: #000;
  text-align: center;
 
  & .text-foot {    
    display: flex;
    justify-content: center;
    align-items: center;
    color: #a6cccc;
    font-size: 20px;
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 400;
    flex-direction: column;
  }

  & .redes {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const SocialIconsContainer = styled.div`
  & a {
    color: white;
    margin: 0 10px; 
    transition: color 0.3s ease-in-out;
  }

  & a:hover {
    color: #88e23b; 
  }
`;
