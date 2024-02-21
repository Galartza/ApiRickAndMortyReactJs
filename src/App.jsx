import React, { useEffect, useState } from 'react';
import '../src/App.css'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from '../src/components/NavBar/NavBar.jsx';
import Home from '../src/components/Home/Home.jsx'
import Characters from "../src/components/Characters/Characters.jsx"
import AboutMe from '../src/components/Footer/Footer.jsx'

function App() {
  const [characters, setCharacters] = useState([]); // Definir el estado characters

  const initialurl = "https://rickandmortyapi.com/api/character";

  const fetchCaracters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.log(error))
  };

  useEffect(() => {
    fetchCaracters(initialurl);
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="characters" element={<Characters characters={characters} />} />
        </Route>
      </Routes>
      <AboutMe />
    </>
  )
}

export default App;
