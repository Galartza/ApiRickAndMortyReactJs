import React, { useState, useEffect } from 'react';
import { CharacterSection, ContainerCharacter, ContainerButtonRefresh } from './characters-styles';

const Characters = ({ characters, onRefresh }) => {
  // Utiliza un estado local para almacenar los personajes que se mostrarán
  const [displayedCharacters, setDisplayedCharacters] = useState([]);

  useEffect(() => {
    // Muestra solo los primeros 9 personajes al principio
    setDisplayedCharacters(characters.slice(0, 9));
  }, [characters]);

  return (
    <>
      <CharacterSection>
        <h1>personajes</h1>
        <ContainerCharacter>
          <div className="character">
           

            {/* Muestra los personajes en cards */}
            {displayedCharacters.map(character => (
              <div key={character.id} className="character-card">
                {/* Aquí deberías mostrar la información de cada personaje */}
                {/* Por ejemplo: */}
                <img src={character.image} alt={character.name} />
                <p>{character.name}</p>
              </div>
            ))}
          </div>
          <ContainerButtonRefresh>
          <div className="button-borders">
                <button className="primary-button" onClick={() => onRefresh()}>
                  Refresh
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-refresh" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                    <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                  </svg>
                </button>
            </div>
          </ContainerButtonRefresh>
            
        </ContainerCharacter>
      </CharacterSection>
    </>
  );
};

export default Characters;
