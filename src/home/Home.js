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
			modal: false,
			game: true,
		}
	}

	openModal = () => {
		this.setState({
			modal: !this.state.modal
		})
		localStorage.setItem('seen', true);
	}

	playGame = () => {
		this.setState({
			game: !this.state.game
		})
		localStorage.setItem('played', true);
	}
	render() {
		return (
			<HomeWrap>
				<HomeTop>
					<MailingList onClick={this.openModal}>JOIN MY MAILING LIST</MailingList>
					{/* <Link to="/guess" style={{textDecoration: "none"}}>
						<MailingList>GUESS ALBUM NAME</MailingList>
					</Link> */}
				</HomeTop>
				<HomeMiddle>
					<LettersWrap>
						<Modal onClose={this.openModal} show={this.state.modal}></Modal>
						{/* {(this.state.game === true && localStorage.getItem('played') === null) && 
						<GameModalWrap onClick={this.playGame}>
							<GameModal>
								<h1>Let's play a game...</h1>
								<p>Guess the name of my upcoming album based on scrambled letters.</p>
								<Link to="/guess" style={{textDecoration: "none"}}>
									<BeginButton>
										LET'S PLAY
									</BeginButton>
								</Link>
								<No onClick={this.playGame}>No, I hate games. Take me to the site.</No>
							</GameModal>
						</GameModalWrap>} */}
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
	justify-content: space-evenly;
	width: 100vw;
	@media (max-width: 600px) { 
		flex-direction: column;
	}
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
	transition: transform .2s;
	text-decoration: none;
	margin-top: 5vh;
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

const GameModalWrap = styled.div`
	position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100vw;
    height: 100vh;
	z-index: 1000;
`;

const GameModal = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	justify-content: center;
	background-color: #5e96ea;
	color: white;
	padding: 8vh;
	border-radius: 2em;
	margin: 2vh;
`;

const BeginButton = styled.div`
	padding: 15px 30px 15px 30px;
	background-color: #fff;
	color: #5e96ea;
	border-radius: 1em;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 2vh;

	&:hover{
		background-color: #4673b8;
		color: white;
	}
`;

const No = styled.p`
	cursor: pointer;
	text-decoration: underline;
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