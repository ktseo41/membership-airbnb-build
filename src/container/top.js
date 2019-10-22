import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ButtonsApp from '../component/buttonsApp';
import Logo from '../component/logo';

const TopDiv = styled.div`
    color: white;
    margin: 1rem 0rem;
    border-top: 1px solid #282c34;
    border-bottom: 1px solid #282c34;
`;

const Top = (props) => {
    return (
        <section className="top">
            <TopDiv className="d-flex align-items-center">
                <Logo />
                <ButtonsApp />
            </TopDiv>
        </section>
    );
};

export default Top;
