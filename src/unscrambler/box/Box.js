import React from "react";
import styled from "styled-components";

function Box (props) {
    const drop = e => {
        e.preventDefault();
        const letter_id = e.dataTransfer.getData('letter_id');

        const letter = document.getElementById(letter_id);
        letter.style.display = 'flex';
        
        e.target.appendChild(letter);
    }

    const dragOver = e => {
        e.preventDefault();

    }

    return (
        <BoxWrap 
            id={props.id}
            className={props.className}
            onDrop={drop}
            onDragOver={dragOver}
            width={props.width}
            height={props.height}
        >
           {props.children}
        </BoxWrap>
    )
}

const BoxWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-evenly;
    justify-items: center;
    align-content: space-evenly;
    align-items: center;
    width: ${({ width }) => width ? `${width}` : "50px"};
    height: ${({ height }) => height ? `${height}` : "50px"};
    border: solid 1px white;
    margin: 5px;
`;


export default Box;