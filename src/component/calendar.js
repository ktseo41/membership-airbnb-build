import React, { useState } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DayPickerRangeController } from 'react-dates';

const CalendarWrapper = (props) => {
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
            console.log('both selected');
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
            <button onClick={saveButtonHandler(startDate, endDate)}>
                save
            </button>
        </>
    );
};

export default CalendarWrapper;
