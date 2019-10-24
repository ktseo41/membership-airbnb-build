import React from 'react';
import { useState, useEffect } from 'react';
import TopButton from './topButton';
import Calendar from './calendar';
import CountersApp from './countersApp';
import { ModalConsumer } from '../container/top';

const ButtonsApp = (props) => {
    // 'notSelected', 'selected', 'hover'
    const [buttonsSelected, setButtonsSelected] = useState([
        'notSelected',
        'notSelected',
        'notSelected',
        'notSelected',
        'notSelected',
    ]);
    const [buttonsName, setButtonsName] = useState([
        '날짜',
        '인원',
        '숙소 유형',
        '가격',
        '필터 추가하기',
    ]);

    const buttonsState = {
        buttonsSelected,
        setButtonsSelected,
        buttonsName,
        setButtonsName,
    };
    return (
        <>
            <TopButton
                index={0}
                name="날짜"
                buttonsState={buttonsState}
                modalContent={<Calendar />}
            />
            <TopButton
                index={1}
                name="인원"
                buttonsState={buttonsState}
                modalContent={<CountersApp />}
            />
            <TopButton index={2} name="숙소 유형" buttonsState={buttonsState} />
            <TopButton index={3} name="가격" buttonsState={buttonsState} />
            <TopButton
                index={4}
                name="필터 추가하기"
                buttonsState={buttonsState}
            />
        </>
    );
};

export default ButtonsApp;
