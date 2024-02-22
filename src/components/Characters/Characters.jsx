import React, { useState, useEffect, useRef } from 'react';
import { CharacterSection, ContainerButtonRefresh } from './characters-styles';

const Characters = ({ characters, onRefresh }) => {
  const [displayedCharacters, setDisplayedCharacters] = useState([]);
  const characterContainerRef = useRef(null);

  useEffect(() => {
    setDisplayedCharacters(characters.slice(0, 9));

    if (characterContainerRef.current) {
      characterContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [characters]);

  return (
    <>
      <CharacterSection ref={characterContainerRef}>
        <div className="character">
          {displayedCharacters.map(character => (
            <div key={character.id} className="character-card">
              <img src={character.image} alt={character.name} />
              <p>{character.name}</p>
            </div>
          ))}
        </div>
        <ContainerButtonRefresh>
          <div className="button-borders">
            <button className="primary-button" onClick={(e) => {
              e.preventDefault();
              onRefresh();
            }}>
              Refresh
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-refresh" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
              </svg>
              </button>
          </div>
        </ContainerButtonRefresh>
      </CharacterSection>
    </>
  );
};

export default Characters;