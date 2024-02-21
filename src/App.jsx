import '../src/App.css'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from '../src/components/NavBar/NavBar.jsx';
import Home from '../src/components/Home/Home.jsx'
import Characters from "../src/components/Characters/Characters.jsx"
import AboutMe from '../src/components/Footer/Footer.jsx'


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

export default App;
