import React from 'react'
import laravel from '../img/laravel_e-commerce.PNG'
import '../pagescss/projets.css'
import clicker_js from '../img/clicker_js.PNG'
import portfolio from '../img/portfolio.PNG'


function projets() {
    return (
        <>
            <div className="projects" id="projets">
                
                <section className="section_projects" data-aos="fade-zoom-in" data-aos-delay="50"> 
                    <a href="https://github.com/alxglt/E-commerce-Laravel" target="_blank">
                        <img loading="lazy" src={laravel}  className="img" alt="my e-commerce website"/>
                        <p className="desc_projects">Création d'un site d'e-commerce avec laravel, avec un base de donnée en MySQL.</p>
                        <span className="technos">PHP </span>
                        <span className="technos">Laravel </span>
                        <span className="technos">MySQL </span>
                        <span className="technos">JavaScript </span>
                    </a>
                </section>
                        
                <section className="section_projects" data-aos="fade-zoom-in" data-aos-delay="80">
                    <a href="https://github.com/alxglt/Clicker-Games-JS" target="_blank">
                        <img loading="lazy" src={clicker_js} className="img" alt="my clicker game"/>
                        <p className="desc_projects">Création d'un clicker game sur le thème de notre choix en JavaScript. Utilisation du LocalStorage pour sauvegarder la partie et la reprendre plus tard.</p>
                        <span className="technos"> JavaScript </span>
                    </a>
                </section>

                <section className="section_projects" data-aos="fade-zoom-in" data-aos-delay="500">
                    <a href="https://github.com/alxglt/my_portfolio" target="_blank">
                        <img loading="lazy" src={portfolio} className="img" alt="my portfolio" />
                        <p className="desc_projects"> Le portfolio que vous regardez actuellement est un projet personel fait en reactJS</p>
                        <span className="technos">ReactJS</span>
                    </a>
                </section>

            </div>
              
           
        </>
    )
}

export default projets
