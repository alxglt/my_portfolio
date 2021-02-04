import React from "react";
import '../pagescss/acceuil.css'
import pp from '../img/photo.jpg'

function Acceuil() {
  return (

    <>
        <div className="presentation">

          <div className="intro">
            <p data-aos="fade-right" data-aos-delay="50" className="name">Alexis Gillant</p>
            <p data-aos="fade-right" className="job">Développeur Web</p>
          </div>
          
          <div className="me" data-aos="zoom-out">
              <img src={pp} alt="profile_picture" className="pp"/>
          </div>
            
        </div>
    </>
    
  );
}

export default Acceuil;