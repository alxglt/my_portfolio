import React  from 'react'
import { Link } from 'react-router-dom'
import '../pagescss/navbar.css'

function navbar() {
    return (
        <>

        <header className="navbar">

            <div className="navbar-container">
                
                <a href='#presentation' className='navbar-text'>
                <i className="far fa-user-circle"> </i> Présentation 
                </a>

                <a href='#test' className='navbar-text'>
                <i className="fas fa-project-diagram"> </i> Projets 
                </a>

                <a href='#test' className='navbar-text'>
                <i className="far fa-id-card"> </i> Contact 
                </a>

                

            </div>

        </header>


        </>
    )
}

export default navbar
