import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import CalendarWrapper from './calendar';
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
    const { observers } = props;
    const [isOpen, setisOpen] = useState(false);
    const toggleModal = () => {
        setisOpen(!isOpen);
    };

    observers.List = [toggleModal];

    // console.log(observers.List);

    return (
        <>
            <ReactModal isOpen={isOpen} style={modalStyle}>
                <button onClick={toggleModal}>x</button>
                <CalendarWrapper />
                <div>testtest</div>
            </ReactModal>
        </>
    );
};

export default Modal;
