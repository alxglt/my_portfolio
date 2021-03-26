import React from 'react';
import '../pagescss/presentation.css' ;
import cv from '../img/CV_Alexis_Gillant.pdf';

function Presentation() {
    return (
        <>
            <div className="presentation_bio" id="presentation">
                <div data-aos="fade-up" className="bio" id="bio">
                    <p className="text_bio">
                    En 2020, j'ai eu mon baccalauréat S, option SVT, spécialité ISN,avec mention.
                    </p>
                    <p className="text_bio">
                    Tout au long du lycée, j'ai pu découvrir l'informatique.
                    Si bien qu'après l'obtention de mon bac, j'ai décidé d'en faire mes études. 
                    </p>
                    <p className="text_bio">
                    L'informatique m'a apporté certaines qualités comme la patience. 
                    En effet, tout ne fonctionne pas toujours du premier coup.
                    Il faut être prêt à passer plusieurs heures sur un problème. Mais plus le problème
                    est compliqué, plus la satisfaction quand tout fonctionne comme prévu est grande.
                    </p>
                    <p className="text_bio">
                    Ou encore savoir être autonome, toutes les réponses à nos questions, à nos problèmes
                    sont sur Internet. La communauté informatique est grande, il suffit de savoir où chercher.
                    </p>
                    <p className="text_bio">
                    Aujourd'hui me voilà à la recherche d'une alternance dans le développement web.
                    </p>
                </div>
            </div>
            <div data-aos="fade-up" className="download_cv">
                <p className="text_dl"> </p>
                <a href={cv} download className="dl_link">
                    Téléchargez mon Cv !
                    <i className="fas fa-file-download"></i>
                </a>
            </div>
        </>
    )
}

export default Presentation
