import React from 'react';
import styled from 'styled-components';
import { DragDropContainer } from 'react-drag-drop-container';

function Letter(props) {
    const handleDrop = e => {
        e.preventDefault();
        e.stopPropagation();
    }

    return (
        <DragDropContainer
            targetKey={props.targetKey}
            dragData={{ label: props.label, value: props.value }}
            onDrop={handleDrop}

        >
            <LetterWrap
                id={props.id}
                className={props.className}
            >
                {props.children}
            </LetterWrap>
        </DragDropContainer >
    )

}

const LetterWrap = styled.div`
    background-color: #5e96ea;
    border: solid 1px white;
    cursor: pointer;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content:center;
`;

export default Letter