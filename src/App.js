import './App.css';
import React, { Component } from 'react'
import Navbar from './componements/pages/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Presentation from './componements/pages/presentation';
import Acceuil from './componements/pages/acceuil';
import "./componements/Script/scrollscript.js" ;
import AOS from 'aos';
import 'aos/dist/aos.css';
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
          </Router>
      </div>
    </>
  );
}

export default App;

