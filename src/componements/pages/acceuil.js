import React from "react";
import '../pagescss/acceuil.css'
import pp from '../img/photo.jpg'

function Acceuil() {
  return (

    <>
        <div className="presentation">
          <div className="intro">
            
            <p className="name">Alexis Gillant</p>
            <p className="job">Développeur Web</p>
          </div>
          <div className="me">
              <img src={pp} alt="profile_picture" className="pp"/>
          </div>
            
        </div>
    </>
    
  );
}

export default Acceuil;