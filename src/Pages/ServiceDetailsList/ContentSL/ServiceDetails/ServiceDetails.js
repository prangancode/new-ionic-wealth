import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css'
import ctabg from '../../../../images/serviceImg/cta.jpg'
import Content from './Content';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Cta from '../Cta/Cta';

// const servicelist = [
//     { title: 'Financial Planning' },
//     { title: 'Relationship Buildup' },
//     { title: 'Investement Planning' },
//     { title: 'Marketing Strategy' },
//     { title: 'Product Strategy' },
// ]

const ServiceDetails = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <>
            <div className=''>
                <section className="service-details section-gap">
                    <div className="container">
                        <div className="row-servicedetails">
                            {/* Details Content */}
                            <div className="col-lg-8-servicedetails">
                                <div className={toggleState === 1 ? "  active-content-services" : "content-services"}>
                                    <Content />
                                </div>
                                <div className={toggleState === 2 ? "  active-content-services" : "content-services"}>
                                    <Content1 />
                                </div>
                                <div className={toggleState === 3 ? "  active-content-services" : "content-services"}>
                                    <Content2 />
                                </div>
                                <div className={toggleState === 4 ? "  active-content-services" : "content-services"}>
                                    <Content3 />
                                </div>
                            </div>
                            {/* <div className={toggleState === 2 ? "  active-content-services" : "content-services"}>
                                <Content1 />
                            </div>
                            <div className={toggleState === 3 ? "  active-content-services" : "content-services"}>
                                <Content2 />
                            </div>
                            <div className={toggleState === 4 ? "  active-content-services" : "content-services"}>
                                <Content3 />
                            </div> */}
                            {/* Sidebar */}
                            <div className="col-lg-4-sidebar col-md-8">
                                <div className="sidebar">
                                    {/* Services List Widget */}
                                    <div className="widget cat-widget">
                                        <h4 className="widget-title">All Service List</h4>
                                        <ul>

                                            <li >
                                                <button className={toggleState === 1 ? "tabs-services active-tabs-services" : "tabs-services"}
                                                    onClick={() => toggleTab(1)}>
                                                    Financial Planning <span><i className="far fa-angle-right" /></span></button>
                                            </li>
                                            <li >
                                                <button className={toggleState === 2 ? "tabs-services active-tabs-services" : "tabs-services"}
                                                    onClick={() => toggleTab(2)}>
                                                    Relationship Buildup <span><i className="far fa-angle-right" /></span></button>
                                            </li>
                                            <li >
                                                <button className={toggleState === 3 ? "tabs-services active-tabs-services" : "tabs-services"}
                                                    onClick={() => toggleTab(3)}>
                                                    Investement Planning <span><i className="far fa-angle-right" /></span></button>
                                            </li>
                                            <li >
                                                <button className={toggleState === 4 ? "tabs-services active-tabs-services" : "tabs-services"}
                                                    onClick={() => toggleTab(4)}>
                                                    Marketing Strategy <span><i className="far fa-angle-right" /></span></button>
                                            </li>

                                        </ul>
                                    </div>
                                    {/* Contact Widget */}
                                    <div className="widget contact-widget">
                                        <h4 className="widget-title">Conatct Us</h4>
                                        <form action="#">
                                            <input type="text" placeholder="Your Email" />
                                            <textarea placeholder="Message" defaultValue={""} />
                                            <button type="submit" className="site-button">Send Message</button>
                                        </form>
                                    </div>
                                    {/* CTA Widget */}
                                    <div className="widget cta-widget" style={{ backgroundImage: "url(" + ctabg + ")" }}>
                                        <h4 className="title">Need Any Consultations</h4>
                                        <Link to="/contact" className="site-button">Send Message</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* cta */}
                    <Cta />

                </section>
            </div>
        </>
    );
};

export default ServiceDetails;