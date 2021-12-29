import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import github from '../assets/icons/github.svg';
import instagram from '../assets/icons/instagram.svg';
import spotify from '../assets/icons/spotify.svg';
import twitter from '../assets/icons/twitter.svg';
import mail from '../assets/icons/mail.svg';
import youtube from '../assets/icons/youtube.svg';

const FooterWrap = styled.div`
    display: flex;
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
const Footer = () => {

    return(
        <FooterWrap>
            <Link to="https://open.spotify.com/artist/6FR2ARlfDqNU7BMBaWjGZP?si=DSyNj67wTyi1A4G7JZF-0w" style={{textDecoration:'none'}}>
            <FooterIcon src={spotify} alt="spotify"></FooterIcon>
            </Link>
            <Link to="https://instagram.com/dafnamusic" style={{textDecoration:'none'}}>
            <FooterIcon src={instagram} alt="insta"></FooterIcon>
            </Link>
            <Link to="https://twitter.com/dafnamusic" style={{textDecoration:'none'}}>
            <FooterIcon src={twitter} alt="twit"></FooterIcon>
            </Link>
            <Link to="https://github.com/dafnamargalit" style={{textDecoration:'none'}}>
            <FooterIcon src={github} alt="git"></FooterIcon>
            </Link>
            <Link to="https://www.youtube.com/channel/UCzPtND9EY5MkOepLzllAbiw" style={{textDecoration:'none'}}>
            <FooterIcon src={youtube} alt="yt"></FooterIcon>
            </Link>
            <Link to="/mailing-list" style={{textDecoration:'none'}}>
            <FooterIcon src={mail} alt="mail"></FooterIcon>
            </Link>
        </FooterWrap>
    )
}

export default Footer;