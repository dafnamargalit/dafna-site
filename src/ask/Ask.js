import React from 'react';
import Navbar from '../navbar/Navbar';
import styled from 'styled-components';
import AskPhoto from '../assets/images/dafna-prof.png';
import AskPhoto2 from '../assets/images/dafna-photo.jpg';

const AskWrap = styled.div`
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
const Ask = () => {
    return(
        <AskWrap>
        <NavbarHeader>
            <Navbar/>
        </NavbarHeader>
        <Body>
            <img width="100%" src={AskPhoto} alt=""></img>
            <DescriptionWrap>
                <Description>
                A 21 year old singer, songwriter and producer from Boulder, Dafna eclectic taste brings forth an exciting combination of sounds. Practicing classical piano since the age of 4, Dafna’s interest in music began early on, and she was 11 years old when she began writing and singing her own songs. 
                It wasn’t until she graduated High School at the age of 17, however, that Dafna began producing and recording her music from her bedroom in her parents basement, which led to the subsequent release of her first single in January 2019, if you’re a dove, a “hypnotic blend of folk and minimalist electronic pop (Amelia Vandergast, A&R Factory). Since then, Dafna has independently released 10 other songs and two albums amassing over one million streams on Spotify alone. 
                While attending University of Colorado, Boulder as an Electrical and Engineering student, Dafna continues to play local shows with her own band, her “quippy sense of humor and powerful vocals” allowing for an exciting and energetic show (Reilly Ernst, Crave The Sound). Notable performances include headlining a sold out show at the Boulder Theatre, headlining the Fox Theatre, playing the main stage at Westword Music Showcase, and singing with Covex on the main stage at Decadence NYE and Red Rocks. 
                (Photos taken by Jivan West)
                </Description>
            </DescriptionWrap>
            <img width="100%" src={AskPhoto2} alt=""></img>
        </Body>
        </AskWrap>
    )
}

export default Ask;