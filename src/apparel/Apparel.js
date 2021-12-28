import React from 'react';
import Navbar from '../navbar/Navbar';
import styled from 'styled-components';
import merch from '../assets/images/merch.png';

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
`

const TextLink = styled.div`
    color:#ffdd00;
    font-weight: 800;
    text-shadow:  0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
    &:hover{
        transform: scale(1.1);
    }
`

const Apparel = () => {
    return(
        <ApparelWrap>
        <NavbarHeader>
            <Navbar/>
        </NavbarHeader>
        <Header>
            <Title> Apparel </Title>
        </Header>
        <Body>
            <ImageWrap>
           <img width="100%" src={merch} alt=""></img>
           </ImageWrap>
           <a href="https://shop.dafna.rocks">
           <TextLink>
                VISIT MERCH STORE  <span style={{fontFamily: "sans-serif"}}>&#8594;</span>
            </TextLink>
            </a>
        </Body>
        </ApparelWrap>
    )
}

export default Apparel;