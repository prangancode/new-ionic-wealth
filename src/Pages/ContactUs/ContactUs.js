import React from 'react';
import Breadcrumbs from '../ServiceDetailsList/BreadcrumbSL/Breadcrumbs';
import Footer from '../Shared/Footer/Footer';
import HeaderNavbar from '../Shared/Header/HeaderNavbar/HeaderNavbar';
import './ContactUs.css';
const ContactUs = () => {
    return (
        <>
            <HeaderNavbar />

            <Breadcrumbs breadcrumb={{ pagename: 'Contact Us' }} />
            {/*  <!--Contact Page Google Map Start--> */}
            <section className="dark:bg-dark-variant contact-page-google-map">
                <div className="container">
                    <iframe className="contact-page-google-map__one dark:map-dark" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2239.6645321932024!2d-4.227418683578004!3d55.851135991870336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488846b268fd0965%3A0x6529958b83133089!2s4%20Rogart%20St%2C%20Bridgeton%2C%20Glasgow%20G40%202AA%2C%20UK!5e0!3m2!1sen!2sbd!4v1648653653661!5m2!1sen!2sbd" allowfullscreen title='Riverpark'></iframe>
                </div>
            </section>
            {/*  <!--Contact Page Google Map End--> */}

            {/*  <!--Contact Page Details Start--> */}
            <section className="contact-page-details dark:bg-dark-variant">
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="col-xl-8-contactus col-lg-7">
                            <div className="contact-page-details__left">
                                <h3 className="contact-page-details__title">Get to Know About Company</h3>
                                <div className="contact-page-details__content">
                                    <div className="contact-page-details__content-img">
                                        <img src="http://layerdrops.com/conult/assets/images/resources/contact-page-details-content-img.jpg" alt="" />
                                    </div>
                                    <div className="contact-page-details__content-text-box">
                                        <p className="contact-page-details__content-text-1">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                        <p className="contact-page-details__content-text-2">Many desktop publishing packages and web page editors now use as their default model text.</p>
                                        <h2 className="contact-page-details__sign">Kevin Martin</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4-contactus col-lg-5">
                            <div className="contact-page-details__right dark:bg-slate-900">
                                <ul className="list-unstyled contact-page-details__list">
                                    <li>
                                        <span>Call Anytime</span>
                                        <p><a className='dark:text-white' href="tel:13077760608">+ 1 (307) 776-0608</a></p>
                                    </li>
                                    <li>
                                        <span>Send Email</span>
                                        <p><a className='dark:text-white' href="mailto:needhelp@company.com">needhelp@company.com</a></p>
                                    </li>
                                    <li>
                                        <span>Visit Office</span>
                                        <p className='dark:text-white'>80 Broklyn Road Street <br /> New York. USA</p>
                                    </li>
                                </ul>
                                <div className="contact-page-details__social">
                                    <a href="twitter.com"><i className="fab fa-twitter"></i></a>
                                    <a href="facebook.com"><i className="fab fa-facebook"></i></a>
                                    <a href="pinterest.com"><i className="fab fa-pinterest-p"></i></a>
                                    <a href="instagram"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--Contact Page Details End--> */}
            {/*  <!--contact Page Start--> */}
            <section className="contact-page dark:bg-dark-variant">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="section-title__tagline">Contact with us</span>
                        <h2 className="section-title__title dark:text-white">Drop us a Message</h2>
                    </div>
                    <div className="row-contactus-msg">
                        <div className="col-xl-12-contactUs">
                            <div className="contact-page__form">
                                <form action="assets/inc/sendemail.php" className="comment-one__form contact-form-validated" novalidate="novalidate">
                                    <div className="row-contact-form">
                                        <div className="col-xl-6-contact-form">
                                            <div className="comment-form__input-box">
                                                <input className='dark:contactusdarkform' type="text" placeholder="Your Name" name="name" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6-contact-form">
                                            <div className="comment-form__input-box">
                                                <input className='dark:contactusdarkform' type="email" placeholder="Email Address" name="email" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6-contact-form">
                                            <div className="comment-form__input-box">
                                                <input className='dark:contactusdarkform' type="text" placeholder="Phone Number" name="phone" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6-contact-form">
                                            <div className="comment-form__input-box">
                                                <input className='dark:contactusdarkform' type="email" placeholder="Subject" name="Subject" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row-contact-form text-center">
                                        <div className="col-xl-12-textarea">
                                            <div className="comment-form__input-box">
                                                <textarea className='dark:contactusdarkform' name="message" placeholder="Write a Message"></textarea>
                                            </div>
                                            <button type="submit" className="thm-btn comment-form__btn mt-3">send a message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--contact Page End--> */}
            <Footer />
        </>
    );
};

export default ContactUs;