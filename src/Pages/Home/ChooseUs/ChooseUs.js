import React from 'react';
import bgimg from '../../../images/background/IW-Image-bg1.jpg'
import './ChooseUs.css'
import Counter from './Counter';
import HomeTab from './HomeTab';


const ChooseUs = () => {
    return (
        <>
            <div className="section-full-chooseus content-inner-chooseus overlay-primary-chooseus choseus-tabs  bg-img-fix-chooseus" style={{ backgroundImage: "url(" + bgimg + ")" }}>
                <div className="container">
                    <div className="section-head-chooseus text-white text-center">
                        <h2 className="box-title mb-0">Why Choose Us<span className="bg-primary"></span></h2>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over</p>
                    </div>
                </div>
                <HomeTab />
                <div className="chooses-info text-white">
                    <Counter />
                </div>
            </div>
        </>
    );
};

export default ChooseUs;