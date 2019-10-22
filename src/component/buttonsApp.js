import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const TopButton = styled.button`
    border: 1px solid black;
    margin: 5px;
    border-radius: 5px;
    outline: none;
    font-size: 1.2em;

    :hover {
        background-color: #bfbfbf;
    }

    :focus {
        background-color: #1b9498;
        color: white;
        outline: none;
    }
`;

const ButtonsApp = (props) => {
    return (
        <>
            <TopButton>날짜</TopButton>
            <TopButton>인원</TopButton>
            <TopButton>숙소 인원</TopButton>
            <TopButton>가격</TopButton>
            <TopButton>필터 추가하기</TopButton>
        </>
    );
};

export default ButtonsApp;
