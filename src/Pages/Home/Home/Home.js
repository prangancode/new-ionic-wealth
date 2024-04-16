import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import HeaderNavbar from '../../Shared/Header/HeaderNavbar/HeaderNavbar';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import GetInTouch from '../GetInTouch/GetInTouch';
import HomeReview from '../HomeReview/HomeReview';
import Qualities from '../Qualities/Qualities';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <HeaderNavbar />
            <Banner />
            <AboutUs />
            <ChooseUs />
            <Services />
            <Qualities />
            <HomeReview />
            <GetInTouch />
            <Footer />
        </>
    );
};

export default Home;