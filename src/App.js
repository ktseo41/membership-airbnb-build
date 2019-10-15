import React from 'react';
import logo from './component/logo';
import './App.css';
import Button from './component/button';
import HomeItem from './component/homeitem';

function App() {
  const name = 'membership-airbnb-build from ss38'
  const buttonDate = Button('날짜', 'button-date');
  const buttonPeople = Button('인원', 'button-people');
  const buttonHomeType = Button('숙소 인원', 'button-home-type');
  const buttonPrice = Button('가격', 'button-price');
  const buttonAddFilter = Button('필터 추가하기', 'button-add-filter');
  const homeItem = HomeItem({
    className:'home-1', 
    imgSrc:"https://a0.muscache.com/im/pictures/7451e3fb-d4ce-49f5-8be6-8d8abea79880.jpg",
    homeType:"아파트 전체",
    homeName:"apartment in sunset valley of sims world",
    homeSpec:"인원 3명 · 원룸 · 침대 1개 · 욕실 1개",
    roomPrice:"100,000",
    roomFullPrice:"300,000",
    starringScore:"5.0",
    starringReviews:"12"
  });
  const homeItem2 = HomeItem({
    className:"home-2",
    imgSrc:"https://a0.muscache.com/im/pictures/37c5e0ec-048d-4a0b-b45b-ff27074ab632.jpg",
    homeType:"아파트의 개인실",
    homeName:"Manhattan Ave Apartment 2 stops from Times Square",
    homeSpec:"인원 4명 · 침실 2개 · 침대 2개 · 욕실 2개",
    roomPrice:"139,120",
    roomFullPrice:"392,360",
    starringScore:"4.6",
    starringReviews:"32"
  })
  return (
    <div className="App">
      <header className="App-header">
        <div className="Buttons d-flex align-items-center">
        {logo}
        {buttonDate}
        {buttonPeople}
        {buttonHomeType}
        {buttonPrice}
        {buttonAddFilter}
        </div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
      <p>
          React Page : {name}
      </p>
      <h3>숙소 000개</h3>
        <div className="home-container">
          {homeItem}
          {homeItem2}
        </div>
    </div>
  );
}

export default App;
