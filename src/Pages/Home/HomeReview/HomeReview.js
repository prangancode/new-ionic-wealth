import React from 'react';
import ReviewsCarousel from './ReviewsCarousel';
import bg1 from '../../../images/background/bg1.jpg';
import "./HomeReview.css"

const HomeReview = () => {
    return (
        <>
            {/* <!-- Testimonial --> */}
            <div className=" section-full-homereview content-inner-hr bg-img-fix-hr overlay-primary-hr testimonial-curv-bx dark:home-review-bg-image dark:testimonial-curv-bx1 dark:overlay-primary-hr1 dark:bg-dark-variant" style={{ backgroundImage: "url(" + bg1 + ")" }}>
                <div className="home-review-container">
                    <div className="row-hr">
                        <div className="hr-col-lg-2"></div>
                        <div className="hr-col-lg-8">
                            <div className="section-head-hr text-center">
                                <h2 className="uppercase mb-8 dark:text-white"><span className="font-light dark:text-white">Happy Clients</span> <br /> Our Reviews</h2>
                                <h5 className="font-light text-gray-800 dark:text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</h5>
                            </div>
                            <ReviewsCarousel />
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Testimonial End --> */}
        </>
    );
};

export default HomeReview;