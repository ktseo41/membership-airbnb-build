import React from 'react';
import { useState, useEffect } from 'react';
import TopButton from './topButton';
import Calendar from './calendar';

const ButtonsApp = (props) => {
    return (
        <>
            <TopButton name="날짜" modalContent={<Calendar />} />
            <TopButton name="인원" />
            <TopButton name="숙소 유형" />
            <TopButton name="가격" />
            <TopButton name="필터 추가하기" />
        </>
    );
};

export default ButtonsApp;
