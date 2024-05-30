import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/home.jsx';
import ContactMe from './components/contactMe.jsx';
import AboutMe from './components/aboutMe.jsx';
import Projects from './components/projects.jsx';
import Services from './components/services.jsx';
import Layout from './components/layout.jsx';








const MainRouter = () => {
    return <div>
        <Layout/>
        
        <Routes>
            <Route path="" element={<Home/>} />
            <Route path="/about" element={<AboutMe/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/contact" element={<ContactMe/>} />
            
        </Routes>
        
    </div>
}


export default MainRouter;