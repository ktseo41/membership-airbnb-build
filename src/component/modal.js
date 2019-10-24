import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import { ModalConsumer } from '../container/top';
import { GlobalContext } from '../App';
ReactModal.setAppElement('body');

const CloseButtonDiv = styled.div`
    font-weight: bold;
    text-align: right;
`;

const modalStyle = {
    overlay: { position: 'absolute', top: '77px' },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const Modal = (props) => {
    const { content } = props;
    const [isOpen, setisOpen] = useState(false);
    const toggleModal = () => {
        setisOpen(!isOpen);
    };

    const closeModal = () => {
        setisOpen(false);
    };

    const globalContext = useContext(GlobalContext);
    globalContext.toggleModal = toggleModal;
    return (
        <>
            <ReactModal
                isOpen={isOpen}
                style={modalStyle}
                onRequestClose={closeModal}
            >
                <CloseButtonDiv onClick={closeModal}>x</CloseButtonDiv>
                {globalContext.content}
            </ReactModal>
        </>
    );
};

export default Modal;
