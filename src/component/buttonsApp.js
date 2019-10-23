import React from 'react';
import { useState, useEffect } from 'react';
import TopButton from './topButton';
import Calendar from './calendar';

const ButtonsApp = (props) => {
    const { toggleModalFromElsewhere } = props;
    return (
        <>
            <TopButton
                name="날짜"
                clickFunc={toggleModalFromElsewhere}
            ></TopButton>
            <TopButton name="인원" clickFunc={toggleModalFromElsewhere} />
            <TopButton name="숙소 유형" clickFunc={toggleModalFromElsewhere} />
            <TopButton name="가격" clickFunc={toggleModalFromElsewhere} />
            <TopButton
                name="필터 추가하기"
                clickFunc={toggleModalFromElsewhere}
            />
        </>
    );
};

export default ButtonsApp;
