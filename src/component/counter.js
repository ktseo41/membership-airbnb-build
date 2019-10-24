import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const CircledButton = styled.button`
    border: 1px solid black;
    border-radius: 50%;
    width: 2em;
    height: 2em;
    margin: 5px;
    outline: none;

    :focus {
        outline: none;
    }
`;
const PersonTypeDiv = styled.div`
    width: 100px;
`;
const PersonOptionDiv = styled.div`
    color: rgba(0, 0, 0, 0.7);
    font-size: 10px;
`;
const CounterWrapDiv = styled.div`
    display: flex;
    align-items: center;
    margin: 5px;
`;

const Counter = ({ personType, personOption }) => {
    const [count, setCount] = useState(0);
    const buttonClick = (buttonType) => {
        let countDelta = buttonType === 'plus' ? 1 : -1;

        if (buttonType !== 'minus' || count !== 0) {
            setCount(count + countDelta);
        }
    };
    return (
        <CounterWrapDiv>
            <PersonTypeDiv>
                {personType}
                <PersonOptionDiv>{personOption}</PersonOptionDiv>
            </PersonTypeDiv>

            <CircledButton
                onClick={() => {
                    buttonClick('minus');
                }}
            >
                -
            </CircledButton>
            {count}
            <CircledButton
                onClick={() => {
                    buttonClick('plus');
                }}
            >
                +
            </CircledButton>
        </CounterWrapDiv>
    );
};
export default Counter;
