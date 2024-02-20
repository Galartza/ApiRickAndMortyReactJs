import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Characters from './components/Characters/Characters'
import AboutMe from './components/AboutMe/AboutMe'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="characters" element={<Characters />} />
        </Route>
      </Routes>

    <AboutMe/>

    </>
  )
}

export default App
