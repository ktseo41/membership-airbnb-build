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
  const homeItem = HomeItem('home-1');
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
        </div>
    </div>
  );
}

export default App;
