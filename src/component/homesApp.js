import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Home from './home';

const dummyToTest = [
    {
        className: 'home-1',
        imgSrc:
            'https://a0.muscache.com/im/pictures/7451e3fb-d4ce-49f5-8be6-8d8abea79880.jpg',
        homeType: '아파트 전체',
        homeName: 'apartment in sunset valley of sims world',
        homeSpec: '인원 3명 · 원룸 · 침대 1개 · 욕실 1개',
        roomPrice: '100,000',
        roomFullPrice: '300,000',
        starringScore: '5.0',
        starringReviews: '12',
    },
    {
        className: 'home-2',
        imgSrc:
            'https://a0.muscache.com/im/pictures/37c5e0ec-048d-4a0b-b45b-ff27074ab632.jpg',
        homeType: '아파트의 개인실',
        homeName: 'Manhattan Ave Apartment 2 stops from Times Square',
        homeSpec: '인원 4명 · 침실 2개 · 침대 2개 · 욕실 2개',
        roomPrice: '139,120',
        roomFullPrice: '392,360',
        starringScore: '4.6',
        starringReviews: '32',
    },
];

const HomesApp = (props) => {
    return (
        <>
            {dummyToTest.map((homeInfos) => (
                <Home home={homeInfos} />
            ))}
        </>
    );
};

export default HomesApp;
