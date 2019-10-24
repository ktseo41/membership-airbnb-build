import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const CountDiv = styled.div`
    font-size: 1.5em;
    font-weight: bold;
`;

const Count = (props) => {
    const { homeCount } = props;
    return (
        <section className="count">
            <CountDiv>숙소 {homeCount}개</CountDiv>
        </section>
    );
};

export default Count;
