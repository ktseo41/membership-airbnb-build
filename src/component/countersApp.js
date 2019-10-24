import React, { Fragment } from 'react';
import Counter from './counter';

const CounterList = () => {
    return (
        <Fragment>
            <Counter personType="어른" />
            <Counter personType="어린이" personOption="2~12세" />
            <Counter personType="유아" personOption="2세 미만" />
        </Fragment>
    );
};

export default CounterList;
