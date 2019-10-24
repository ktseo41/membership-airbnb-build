import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import queries from '../query';
import Home from '../component/home';
import Count from '../component/homecount';
import { GlobalContext } from '../App';

const HomesApp = (props) => {
    const globalContext = useContext(GlobalContext);
    const [homeFilterState, setHomeFilterState] = useState([]);
    globalContext.homeFilterState = homeFilterState;
    globalContext.setHomeFilterState = setHomeFilterState;
    console.log(globalContext);
    const { GET_ALL_HOME } = queries;
    const { loading, error, data } = useQuery(GET_ALL_HOME);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        console.error(error);
        return <div>Error Occured!</div>;
    }
    const { getAllHome } = data;
    return (
        <>
            <Count homeCount={getAllHome.length} />
            {getAllHome.map((homeInfos, i) => {
                return <Home home={homeInfos} key={i} />;
            })}
        </>
    );
};

export default HomesApp;
