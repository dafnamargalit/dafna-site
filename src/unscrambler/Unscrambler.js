import React from 'react';
import styled from 'styled-components';
import Box from './box';
import Letter from './letter';
import { Link } from 'react-router-dom';
import tracklist from '../assets/images/tracklist.png';

const Letters = ['I', 'E', 'T', 'W', 'S', 'A', 'N', 'H', 'H', 'Y', 'W', 'W', 'I', 'O', 'U'];

export default class Unscrambler extends React.Component {
    constructor(props) {
        super(props);
        this.state = { correct: 0, winner: false, reveal: false }
    };

    componentDidMount() {
       const img = new Image();
       img.src = tracklist;
    }

    reset = () => {
        window.location.reload(false);
    }

    revealTracklist = () => {
        this.setState({ reveal: !this.state.reveal });
    }
    correctAnswer = () => {
        this.setState({ correct: this.state.correct + 1 });
        if (this.state.correct === 15) {
            setTimeout(() => { this.setState({ winner: true }) }, 0);
        }
    }

    wrongAnswer = () => {
        if (this.state.correct > 0) {
            this.setState({ correct: this.state.correct - 1 });
        }
        else {
            this.setState({ correct: 0 });
        }
    }

    render() {
        return (
            <UnscramblerWrap>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Refresh>
                        BACK TO WEBSITE
                    </Refresh>
                </Link>
                {this.state.reveal && <ImageWrap onClick={this.revealTracklist}>
                    <Tracklist src={tracklist} alt="tracklist" />
                </ImageWrap>}
                <h1>guess the album name</h1>
                <p>(can't move once dropped)</p>
                <LetterRow>
                    <Box id="box-1" className="box" name="W" dropLimit={true} correctAnswer={this.correctAnswer} wrongAnswer={this.wrongAnswer} targetKey="letter" />
                    <Box id="box-2" className="box" name="H" dropLimit={true} correctAnswer={this.correctAnswer} wrongAnswer={this.wrongAnswer} targetKey="letter" />
                    <Box id="box-3" className="box" name="E" dropLimit={true} correctAnswer={this.correctAnswer} wrongAnswer={this.wrongAnswer} targetKey="letter" />
                    <Box id="box-4" className="box" name="N" dropLimit={true} correctAnswer={this.correctAnswer} wrongAnswer={this.wrongAnswer} targetKey="letter" />
                </LetterRow>
                <LetterRow>
                    <Box id="box-5" className="box" name="I" dropLimit={true} correctAnswer={this.correctAnswer} wrongAnswer={this.wrongAnswer} targetKey="letter" />
                </LetterRow>
                <LetterRow>
                    <Box id="box-6" className="box" name="W" dropLimit={true} correctAnswer={this.correctAnswer} wrongAnswer={this.wrongAnswer} targetKey="letter" />
                    <Box id="box-7" className="box" name="A" dropLimit={true} correctAnswer={this.correctAnswer} wrongAnswer={this.wrongAnswer} targetKey="letter" />
                    <Box id="box-8" className="box" name="S" dropLimit={true} correctAnswer={this.correctAnswer} wrongAnswer={this.wrongAnswer} targetKey="letter" />
                </LetterRow>
                <LetterRow>
                    <Box id="box-9" className="box" name="W" dropLimit={true} correctAnswer={this.correctAnswer} wrongAnswer={this.wrongAnswer} targetKey="letter" />
                    <Box id="box-10" className="box" name="I" dropLimit={true} correctAnswer={this.correctAnswer} wrongAnswer={this.wrongAnswer} targetKey="letter" />
                    <Box id="box-11" className="box" name="T" dropLimit={true} correctAnswer={this.correctAnswer} wrongAnswer={this.wrongAnswer} targetKey="letter" />
                    <Box id="box-12" className="box" name="H" dropLimit={true} correctAnswer={this.correctAnswer} wrongAnswer={this.wrongAnswer} targetKey="letter" />
                </LetterRow>
                <LetterRow>
                    <Box id="box-13" className="box" name="Y" dropLimit={true} correctAnswer={this.correctAnswer} wrongAnswer={this.wrongAnswer} targetKey="letter" />
                    <Box id="box-14" className="box" name="O" dropLimit={true} correctAnswer={this.correctAnswer} wrongAnswer={this.wrongAnswer} targetKey="letter" />
                    <Box id="box-15" className="box" name="U" dropLimit={true} correctAnswer={this.correctAnswer} wrongAnswer={this.wrongAnswer} targetKey="letter" />
                </LetterRow>
                {this.state.winner === false && <Box id="letter-box" name="drop-box" className="box" width="300px" height="300px" targetKey="dropBox">
                    {Letters.map((l, i) => (
                        <Letter id={`letter` + i} value={l} label={`letter` + i} targetKey="letter" className="letter" draggable="true">
                            <p>{l}</p>
                        </Letter>
                    ))}
                </Box>}
                <LetterRow>
                    {
                        this.state.winner === true ?
                            <div style={{textAlign: "center"}}>
                                <h1>You Win!</h1>
                                <Refresh onClick={this.revealTracklist}>Reveal Tracklist</Refresh>
                                <Refresh onClick={this.reset}>Play Again</Refresh>
                            </div>

                            :
                            <Refresh onClick={this.reset}>
                                RESET
                            </Refresh>
                    }
                </LetterRow>

            </UnscramblerWrap>
        );
    }
}

const UnscramblerWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
`;

const LetterRow = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ImageWrap = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100vw;
    height: 100vh;
`;

const Tracklist = styled.img`
    width: 70%;
    @media (max-width: 600px) { 
		width: 100%;
	}
`;
const Refresh = styled.div`
    padding: 15px 30px 15px 30px;
    background-color: #5e96ea;
    color: white;
    border-radius: 1em;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2vh;

    &:hover{
        background-color: #4673b8;
    }
`;
