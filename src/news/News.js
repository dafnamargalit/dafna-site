import React from 'react';
import Navbar from '../navbar/Navbar';
import styled from 'styled-components';
import slide1 from '../assets/images/SLIDE-1.png';
import slide2 from '../assets/images/SLIDE-2.png';
import LeftArrow from '../assets/icons/left-merch-Arrow.svg';
import RightArrow from '../assets/icons/Right-Arrow.svg';

const NewsWrap = styled.div`
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
    flex-direction: row;
    align-items: center;
    justify-content:center;

`
const ImageWrap = styled.div`
    width: 60vw;
`

const TextLink = styled.div`
    color:#ffdd00;
    font-weight: 800;
    text-shadow:  0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
    &:hover{
        transform: scale(1.1);
    }
`

const ArrowWrap = styled.div`
    // padding-left: 2em;
`

const News = () => {
    return(
        <NewsWrap>
        <NavbarHeader>
            <Navbar/>
        </NavbarHeader>
        <Header>
            <Title> News </Title>
        </Header>
        <Body>

            <img width="5%" style={{padding: "2em"}} src={LeftArrow} alt=""></img>
            <ImageWrap>
            <a href="https://shop.dafna.rocks">
           <img width="100%" src={slide1} alt=""></img>
           </a>
           </ImageWrap>
           <img width="5%" style={{padding: "2em"}} src={RightArrow} alt=""></img>

        </Body>
        </NewsWrap>
    )
}

export default News;