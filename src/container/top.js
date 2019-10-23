import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ButtonsApp from '../component/buttonsApp';
import Logo from '../component/logo';
import Modal from '../component/modal';

const TopDiv = styled.div`
    color: white;
    margin: 1rem 0rem;
    border-top: 1px solid #282c34;
    border-bottom: 1px solid #282c34;
`;

const Top = (props) => {
    const observers = {
        List: [],
    };
    const modalState = { isOpen: false };
    const toggleModalFromElsewhere = (e) => {
        // console.log(e.target);
        // console.log(e.target.offsetLeft);
        let { isOpen } = modalState;
        isOpen = !isOpen;
        observers.List.forEach((observer) => observer());
    };
    return (
        <section className="top">
            <TopDiv className="d-flex align-items-center">
                <Logo />
                <ButtonsApp
                    toggleModalFromElsewhere={toggleModalFromElsewhere}
                />
                <Modal observers={observers} />
            </TopDiv>
        </section>
    );
};

export default Top;
