import React from 'react';
import { Link } from 'react-router-dom'
import ctabg from '../../../../images/serviceImg/16.png';
import './Cta.css';
const Cta = () => {
    return (
        <>
            <section className="cta-section mt-10">
                <div className="container">
                    <div className="cta-wrap bg-img-cta" style={{ backgroundImage: "url(" + ctabg + ")" }}>
                        <div className="flex flex-wrap justify-center">
                            <div className="col-lg-8-cta">
                                <div className="cta-content text-center">
                                    <div className="section-title both-border mb-30">
                                        <span className="title-tag">Get A Quote</span>
                                        <h2 className="title mb-10">Feel Any Project For Business Consulting Get Started Us</h2>
                                    </div>
                                    <Link to="/contact" className="site-button">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cta;