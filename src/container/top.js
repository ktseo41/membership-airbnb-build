import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ButtonsApp from '../component/buttonsApp';
import Logo from '../component/logo';
import Modal from '../component/modal';

export const ModalContext = React.createContext({
    content: null,
    toggleModal: null,
});

export const ModalConsumer = ModalContext.Consumer;

const TopDiv = styled.div`
    color: white;
    margin: 1rem 0rem;
    border-top: 1px solid #282c34;
    border-bottom: 1px solid #282c34;
`;

export const Top = (props) => {
    return (
        <section className="top">
            <TopDiv className="d-flex align-items-center">
                <Logo />
                <ButtonsApp />
                <Modal />
            </TopDiv>
        </section>
    );
};
