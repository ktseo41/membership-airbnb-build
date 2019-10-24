import React, { useState, useContext } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DayPickerRangeController } from 'react-dates';
import { GlobalContext } from '../App';

const CalendarWrapper = (props) => {
    const globalContext = useContext(GlobalContext);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [focusedInput, setFocusedInput] = useState('startDate');

    const onDatesChange = ({ startDate, endDate }) => {
        setStartDate(startDate);
        setEndDate(endDate);
    };

    const onFocusChange = (focusedInput) => {
        if (focusedInput === null) setFocusedInput('startDate');
        else setFocusedInput(focusedInput);
    };

    const saveButtonHandler = (startDate, endDate) => () => {
        if (startDate && endDate) {
            const {
                toggleModal,
                homeFilterState,
                setHomeFilterState,
            } = globalContext;
            toggleModal();
            setHomeFilterState([
                ...homeFilterState,
                { startDate },
                { endDate },
            ]);
        }
    };

    return (
        <>
            <DayPickerRangeController
                startDate={startDate}
                endDate={endDate}
                focusedInput={focusedInput}
                onFocusChange={onFocusChange}
                onDatesChange={onDatesChange}
                hideKeyboardShortcutsPanel={true}
                numberOfMonths={2}
            />
            <div className="d-flex justify-content-between">
                <button>삭제</button>
                <button onClick={saveButtonHandler(startDate, endDate)}>
                    save
                </button>
            </div>
        </>
    );
};

export default CalendarWrapper;
