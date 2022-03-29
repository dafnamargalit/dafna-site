import React from 'react';
import styled from 'styled-components';

function Letter(props) {
    // var letter = document.getElementsByClassName('letter');

    // letter.addEventListener('touchmove', function (e) {
    //     const target = e.target;

    //     e.dataTransfer.setData('letter_id', target.id);

    //     setTimeout(() => {
    //         target.style.display = "none";
    //     }, 0);
    // });

    // letter.addEventListener('touchend', function (e) {
    //     // current box position.
    //     if (e.target.style.display === 'none') {
    //         e.target.style.display = 'flex';
    //     }
    // });
    const dragStart = e => {
        const target = e.target;

        e.dataTransfer.setData('letter_id', target.id);

        setTimeout(() => {
            target.style.display = "none";
        }, 0);
    }

    const dragOver = e => {
        e.stopPropagation();
    }

    const dragEnd = e => {
        if (e.target.style.display === 'none') {
            e.target.style.display = 'flex';
        }
    }

    return (
        <LetterWrap
            id={props.id}
            className={props.className}
            draggable={props.draggable}
            onDragStart={dragStart}
            onDragOver={dragOver}
            onDragEnd={dragEnd}
        >
            {props.children}
        </LetterWrap>
    )
}

const LetterWrap = styled.div`
    background-color: blue;
    border: solid 1px white;
    cursor: pointer;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content:center;
`;

export default Letter