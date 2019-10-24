import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import { ModalConsumer } from '../container/top';
ReactModal.setAppElement('body');

const modalStyle = {
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

    return (
        <>
            <ModalConsumer>
                {(contextProps) => {
                    contextProps.toggleModal = toggleModal;
                    return (
                        <>
                            <ReactModal
                                isOpen={isOpen}
                                style={modalStyle}
                                onRequestClose={closeModal}
                            >
                                <button onClick={closeModal}>x</button>
                                {contextProps.content}
                            </ReactModal>
                        </>
                    );
                }}
            </ModalConsumer>
        </>
    );
};

export default Modal;
