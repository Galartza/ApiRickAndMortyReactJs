import styled from "styled-components";

export const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialIconLink = styled.a`
font-size: 1.5rem;
  color: #f8f9fa;
  margin: .5rem;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #70e000; // Cambia el color al hacer hover
  }
`;