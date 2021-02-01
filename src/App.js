import './App.css';
import React from 'react'
import Navbar from './componements/pages/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Presentation from './componements/pages/presentation';
import Footer from './componements/pages/footer';
import Acceuil from './componements/pages/acceuil';


function App() {
  return (

    <>
      <div className="content">
          
          <Router>
            
              <Navbar />
              <Acceuil />
           
            
            
              <Presentation />
            
          </Router>
      </div>
      <Footer/>
    </>

    
    
  );
}

export default App;
