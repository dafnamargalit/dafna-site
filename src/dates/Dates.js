import React from 'react';
import './Dates.css';
import Navbar from '../navbar/Navbar';

const Dates = () => {
    return(
        <div className="Dates">
        <div className='navbar-header'>
            <Navbar/>
        </div>
        <div className='dates-content'>
            Dates
        </div>
        </div>
    )
}

export default Dates;