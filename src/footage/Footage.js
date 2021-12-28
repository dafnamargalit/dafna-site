import React from 'react';
import Navbar from '../navbar/Navbar';
import styled from 'styled-components';
import YoutubeEmbed from './YoutubeEmbed';
import frame from '../assets/icons/frame.svg';

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
const Title = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    color: #ffdd00;
    text-align: center;
    font-size: 24px;
    width: 100%;
    justify-content: center;
    height: 50px;
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
        height: 30vh;
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

const TextLink = styled.div`
    color:#ffdd00;
    font-weight: 800;
    text-shadow:  0 0 10px #fff, 0 0 20px #fff, 0 0 30px #ffdd00;
    &:hover{
        transform: scale(1.1);
    }
    margin: 10vh;
    align-items: center;
    justify-content: center;
    display:flex;
`
const Footage = () => {
    return(
        <FootageWrap>
        <NavbarHeader>
            <Navbar/>
        </NavbarHeader>
        <Header>
            <Title> Footage </Title>
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
            <a href="https://www.youtube.com/channel/UCzPtND9EY5MkOepLzllAbiw">
            <TextLink>
                Watch More <span>&#160;</span> <span style={{fontFamily: "sans-serif"}}>&#8594;</span>
            </TextLink>
            </a>
        </Body>
        </FootageWrap>
    )
}

export default Footage;