import React from 'react';
import pic4 from '../../../images/about/IW-about1.jpg';
import './AboutUs.css'
const AboutUs = () => {
    return (
        <>
            <div className="section-full-aboutus bg-white content-inner-aboutus dark:bg-dark-variant">
                <div className="container">
                    <div className="aboutus-main">
                        <div className="aboutus-col-lg-7">
                            <div className="about-box about-box-main dark:bg-slate-900" >
                                <div className="aboutbox-col-lg-4">
                                    <h2 className="mt-0 mb-5 heading-about dark:text-white">About Us<span className="bg-black"></span></h2>
                                    <h4 className="text-gray-400  heading_about-2 dark:text-white">We create unique experiences</h4>
                                </div>
                                <div className="aboutbox-col-lg-8">
                                    <p className='p-about dark:text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMak.</p>
                                </div>
                            </div>
                        </div>
                        <div className="aboutus-col-lg-5 aboutus-img dark:bg-blend-darken" >
                            <img className='aboutus-image ' src={pic4} data-tilt alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;