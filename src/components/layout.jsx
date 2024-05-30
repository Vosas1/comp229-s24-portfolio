import React from 'react'
import Logo from '../assets/logo.JPG';
import { Link } from 'react-router-dom';

export default function Layout(){
    return(
        <>
            <header>
            <img src={Logo} alt="Company Logo" style={{width: '150px', height: 'auto'}} />
            </header>
            
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> | <Link to="/projects">Projects</Link> | <Link to="/services">Services</Link>
            </nav>
            <hr />

        </>
    )
}

