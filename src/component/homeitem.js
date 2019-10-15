import React from 'react';
import star from './star';

/**
 * 
 * @param {*} homeSpec 
 */
const HomeItem = (home) => {
    const { 
        className, 
        imgSrc, 
        homeType, 
        homeName, 
        homeSpec, 
        roomPrice, 
        roomFullPrice, 
        starringScore,
        starringReviews
    } = home;
    const classNames = `home-item d-flex flex-row ${className}`;
    return (
        <div className={classNames}>
            <div className="home-img-box">
                <img width="300" height="200" src={imgSrc}></img>
            </div>
            <div className="home-spec-box position-relative">
                <div className="home-spec-inner-box">
                    <div className="spec-inner-upper-box d-flex flex-column">
                        <div className="home-type">{homeType}</div>
                        <div className="home-name">{homeName}</div>
                        <div className="home-spec">{homeSpec}</div>
                    </div>
                    <div className="spec-inner-lower-left-box position-absolute d-flex align-items-center">
                        <div className="starring d-flex align-items-center">
                            {star}
                        </div>
                        <div className="starring-score">
                            {starringScore}
                        </div>
                        <div className="starring-reviews">
                            ({starringReviews})
                        </div>
                    </div>
                    <div className="spec-inner-lower-right-box position-absolute d-flex flex-column">
                        <div className="room-price">₩{roomPrice}/박</div>
                        <div className="room-full-price">총 요금 : ₩{roomFullPrice}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeItem;