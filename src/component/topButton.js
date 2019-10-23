import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

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

const TopButton = (props) => {
    const [selected, setSelected] = useState(false);
    const { name, clickFunc } = props;
    return (
        <div>
            <CustomTopButton onClick={clickFunc}>{name}</CustomTopButton>
        </div>
    );
};

export default TopButton;