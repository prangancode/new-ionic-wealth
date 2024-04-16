import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
const ServiceCard = ({ service }) => {
    const { title, description, image, icon } = service;
    return (
        <>
            <div className="services-one__single">
                <div className="col-xl-4-home-service col-lg-4 fadeInUp animated" >
                    <div className="services-one__img-box">
                        <div className="services-one__img">
                            <img src={image} alt="" />
                        </div>
                        <div className="services-one__icon">
                            <span className="icon-mobile-analytics"><i className={icon} /></span>
                        </div>
                    </div>
                    <div className="services-one__content">
                        <h3 className="services-one__title"><a href="business-growth.html">{title}</a></h3>
                        <p className="services-one__text">{description}</p>
                        <div className="services-one__bottom">
                            <a href="business-growth.html" className="services-one__btn">Read More</a>
                            <a href="business-growth.html" className="services-one__arrow"><BsArrowRight className=' w-8 h-8  right-arrow' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceCard;