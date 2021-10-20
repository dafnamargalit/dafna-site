import React, {Component} from 'react';	
import {Link} from 'react-router-dom';
import D from '../assets/letters/D.svg';
import AP from '../assets/letters/A-P.svg';
import F from '../assets/letters/F.svg';
import N from '../assets/letters/N.svg';
import AY from '../assets/letters/A-Y.svg';
import './Home.css';

// import MailchimpSubscribe from "react-mailchimp-subscribe";

export default class Home extends Component{
	constructor(){
		super();
		this.state = {
			modal: false
		}
	}

	openModal = () => {
		this.setState({
			modal: !this.state.modal
		})
		localStorage.setItem('seen', true);
	}


	render(){
		return(
			<div className='Home'>
				<Link to="/dates" style={{textDecoration:'none'}}>
                <img className="letters" id="D" src={D} alt="D"></img>
				</Link>
				<Link to="/about" style={{textDecoration:'none'}}>
                <img className="letters" id="AY" src={AY} alt="A"></img>
				</Link>
				<Link to="/footage" style={{textDecoration:'none'}}>
                <img className="letters" id="F" src={F} alt="F"></img>
				</Link>
				<Link to="/news" style={{textDecoration:'none'}}>
                <img className="letters" id="N" src={N} alt="N"></img>
				</Link>
				<Link to="/ask" style={{textDecoration:'none'}}>
                <img className="letters" id="AP" src={AP} alt="A"></img>
				</Link>
			</div>	
		);
	}
}

