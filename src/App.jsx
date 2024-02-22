import React, { useEffect, useState } from 'react';
import '../src/App.css'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from '../src/components/NavBar/NavBar.jsx';
import Home from '../src/components/Home/Home.jsx'
import Characters from "../src/components/Characters/Characters.jsx"
import Footer from '../src/components/Footer/Footer.jsx'

function App() {
  const [characters, setCharacters] = useState([]);

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  const handleRefresh = () => {
    // Obtén 9 personajes aleatorios de la lista completa
    const randomCharacters = characters.sort(() => 0.5 - Math.random()).slice(0, 9);
    // Actualiza el estado local con los personajes aleatorios
    setCharacters(randomCharacters);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="characters" element={<Characters characters={characters} onRefresh={handleRefresh} />} />
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App;
