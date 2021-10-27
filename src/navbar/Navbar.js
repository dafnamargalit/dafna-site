import React from "react";
import {Link} from 'react-router-dom';
import D from '../assets/letters/D.svg';
import AP from '../assets/letters/A-P.svg';
import F from '../assets/letters/F.svg';
import N from '../assets/letters/N.svg';
import AY from '../assets/letters/A-Y.svg';
import homeIcon from '../assets/home.svg';
import './Navbar.css';

const Navbar = () => {

    return(
    <div className='Navbar'>
        <div className='homeWrap'>
        <Link to="/" style={{textDecoration:'none'}}>
        <img className="homeIcon" id="Home" src={homeIcon} alt="Home"></img>
        </Link>
        </div>
        <div className='navWrap'>
        <Link to="/dates" style={{textDecoration:'none'}}>
        <img className="navLetters" id="D" src={D} alt="D"></img>
        </Link>
        <Link to="/about" style={{textDecoration:'none'}}>
        <img className="navLetters" id="AY" src={AY} alt="A"></img>
        </Link>
        <Link to="/footage" style={{textDecoration:'none'}}>
        <img className="navLetters" id="F" src={F} alt="F"></img>
        </Link>
        <Link to="/news" style={{textDecoration:'none'}}>
        <img className="navLetters" id="N" src={N} alt="N"></img>
        </Link>
        <Link to="/ask" style={{textDecoration:'none'}}>
        <img className="navLetters" id="AP" src={AP} alt="A"></img>
        </Link>
        </div>
    </div>	
    )
}

export default Navbar;