import React, {Component} from 'react';
import styled from 'styled-components';
import github from '../assets/icons/github.svg';
import instagram from '../assets/icons/instagram.svg';
import spotify from '../assets/icons/spotify.svg';
import twitter from '../assets/icons/twitter.svg';
import mailIcon from '../assets/icons/mail.svg';
import youtube from '../assets/icons/youtube.svg';
import Mail from '../mail/Mail';
const FooterWrap = styled.div`
    display: flex;
`
const Modal = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
`
const FooterIcon = styled.img`
    width: 3.5vh;
    margin: .25vh;
    padding: 0.2em;
    transition: transform .2s;
    left: 0vh;
    &:hover{
        -webkit-filter: brightness(70%); 
    }
`
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
        <FooterWrap>
            <a href="https://open.spotify.com/artist/6FR2ARlfDqNU7BMBaWjGZP?si=DSyNj67wTyi1A4G7JZF-0w" style={{textDecoration:'none'}}>
            <FooterIcon src={spotify} alt="spotify"></FooterIcon>
            </a>
            <a href="https://instagram.com/dafnamusic" style={{textDecoration:'none'}}>
            <FooterIcon src={instagram} alt="insta"></FooterIcon>
            </a>
            <a href="https://twitter.com/dafnamusic" style={{textDecoration:'none'}}>
            <FooterIcon src={twitter} alt="twit"></FooterIcon>
            </a>
            <a href="https://github.com/dafnamargalit" style={{textDecoration:'none'}}>
            <FooterIcon src={github} alt="git"></FooterIcon>
            </a>
            <a href="https://www.youtube.com/channel/UCzPtND9EY5MkOepLzllAbiw" style={{textDecoration:'none'}}>
            <FooterIcon src={youtube} alt="yt"></FooterIcon>
            </a>
            {/* <FooterIcon src={mailIcon} onClick={this.openModal} alt="mail"></FooterIcon>
            {this.modal ? (<Modal>
                <Mail onClose={this.openModal} show={this.state.modal}></Mail>
            </Modal>) : <></>} */}
        </FooterWrap>
    )
}
}
