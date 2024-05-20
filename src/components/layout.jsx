import React from 'react'
import { Link } from 'react-router-dom';

export default function Layout(){
    return(
        <>
            <h1>VikiTech</h1>
            <h2>My Portfolio</h2>
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> | <Link to="/projects">Projects</Link> | <Link to="/services">Services</Link>
            </nav>
            <hr />

        </>
    )
}