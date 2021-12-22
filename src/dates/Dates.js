import React from 'react';
import Navbar from '../navbar/Navbar';
import styled from 'styled-components';


const DatesWrap = styled.div`
    height: 100vh;
`

const NavbarHeader = styled.div`
    margin-top: 7vh;
    height: 8vh;
`

const Content = styled.div`
    color: white;
    background-color: #302f7c8c;
    display: flex;
    flex-direction: column;
    // margin-top: 10vh;
    height: 85vh;
    width: 100vw;
    border-top-left-radius: 3em;
    border-top-right-radius: 3em;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 75px;
    transition: all 0.5s ease 0s;
    border-bottom: 1px solid #b9c0ff;
    user-select: none;
`

const Body = styled.div`
    overflow: scroll;
`
const Title = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    color: #b9c0ff;
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
    color: #b9c0ff;
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
    color: #b9c0ff;
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
    color: #b9c0ff;
    text-align: center;
    font-size: 20px;
    @media (max-width: 675px) {
    font-size: 20px;
    }
`
const TicketButton = styled.div`
    background-color: #b9c0ff;
    color: black;
    padding: 10px;
    margin: 1em;
    width: 10em;
    border-radius: .5em;
    text-align: center;
    cursor:pointer;
    &:hover {
        background-color: #c0c0c0;
    }
`

const ListItem = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(3, 1fr); 
    border-bottom: 1px solid #a1a6db;
    justify-content: space-evenly;
    justify-items: center;
    align-content: space-evenly;
    align-items: center;
    @media (max-width: 600px){
    display: flex;
    grid-gap: 0;
    flex-direction: column;
    text-align: center;
    }
`

const Section = styled.div`
    @media (max-width: 600px){
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
    align-items: center;
    justify-content: center;
    padding: 1em;
`

const shows = [
// {
//     title: 'Dafna at Larimer Lounge',
//     date: 'Dec 11th 2021',
//     location: 'Denver, CO',
//     link: 'https://www.etix.com/ticket/p/5397009/dafna-wmellowpunk-presented-by-kgnu-denver-larimer-lounge?partner_id=240'
// },
]
const Dates = () => {
    return(
        <DatesWrap>
        <NavbarHeader>
            <Navbar/>
        </NavbarHeader>
        <Content>
            <Header>
                <Title> Dates </Title>
            </Header>
            <Body>
            {(shows.length > 0) ? shows.map((show, i) => (
                    <ListItem key={i}>
                        <Section>
                            <ShowDate>{show.date}</ShowDate>
                            <ShowTitle>{show.title}</ShowTitle>
                        </Section>
                        <ShowLocation>{show.location}</ShowLocation>
                        <a href={show.link} style={{textDecoration: "none"}}>
                            <TicketButton>GET TICKETS</TicketButton>
                        </a>
                    </ListItem>
            ))
            :
            (
                <Nothing>
                <ShowLocation> No Upcoming Tour Dates :-( </ShowLocation>
                </Nothing>
            )
        }
          </Body>
        </Content>
        </DatesWrap>
    )
}

export default Dates;