import React from 'react'
import { Route, Routes } from "react-router-dom";
import About from '../Pages/About/about';
import Contact from '../Pages/Contact/contact';
import Home from '../Pages/Home/home';
import Protfolio from '../Pages/Portfolio/portfolio';
import Services from '../Pages/Service/services';

function MyRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/service' element={<Services />}/>
            <Route path='/portfolio' element={<Protfolio />}/>
            <Route path='/contact' element={<Contact />}/>
        </Routes>
    )
}

export default MyRoutes
