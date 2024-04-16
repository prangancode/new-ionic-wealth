import React from 'react';
import "./_banner.scss"
import "./_default.scss"

import "./_button.scss"

// Import Swiper React components
// import 'swiper/swiper.scss';

import 'swiper/scss'
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import sliderImage1 from '../../../images/banner-slider/index-2-hero-img.png';
import sliderImage2 from '../../../images/banner-slider/index-2-hero-img-2.png';
import pattern1 from '../../../images/banner-slider/pattern-1.png';
import pattern2 from '../../../images/banner-slider/pattern-3.png';

// video lightbox
import VideoLightBox from './VideoLightBox';

SwiperCore.use([Pagination]);

const Banner = () => {
    return (
        <div className="hero-2 dark:bg-dark-variant">
            <div className="hero-2-wrapper">
                <Swiper
                    className="hero-2-slider"
                    speed={1000}
                    autoplay={true}
                    pagination={{
                        el: '.hero-2-pagination',
                        type: 'bullets',
                        bulletActiveClass: 'hero-2-pagination-bullet-active bullet-active',
                        bulletClass: 'hero-2-pagination-bullet bullet',
                        clickable: true,
                    }}
                >
                    <SwiperSlide>
                        <div className="container">
                            <div className="hero-2-rowBanner">
                                <div className="hero-2-col-lg-5">
                                    <div className="hero-2-content dark:text-white">
                                        <h1 className="hero-2-h1 dark:text-white">Smart financial services for firms and individuals.</h1>
                                        <div className="button-group">
                                            <VideoLightBox
                                                icon="far fa-play-circle"
                                                text="watch our video"
                                                URL={`http://www.youtube.com/watch?v=p6nDYEkehTE&origin=${window.location.href}`}
                                            />
                                            <p className="hero-2-p">Got questions? <a href="/#" className="link"><span className="txt-upper f-w-500">Talk to an Expert</span></a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="hero-2-col-lg-6">
                                    <div className="hero-2-image">
                                        <img className="main" src={sliderImage1} alt="slider" />
                                        <div className="circle dark:filter-grayscale" >
                                            <img src={pattern1} alt="pattern" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img className="hero-2-absolute-img dark:filter-grayscale" src={pattern2} alt="pattern" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="container">
                            <div className="hero-2-rowBanner">
                                <div className="hero-2-col-lg-5">
                                    <div className="hero-2-content">
                                        <h1 className="hero-2-h1 dark:text-white">Smart financial services for firms and individuals.</h1>
                                        <div className="button-group">
                                            <VideoLightBox
                                                icon="far fa-play-circle"
                                                text="watch our video"
                                                URL={`http://www.youtube.com/watch?v=p6nDYEkehTE&origin=${window.location.href}`}
                                            />
                                            <p className="hero-2-p dark:text-white">Got questions? <a href="/#" className="link"><span className="txt-upper f-w-500">Talk to an Expert</span></a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="hero-2-col-lg-6">
                                    <div className="hero-2-image">
                                        <img className="main" src={sliderImage2} alt="slider" />
                                        <div className="circle dark:filter-grayscale">
                                            <img src={pattern1} alt="pattern" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img className="hero-2-absolute-img dark:filter-grayscale" src={pattern2} alt="pattern" />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="hero-2-pagination bullet-pagination"></div>
            </div>
        </div>
    );
};

export default Banner;