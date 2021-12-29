import React from 'react';
import Navbar from '../navbar/Navbar';
import styled from 'styled-components';
import merch from '../assets/images/merch.png';
import Footer from '../footer';
import A from '../assets/letters/A-Y.svg';
import P from '../assets/letters/P-Y.svg';
import R from '../assets/letters/R-Y.svg';
import E from '../assets/letters/E-Y.svg';
import L from '../assets/letters/L-Y.svg';

const ApparelWrap = styled.div`
    height: 100vh;
    width: 100vw;
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
    height: 75px;
    transition: all 0.5s ease 0s;
    // border-bottom: 1px solid #b9c0ff;
    user-select: none;
`

const Letter = styled.img`
    width: 7vh;
    padding: 0.25vh;
    @media (max-width: 400px){
        width: 5vh;
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
    height: 50px;
    @media (max-width: 675px) {
    font-size: 20px;
    }
`

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;

`
const ImageWrap = styled.div`
    width: 50vh;
    @media (max-width: 800px){
        width: 40vh;
    }
`

const TextLink = styled.a`
    color:#ffdd00;
    font-weight: 800;
    text-shadow:  0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
    text-decoration: none;
    &:hover{
        transform: scale(1.1);
    }
`

const End = styled.div` 
    display: none;
    @media (max-width: 800px){
        display: flex;
        align-items: center;
        justify-content: center;
        height: 20vh;
        width: 100vw;
    }
`

const Apparel = () => {
    return(
        <ApparelWrap>
        <NavbarHeader>
            <Navbar/>
        </NavbarHeader>
        <Header>
            <Title>
                <Letter src={A}></Letter>
                <Letter src={P}></Letter>
                <Letter src={P}></Letter>
                <Letter src={A}></Letter>
                <Letter src={R}></Letter>
                <Letter src={E}></Letter>
                <Letter src={L}></Letter>
            </Title>
        </Header>
        <Body>
            <ImageWrap>
           <img width="100%" src={merch} alt=""></img>
           </ImageWrap>
           <TextLink href="https://shop.dafna.rocks">
                VISIT MERCH STORE  <span style={{fontFamily: "sans-serif"}}>&#8594;</span>
            </TextLink>
        </Body>
        <End>
            <Footer></Footer>
        </End>
        </ApparelWrap>
    )
}

export default Apparel;