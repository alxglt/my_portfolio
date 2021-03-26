import './App.css';
import React from 'react'
import Navbar from './components/pages/navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Presentation from './components/pages/presentation';
import Acceuil from './components/pages/acceuil';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Projets from './components/pages/projets';

AOS.init({
  delay: 300,
});

function App()  {
  return (
    <>
      <div className="content" id="bio">
        <Router>
            <Navbar />
            <Acceuil />
            <Presentation />
            <Projets />
        </Router>
      </div>
    </>
  );
}

export default App;