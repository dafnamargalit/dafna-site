import React from 'react';
import Navbar from '../navbar/Navbar';
import styled from 'styled-components';
import slide1 from '../assets/images/SLIDE-1.png';
import slide2 from '../assets/images/SLIDE-2.png';
import slide1m from '../assets/images/SLIDE-1-MOBILE.png';
import slide2m from '../assets/images/SLIDE-2-MOBILE.png';
import Slideshow from '../slideshow';
import Footer from '../footer';
import N from '../assets/letters/N.svg';
import E from '../assets/letters/E-G.svg';
import W from '../assets/letters/W-G.svg';
import S from '../assets/letters/S-G.svg';


const images = [{image: slide2, mobile: slide2m, link: 'https://dafna.fanlink.to/WeJumpedTheGun'},{image: slide1, mobile: slide1m, link: 'https://shop.dafna.rocks'}];

const News = () => {
    return(
        <NewsWrap>
        <NavbarHeader>
            <Navbar/>
        </NavbarHeader>
        <Header>
            <Title>  
                <Letter src={N}></Letter>
                <Letter src={E}></Letter>
                <Letter src={W}></Letter>
                <Letter src={S}></Letter>
            </Title>
        </Header>
        <Body>

            
            <ImageWrap>

           <Slideshow slides={images} delay="3500"></Slideshow>

           </ImageWrap>


        </Body>
        <End>
        <Footer></Footer>
        </End>
        </NewsWrap>
    )
}

const NewsWrap = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: scroll;
`
const NavbarHeader = styled.div`
    margin-top: 7vh;
    height: 8vh;
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 10vh;
    margin-bottom: 5vh;
    transition: all 0.5s ease 0s;
    user-select: none;
    @media (max-width: 800px){
        height: 5vh;
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

const Body = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
    @media (max-width: 400px){
        width: 100vw;
    }
`

const End = styled.div`
    display: none;
    @media (max-width: 800px){
        display: flex;
        align-items: center;
        justify-content: center;
        height: 10vh;
        width: 100vw;
    }
`

const ImageWrap = styled.div`
    width: 60vw;
    @media (max-width: 768px){
        width: 63vw;
    }
    @media (max-width: 500px){
        width: 80vw;
    }
    @media (max-width: 400px){
        width: 90vw;
    }
`

const Letter = styled.img`
    width: 7vh;
    padding: 0.25vh;
    @media (max-width: 400px){
        width: 5vh;
    }
`


export default News;