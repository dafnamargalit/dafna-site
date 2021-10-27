import React from "react";
import './About.css';
import Navbar from '../navbar/Navbar';
import A from '../assets/letters/A-Y.svg';
const About = () => {
    return(
        <div className="About">
        <div className='navbar-header'>
            <Navbar/>
        </div>
        <div className='About-Title'>
        <A></A>
        </div>
            About
        </div>
    )
}

export default About;