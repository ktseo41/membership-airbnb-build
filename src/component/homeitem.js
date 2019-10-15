import React from 'react';
import star from './star';

const HomeItem = (className) => {
    const classNames = `home-item d-flex flex-row ${className}`;
    return (
        <div className={classNames}>
            <div className="home-img-box">
                <img width="300" height="200" src="https://a0.muscache.com/im/pictures/7451e3fb-d4ce-49f5-8be6-8d8abea79880.jpg"></img>
            </div>
            <div className="home-spec-box position-relative">
                <div className="home-spec-inner-box">
                    <div className="spec-inner-upper-box d-flex flex-column">
                        <div className="home-type">아파트 전체</div>
                        <div className="home-name">sunset valley</div>
                        <div className="home-spec">
                            인원 3명
                            · 
                            원룸
                            · 
                            침대 1개
                            · 
                            욕실 1개
                        </div>
                    </div>
                    <div className="spec-inner-lower-left-box position-absolute d-flex align-items-center">
                        <div className="starring d-flex align-items-center">
                            {star}
                        </div>
                        <div className="starring-score">
                            5.0
                        </div>
                        <div className="starring-reviews">
                            (12)
                        </div>
                    </div>
                    <div className="spec-inner-lower-right-box position-absolute d-flex flex-column">
                        <div className="room-price">₩100,000/박</div>
                        <div className="room-full-price">총 요금 : ₩300,000</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeItem;