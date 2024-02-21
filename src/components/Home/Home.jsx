
import React from 'react';
import ImageL from "../../assets/Rick-and-Morty-Logo.png"
import ImagePortal from "../../assets/portal.png"
import { HomeSection, HomeContainerUno, HomeContainerDos,ContainerIzq, ImgIzq, ImgDer, ContainerDer,  SearchContainer, Group, TextHome } from '../Home/home-styles';


const Home = () => {
  return (
    <>
      <HomeSection id='Home'>
        <HomeContainerUno>
          <ContainerIzq>
            <ImgIzq src= {ImageL} /> 
          </ContainerIzq>
          <ContainerDer>
            <ImgDer src={ImagePortal} />
          </ContainerDer>
        </HomeContainerUno>
        <HomeContainerDos className="home">
          <TextHome>
            Este proyecto utiliza React.js con Vite para un desarrollo eficiente y rápido de aplicaciones web.
            Además, integra la API de Rick and Morty para mostrar dinámicamente información relacionada con la serie.
            La combinación de estas tecnologías permite crear una aplicación web moderna, fluida y llena de contenido emocionante sobre el universo de Rick and Morty.
          </TextHome>
          <SearchContainer>
            <Group>
              <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </svg>
              <input placeholder="Search character" type="search" className="input" />
            </Group>
            <br />
            <div className="button-borders">
              <button className="primary-button"> Search </button>
            </div>
          </SearchContainer>
        </HomeContainerDos>

      </HomeSection>
    </>
  );
}

export default Home;
