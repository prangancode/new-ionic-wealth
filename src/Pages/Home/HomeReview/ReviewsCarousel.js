import React from 'react';
import Slider from "react-slick";
import "./ReviewsCarousel.css"
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/solid'


//Images
import pic1 from '../../../images/testimonials/pic1.jpg';
import pic2 from '../../../images/testimonials/pic2.jpg';
import pic3 from '../../../images/testimonials/pic3.jpg';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className="owl-nav">
            <div className="owl-next flaticon-right-arrow dark:opacity-120" onClick={onClick}><ChevronRightIcon className='h-12 w-12 text-blue-500 dark:text-white' /></div>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="owl-nav ">
            <div className=" owl-prev flaticon-left-arrow dark:opacity-120" onClick={onClick} style={{ zIndex: 1 }} >
                <ChevronLeftIcon className='h-12 w-12 text-blue-500 dark:text-white ' />
            </div>
        </div>
    );
}


const ReviewsCarousel = () => {

    var settings = {
        arrows: true,
        slidesToShow: 1,
        infinite: true,
        dots: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };
    return (
        <>
            <Slider className="testimonial-two-dots-bx  owl-btn-center-lr center-active-owl owl-btn-3 " {...settings}>
                <div className="item-rc">
                    <div className="testimonial-9 dark:bg-slate-900">
                        <div className="testimonial-pic radius-tm">
                            <img src={pic1} alt="" width="100" height="100" />
                        </div>
                        <div className="testimonial-detail">
                            <strong className="testimonial-name dark:text-white">Jone Deo</strong>
                            <span className="testimonial-position">Client Form MNC</span>
                        </div>
                        <div className="testimonial-text">
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.It is a long established fact that a reader will be distracted.</p>
                        </div>
                    </div>
                </div>
                <div className="item-rc">
                    <div className="testimonial-9 dark:bg-slate-900">
                        <div className="testimonial-pic radius-tm">
                            <img src={pic2} alt="" width="100" height="100" />
                        </div>
                        <div className="testimonial-detail">
                            <strong className="testimonial-name dark:text-white">David Matin</strong>
                            <span className="testimonial-position">Client Form IBM</span>
                        </div>
                        <div className="testimonial-text">
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.It is a long established fact that a reader will be distracted.</p>
                        </div>
                    </div>
                </div>
                <div className="item-rc">
                    <div className="testimonial-9 dark:bg-slate-900">
                        <div className="testimonial-pic radius-tm">
                            <img src={pic3} alt="" width="100" height="100" />
                        </div>
                        <div className="testimonial-detail">
                            <strong className="testimonial-name dark:text-white">David Matin</strong>
                            <span className="testimonial-position">Client Form IBM</span>
                        </div>
                        <div className="testimonial-text">
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.It is a long established fact that a reader will be distracted.</p>
                        </div>
                    </div>
                </div>


            </Slider>
        </>
    );
};

export default ReviewsCarousel;