import React from 'react';
import Navbar from '../navbar/Navbar';
import styled from 'styled-components';
import YoutubeEmbed from './YoutubeEmbed';
import frame from '../assets/icons/frame.svg';
import Footer from '../footer';
import F from '../assets/letters/F.svg';
import O from '../assets/letters/O-B.svg';
import T from '../assets/letters/T-B.svg';
import A from '../assets/letters/A-B.svg';
import G from '../assets/letters/G-B.svg';
import E from '../assets/letters/E-B.svg';

const Footage = () => {
    return(
        <FootageWrap>
        <NavbarHeader>
            <Navbar/>
        </NavbarHeader>
        <Header>
            <Title> 
            <Letter src={F}></Letter>
            <Letter src={O}></Letter>
            <Letter src={O}></Letter>
            <Letter src={T}></Letter>
            <Letter src={A}></Letter>
            <Letter src={G}></Letter>
            <Letter src={E}></Letter>
            </Title>
        </Header>
        <Body>
            <TextLink>
            </TextLink>
            <VideoWrap>
                <Frame>
                <img width="100%" src={frame} alt=""></img>
                </Frame>
                <YoutubeEmbed embedId="WGbAhgJ_7lQ"></YoutubeEmbed>
            </VideoWrap>
            <TextLink href="https://youtu.be/x6eaMbT2iCo">
                Watch More <span>&#160;</span> <span style={{fontFamily: "sans-serif"}}>&#8594;</span>
            </TextLink>
        </Body>
        <End>
        <Footer></Footer>
        </End>
        </FootageWrap>
    )
}


const FootageWrap = styled.div`
    height: 100vh;

`
const NavbarHeader = styled.div`
    margin-top: 7vh;
    height: 8vh;
`

const Header = styled.div`
    margin-bottom: 2vh;
`

const End = styled.div`
    display: none;
    @media (max-width: 800px){
        display: flex;
        align-items: center;
        justify-content: center;
        height: 10vh;
    }
`
const Title = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    color: #ffdd00;
    text-align: center;
    font-size: 24px;
    width: 100%;
    justify-content: center;
    height: 75px;
    @media (max-width: 675px) {
    font-size: 20px;
    }
`

const Frame = styled.div`
    position: fixed;
    width: 60vw;
    @media (max-width: 600px){
        width: 100vw;
    }
`
const Body = styled.div`
    height: 70vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    top: 30vh;
    align-items: center;
    justify-content:center;
    @media (max-width: 1200px){
        top: 0;
        height: 50vh;
        display: flex;
        flex-direction: column;
    }
`
const VideoWrap = styled.div`
    display: flex;
    width: 53vw;
    align-items: center;
    justify-content:center;
    box-shadow: 0 0 10px #ffdd00, 0 0 20px #ffdd00, 0 0 30px #ffdd00;
    @media (max-width: 600px){
        width: 90vw;
    }
`;

const TextLink = styled.a`
    color:#ffdd00;
    font-weight: 800;
    text-decoration: none;
    text-shadow:  0 0 10px #fff, 0 0 20px #fff, 0 0 30px #ffdd00;
    &:hover{
        transform: scale(1.1);
    }
    margin: 10vh;
    align-items: center;
    justify-content: center;
    display:flex;
`

const Letter = styled.img`
    width: 7vh;
    padding: 0.25vh;
    @media (max-width: 400px){
        width: 5vh;
    }
`


export default Footage;