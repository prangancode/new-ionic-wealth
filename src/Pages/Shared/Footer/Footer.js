import React from 'react';
import { Link } from 'react-router-dom';
import { LocationMarkerIcon, PhoneIcon, InboxInIcon } from '@heroicons/react/solid'


import "./Footer.css"

const Footer = () => {
    return (
        <>
            <footer className="site-footer">
                <div className="footer-top footer-bg">
                    <div className="container" >
                        <div className="row-footer">
                            <div className="footer-col-5 footer-col-lg-2 col-md-6 col-sm-6 footer-col-4">
                                <div className="widget widget_services border-0">
                                    <h5 className="mb-8 text-white">Company</h5>
                                    <ul>
                                        <li><Link to={"#"}>About Us </Link></li>
                                        <li><Link to={"#"}>Home </Link></li>
                                        <li><Link to={"#"}>Contact Us</Link></li>
                                        <li><Link to={"#"}>About Us</Link></li>
                                        <li><Link to={"#"}>Our Services</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-col-7 footer-col-lg-2 col-md-6 col-sm-6 footer-col-4">
                                <div className="widget widget_services border-0">
                                    <h5 className="mb-8 text-white">Useful Link</h5>
                                    <ul>
                                        <li><Link to={"#"}>Create Account</Link></li>
                                        <li><Link to="/privacy-policy">Privacy Policy </Link></li>
                                        <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
                                        <li><Link to={"#"}>Portfolio</Link></li>
                                        <li><Link to={"#"}>Project Details</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-col-lg-4 footer-col-4">
                                <div className="widget widget_getintuch">
                                    <h5 className="mb-8 text-white ">Contact us</h5>
                                    <ul>
                                        <li className='flex items-center justify-center'><span><LocationMarkerIcon className="h-8 w-8 text-blue-500" /></span><strong>address</strong> #8901 Marmora Road Chi Minh City, Vietnam </li>
                                        <li><span><PhoneIcon className="h-8 w-8 text-blue-500" /></span><strong>phone</strong>0800-123456 (24/7 Support Line)</li>
                                        <li><span><InboxInIcon className="h-8 w-8 text-blue-500" /></span><strong>email</strong>info@example.com</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-col-lg-4 footer-col-4 ">
                                <div className="widget">
                                    <h5 className="mb-8 text-white">Subscribe To Our Newsletter</h5>
                                    <p className="mb-6">If you have any questions, you can contact with us so that we can give you a satisfying answer. Subscribe to our newsletter to get our latest products.</p>
                                    <div className="subscribe-form mb-6">
                                        <form className="dzSubscribe" action="script/mailchamp.php" method="post">
                                            <div className="dzSubscribeMsg"></div>
                                            <div className="input-group">
                                                <input name="dzEmail" required="required" className="form-control" placeholder="Your Email Id" type="email" />
                                                <span className="input-group-btn">
                                                    <button name="submit" value="Submit" type="submit" className="site-button">Subscribe</button>
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                    <ul className="list-inline flex m-0">
                                        <li><Link to={"#"} className="site-button facebook circle mr-1"><i className="fa fa-facebook"></i></Link></li>
                                        <li><Link to={"#"} className="site-button google-plus circle mr-1"><i className="fa fa-google-plus"></i></Link></li>
                                        <li><Link to={"#"} className="site-button linkedin circle mr-1"><i className="fa fa-linkedin"></i></Link></li>
                                        <li><Link to={"#"} className="site-button instagram circle mr-1"><i className="fa fa-instagram"></i></Link></li>
                                        <li><Link to={"#"} className="site-button twitter circle mr-1"><i className="fa fa-twitter"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom footer-bg-bottom">
                    <div className="container">
                        <div className="row-footer">
                            <div className="footer-bottom-col-lg-6 col-md-6 col-sm-6 text-left "> <span>Copyright © 2021 </span> </div>
                            <div className="footer-bottom-col-lg-6 col-md-6 col-sm-6 text-right ">
                                <div className="widget-link ">
                                    <ul className='flex justify-end'>
                                        <li><Link to={"#"}> Help Desk / </Link></li>
                                        <li className="ml-1"><Link to={"#"}> Privacy Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;