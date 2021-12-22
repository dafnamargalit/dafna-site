import React from 'react';
import Navbar from '../navbar/Navbar';
import styled from 'styled-components';
import AboutPhoto from '../assets/images/dafna-prof.png';
import AboutPhoto2 from '../assets/images/always-a-dream-film.png';
const AboutWrap = styled.div`
    height: 100vh;

`

const NavbarHeader = styled.div`
    margin-top: 7vh;
    height: 8vh;
`

const ImageWrap = styled.div`
    height: 100vh;
    left: 0;
    position: fixed;
`
const ImageWrap2 = styled.div`
    left: 50;
    bottom: 0;
    
    position: fixed;
`
const Body = styled.div`
    display: flex;
    flex-direction: row;
`

const Description = styled.div`
    color: white;
`

const About = () => {
    return(
        <AboutWrap>
        <NavbarHeader>
            <Navbar/>
        </NavbarHeader>
        <Body>
        <ImageWrap>
            <img width="600px" src={AboutPhoto} alt=""></img>
        </ImageWrap>
        <ImageWrap2>
        <img width="600px" src={AboutPhoto2} alt=""></img>
        </ImageWrap2>
        <Description>
            Dafna is 21
        </Description>
        </Body>
        </AboutWrap>
    )
}

export default About;