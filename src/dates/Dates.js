import React from 'react';
import Navbar from '../navbar/Navbar';
import styled from 'styled-components';
import D from '../assets/letters/D.svg';
import A from '../assets/letters/A-P.svg';
import T from '../assets/letters/T-P.svg';
import E from '../assets/letters/E-P.svg';
import S from '../assets/letters/S-P.svg';
import Footer from '../footer';


const shows = [
    {
        title: 'Dafna at City Gates',
        date: 'July 9th 2022',
        location: 'Denver, CO',
        link: 'https://www.axs.com/events/427759/city-gates-still-woozy-goth-babe-hippo-campus-tickets'
    },
    {
        title: 'Dafna at Underground Music Showcase',
        date: 'July 29th 2022',
        location: 'Denver, CO',
        link: 'https://www.undergroundmusicshowcase.com/'
    },
]
const Dates = () => {
    return (
        <DatesWrap>
            <NavbarHeader>
                <Navbar />
            </NavbarHeader>
            <Content>
                <Header>
                    <Title>
                        <Letter src={D}></Letter>
                        <Letter src={A}></Letter>
                        <Letter src={T}></Letter>
                        <Letter src={E}></Letter>
                        <Letter src={S}></Letter>
                    </Title>
                </Header>
                <Body>
                    {(shows.length > 0) ? shows.map((show, i) => (
                        <ListItem key={i}>
                            <Section>
                                <ShowDate>{show.date}</ShowDate>
                                <ShowTitle>{show.title}</ShowTitle>
                            </Section>
                            <ShowLocation>{show.location}</ShowLocation>
                            <TicketButton href={show.link}>
                                GET TICKETS <span style={{ fontFamily: "sans-serif" }}>&#8594;</span>
                            </TicketButton>
                        </ListItem>
                    ))
                        :
                        (
                            <Nothing>
                                <ShowLocation> No Upcoming Tour Dates :-( </ShowLocation>
                                <ShowLocation>Book me:</ShowLocation>
                                <ShowLocation><a href="mailto: bookings@dafna.rocks" style={{ color: "#ffdd00" }}> bookings@dafna.rocks</a></ShowLocation>
                            </Nothing>
                        )
                    }
                </Body>
            </Content>
            <End>
                <Footer></Footer>
            </End>
        </DatesWrap>
    )
}

const DatesWrap = styled.div`
    height: 100vh;
`

const Letter = styled.img`
    width: 7vh;
    padding: 0.25vh;
`

const NavbarHeader = styled.div`
    margin-top: 7vh;
    height: 8vh;
`

const Content = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    width: 100vw;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 15vh;
    transition: all 0.5s ease 0s;
    user-select: none;
`

const Body = styled.div`
    overflow: scroll;
    height: 50vh;
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

const ShowTitle = styled.div`
    display: flex;
    align-items: center;
    font-weight: 500;
    color: #ffdd00;
    text-align: center;
    font-size: 20px;
    @media (max-width: 675px) {
    font-size: 20px;
    }
`

const ShowDate = styled.div`
    display: flex;
    margin-top: .5em;
    align-items: center;
    font-weight: 800;
    color: #ffdd00;
    text-align: center;
    font-size: 20px;
    @media (max-width: 675px) {
    font-size: 20px;
    }
`

const ShowLocation = styled.div`
    display: flex;
    align-items: center;
    font-weight: 300;
    font-style: italic;
    color: #ffdd00;
    text-align: center;
    font-size: 20px;
    @media (max-width: 675px) {
    font-size: 20px;
    }
`
const TicketButton = styled.a`
    text-shadow:  0 0 10px #fff, 0 0 20px #fff, 0 0 30px #ffdd00;
    color: #ffdd00;
    font-weight: 800;
    padding: 10px;
    margin: 1em;
    width: 10em;
    border-radius: .5em;
    text-align: center;
    cursor:pointer;
    &:hover {
        transform: scale(1.1);
    }
`

const ListItem = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(3, 1fr); 
    justify-content: space-evenly;
    justify-items: center;
    align-content: space-evenly;
    align-items: center;
    @media (max-width: 800px){
    display: flex;
    grid-gap: 0;
    flex-direction: column;
    text-align: center;
    }
`

const Section = styled.div`
    @media (max-width: 800px){
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        justify-items: center;
        align-content: space-evenly;
        align-items: center;
    }
`

const Nothing = styled.div`
    display: flex;  
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1em;
    height: 10vh;
`

const End = styled.div`
    display: none;
    @media (max-width: 800px){
        display: flex;
        align-items: center;
        justify-content: center;
        height: 5vh;
        width: 100vw;
    }
`


export default Dates;