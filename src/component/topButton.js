import React from 'react';
import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { ModalConsumer } from '../container/top';
import { GlobalContext } from '../App';

const CustomTopButton = styled.button`
    border: 1px solid black;
    margin: 5px;
    border-radius: 5px;
    outline: none;
    font-size: 1.2em;
    background-color: ${({ selected }) => {
        switch (selected) {
            case 'notSelected':
                return '';
            case 'selected':
                return '#1b9498';
            case 'hover':
                break;
        }
    }};

    :hover {
        background-color: #bfbfbf;
    }
`;

/**
 *
 * @param {} props
 * @param {ReactComponent} props.modalContent
 */
const TopButton = (props) => {
    const { index, name, buttonsState, modalContent } = props;
    const [buttonName, setButtonName] = useState(name);
    const [selected, setSelected] = useState('notSelected');
    const globalContext = useContext(GlobalContext);
    return (
        <CustomTopButton
            onClick={() => {
                setSelected('selected');
                globalContext.currentButton = { index, setButtonName };
                globalContext.content = modalContent;
                globalContext.toggleModal();
            }}
            selected={selected}
        >
            {buttonName}
        </CustomTopButton>
    );
};

export default TopButton;
