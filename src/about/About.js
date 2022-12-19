import React from 'react';
import Navbar from '../navbar/Navbar';
import styled from 'styled-components';
import AboutPhoto from '../assets/images/dafna-prof.png';
import AboutPhoto2 from '../assets/images/dafna-photo.jpg';
import Footer from '../footer';
import A from '../assets/letters/A-P.svg';
import B from '../assets/letters/B-P.svg';
import O from '../assets/letters/O-P.svg';
import U from '../assets/letters/U-P.svg';
import T from '../assets/letters/T-P.svg';

const About = () => {
    return(
        <AboutWrap>
        <NavbarHeader>
            <Navbar/>
        </NavbarHeader>
        <Body>
            <img width="100%" src={AboutPhoto} alt=""></img>
            <DescriptionWrap>
                <Title>
                    <Letter src={A}></Letter>
                    <SmallerLetter src={B}></SmallerLetter>
                    <Letter src={O}></Letter>
                    <Letter src={U}></Letter>
                    <Letter src={T}></Letter>
                </Title>     
                <Description>
                A 22 year old singer, songwriter and producer from Boulder, Dafna eclectic taste brings forth an exciting combination of sounds. Practicing classical piano since the age of 4, Dafna’s interest in music began early on, and she was 11 years old when she began writing and singing her own songs. 
                It wasn’t until she graduated High School at the age of 17, however, that Dafna began producing and recording her music from her bedroom in her parents basement, which led to the subsequent release of her first single in January 2019, if you’re a dove, a “hypnotic blend of folk and minimalist electronic pop (Amelia Vandergast, A&R Factory). Since then, Dafna has independently released 10 other songs and two albums amassing over one million streams on Spotify alone. 
                While attending University of Colorado, Boulder as an Electrical and Engineering student, Dafna continues to play local shows with her own band, her “quippy sense of humor and powerful vocals” allowing for an exciting and energetic show (Reilly Ernst, Crave The Sound). Notable performances include headlining a sold out show at the Boulder Theatre, headlining the Fox Theatre, playing the main stage at Westword Music Showcase, and singing with Covex on the main stage at Decadence NYE and Red Rocks. 
                (Photos taken by Jivan West)
                </Description>
                <Description>
                Contact: <a href="mailto: mgmt@dafna.rocks" style={{color: "#17246c"}}> mgmt@dafna.rocks</a>
                <br/>
                <br/>
                Bookings: <a href="mailto: bookings@dafna.rocks" style={{color: "#17246c"}}> bookings@dafna.rocks</a>
                </Description>
            </DescriptionWrap>
            <img width="100%" src={AboutPhoto2} alt=""></img>
        </Body>
        <End>
            <Footer></Footer>
        </End>
        </AboutWrap>
    )
}

const AboutWrap = styled.div`
    height: 100vh;
    overflow: scroll;
    width: 100vw;

`
const NavbarHeader = styled.div`
    margin-top: 7vh;
    height: 8vh;
`

const Body = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;
        overflow: scroll;
`

const DescriptionWrap = styled.div`
    color: #17246c;
    background-color: #b6c8e3;
    width: 100%;
`

const Description = styled.div`
    text-align: center;
    padding: 2em;
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
const Letter = styled.img`
    width: 7vh;
    padding: 0.25vh;
    @media (max-width: 400px){
        width: 5vh;
    }
`

const SmallerLetter = styled.img`
    width: 5.5vh;
    padding: 0.25vh;
    @media (max-width: 400px){
        width: 4.5vh;
    }
`

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2vh;
    padding-bottom: 1vh;
`

export default About;