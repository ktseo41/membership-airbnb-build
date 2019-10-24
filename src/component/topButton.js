import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ModalConsumer } from '../container/top';

const CustomTopButton = styled.button`
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

/**
 *
 * @param {} props
 * @param {ReactComponent} props.modalContent
 */
const TopButton = (props) => {
    const [selected, setSelected] = useState(false);
    const { name, modalContent } = props;
    return (
        <ModalConsumer>
            {(contextProps) => {
                return (
                    <CustomTopButton
                        onClick={() => {
                            contextProps.content = modalContent;
                            contextProps.toggleModal();
                        }}
                    >
                        {name}
                    </CustomTopButton>
                );
            }}
        </ModalConsumer>
    );
};

export default TopButton;
