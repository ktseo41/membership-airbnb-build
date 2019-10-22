import React from 'react';
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import queries from '../query';
import Home from '../component/home';
import Count from '../component/count';

const HomesApp = (props) => {
    const { GET_ALL_HOME } = queries;
    const { loading, error, data } = useQuery(GET_ALL_HOME);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error Occured!</div>;
    }
    const { getAllHome } = data;
    // sethomeCount(getAllHome.length);
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
