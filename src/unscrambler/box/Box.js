import React, { useState } from "react";
import styled from "styled-components";
import { DropTarget } from 'react-drag-drop-container';

function Box(props) {

    const [dropped, setDropped] = useState(0);
    const handleDrop = e => {
        e.preventDefault();
        e.stopPropagation();
        if((!props.dropLimit || dropped === 0) && e.target.parentElement.tagName === "SPAN") {
            e.target.appendChild(e.sourceElem);
            setDropped(dropped + 1);
            if(props.name === e.dragData.value){
                e.sourceElem.firstChild.style.backgroundColor = "green";
                props.correctAnswer();
            }
            else{
                e.sourceElem.firstChild.style.backgroundColor = "red"; 
                props.wrongAnswer();
            }
             
        }
    }


    return (
        <DropTarget
            onHit={handleDrop}
            targetKey={props.targetKey}
            dropData={{ name: props.name }}
            >
            <BoxWrap
                width={props.width}
                height={props.height}
            >
                {props.children}
            </BoxWrap>
        </DropTarget>
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
    max-width: ${({ width }) => width ? `${width}` : "50px"};
    height: ${({ height }) => height ? `${height}` : "50px"};
    max-height: ${({ height }) => height ? `${height}` : "50px"};
    border: solid 1px white;
    margin: 5px;
`;


export default Box;