import React from 'react';
import Star from './star';

const Home = ({ home }) => {
    const {
        home_id,
        thumbnail,
        home_type,
        home_name,
        price,
        review_rating,
        review_number,
    } = home;

    return (
        <div className="home-item d-flex flex-row" id={home_id}>
            <div className="home-img-box">
                <img width="300" height="200" src={thumbnail}></img>
            </div>
            <div className="home-spec-box position-relative">
                <div className="home-spec-inner-box">
                    <div className="spec-inner-upper-box d-flex flex-column">
                        <div className="home-type">{home_type}</div>
                        <div className="home-name">{home_name}</div>
                        {/* <div className="home-spec">{homeSpec}</div> */}
                    </div>
                    <div className="spec-inner-lower-left-box position-absolute d-flex align-items-center">
                        <div className="starring d-flex align-items-center">
                            <Star />
                        </div>
                        <div className="starring-score">{review_rating}</div>
                        <div className="starring-reviews">
                            ({review_number})
                        </div>
                    </div>
                    <div className="spec-inner-lower-right-box position-absolute d-flex flex-column">
                        <div className="room-price">₩{price}/박</div>
                        <div className="room-full-price">
                            총 요금 : ₩ 리팩토링 진행중
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
