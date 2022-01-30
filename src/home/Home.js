import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import D from '../assets/letters/D.svg';
import AP from '../assets/letters/A-P.svg';
import F from '../assets/letters/F.svg';
import N from '../assets/letters/N.svg';
import AY from '../assets/letters/A-Y.svg';
import Mail from '../mail/Mail';
import Footer from '../footer';
import styled from 'styled-components';

export default class Home extends Component {
	constructor() {
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


	render() {
		return (
			<HomeWrap>
				<HomeTop>
					<MailingList onClick={this.openModal}>JOIN MY MAILING LIST</MailingList>
				</HomeTop>
				<HomeMiddle>
					<LettersWrap>
						<Modal onClose={this.openModal} show={this.state.modal}></Modal>
						<Link to="/dates" style={{ textDecoration: 'none' }}>
							<Letters src={D} alt="D" />
						</Link>
						<Link to="/apparel" style={{ textDecoration: 'none' }}>
							<Letters src={AY} alt="A"></Letters>
						</Link>
						<Link to="/footage" style={{ textDecoration: 'none' }}>
							<Letters src={F} alt="F"></Letters>
						</Link>
						<Link to="/news" style={{ textDecoration: 'none' }}>
							<Letters src={N} alt="N"></Letters>
						</Link>
						<Link to="/about" style={{ textDecoration: 'none' }}>
							<Letters src={AP} alt="A"></Letters>
						</Link>
					</LettersWrap>
					<LetterClick>(CLICK ON A LETTER)</LetterClick>
				</HomeMiddle>

				<HomeBottom>
					<Footer />
				</HomeBottom>
			</HomeWrap>
		);
	}
}

const HomeWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 100vh;
`;

const HomeTop = styled.div`
	display:flex;
	align-items: center;
	justify-content: center;
`;

const HomeMiddle = styled.div`
	height: 60vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const HomeBottom = styled.div`
	top: 60vh;
`;

const MailingList = styled.p`
	will-change: transform;
	color:#ffdd00;
	text-shadow:  0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
	font-weight: 800;

	&:hover{
		transform: scale(1.1);
	}
`;

const LettersWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Modal = styled(Mail)`

`;

const LetterClick = styled.p`
	will-change: transform;
	color:#ffdd00;
	text-shadow:  0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
	font-weight: 800;
`;

const Letters = styled.img`
	will-change: transform;
	z-index: 1000;
	width: 17vh;
	padding: 0.5em;
	transition: transform .2s;

	&:hover{
		transform: scale(1.2);
	}

	@media (max-width: 1024px) { 
		width: 6vh;
		padding: .2em;
	}
`;