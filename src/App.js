import './App.css';
import React from 'react'
import Navbar from './componements/pages/navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Presentation from './componements/pages/presentation';
import Acceuil from './componements/pages/acceuil';
import "./componements/Script/scrollscript.js" ;
import AOS from 'aos';
import 'aos/dist/aos.css';
import Projets from './componements/pages/projets';


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

