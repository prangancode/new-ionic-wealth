import React from 'react';
import { Link } from 'react-router-dom';
import bnr5 from './../../../images/background/IW-Image-bg5.jpg';
import './Qualities.css'
import { ArrowRightIcon } from '@heroicons/react/solid'


const Qualities = () => {
    return (
        <>
            <div className='mt-0' >
                <div className="section-full-qualities overlay-black-dark-qualities our-projects" style={{
                    backgroundImage: "url(" + bnr5 + ")",
                }}>
                    <div className="container text-white">
                        <div className="row-qualities m-lr0-qualities display-flex-qualities align-items-stretch-qualities">
                            <div className="col-md-4-qualities   p-lr0-qualities  display-flex-qualities ind-ser-info-bx">
                                <div className="ind-service-info align-self-stretch-qualities">
                                    <span>01</span>
                                    <div className="ind-service-info-in">
                                        <h2><span>World Class</span>Technology</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of.</p>
                                    </div>
                                    <Link to="#" className="site-button btn-block display-flex-qualities justify-between text-white outline outline-2"><span>Read More</span>  <ArrowRightIcon className="h-8 w-8 text-white" /></Link>
                                </div>
                            </div>
                            <div className="col-md-4-qualities  p-lr0-qualities  display-flex-qualities ind-ser-info-bx">
                                <div className="ind-service-info align-self-stretch-qualities">
                                    <span>02</span>
                                    <div className="ind-service-info-in">
                                        <h2><span>Quality </span>Standart</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of.</p>
                                    </div>
                                    <Link to={"#"} className="site-button btn-block display-flex-qualities justify-between text-white outline outline-2"><span>Read More</span> <ArrowRightIcon className="h-8 w-8 text-white" /> </Link>
                                </div>
                            </div>
                            <div className="col-md-4-qualities  p-lr0-qualities  display-flex-qualities ind-ser-info-bx">
                                <div className="ind-service-info align-self-stretch-qualities">
                                    <span>03</span>
                                    <div className="ind-service-info-in">
                                        <h2><span>Productive</span>Capacity</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of.</p>
                                    </div>
                                    <Link to={"#"} className="site-button btn-block display-flex-qualities justify-between text-white outline outline-2"><span>Read More</span> <ArrowRightIcon className="h-8 w-8 text-white" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Qualities;