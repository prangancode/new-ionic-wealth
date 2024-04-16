import React from 'react';
import bg3 from '../../../images/background/IW-Image-bg3.jpg';
import './GetInTouch.css'
import { UserIcon, DeviceMobileIcon, MailIcon, CheckIcon, UploadIcon, PencilAltIcon } from '@heroicons/react/solid'
import { CheckCircleIcon } from '@heroicons/react/solid'

const GetInTouch = () => {
    return (
        <>
            <div className="section-full-getintouch overlay-black-dark-getintouch bg-img-fix-getintouch" style={{ backgroundImage: "url(" + bg3 + ")" }}>

                <div className="container">
                    <div className="flex-getintouch">
                        <div className="col-md-5-getintouch content-inner-getintouch chosesus-content text-white mr-10">
                            <h2 className="box-title mb-10 " >Let's get in touch<span className="bg-primary-getintouch"></span></h2>
                            <p className="font-16 op8" >Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.</p>
                            <h3 className="getintouch-info" >By 700+ customers for 3200+ Web and Mobile App development projects.</h3>
                            <h4 className="text-white" >& What you will get:</h4>
                            <ul className="list-checked-getintouch primary " >
                                <li className='flex-list-checked items-center '><CheckCircleIcon className='h-8 w-8 mr-2 text-blue-500' /><span>Contrary to popular belief, Lorem Ipsum is not simply</span></li>
                                <li className='flex-list-checked items-center '><CheckCircleIcon className='h-8 w-8 mr-2 text-blue-500' /><span>Random text. It has roots in a piece of classical Latin literature</span></li>
                                <li className='flex-list-checked items-center '><CheckCircleIcon className='h-8 w-8 mr-2 text-blue-500' /><span>Latin professor at Hampden-Sydney College in Virginia</span></li>
                            </ul>
                        </div>
                        <div className="col-lg-7-getintouch mb-20">
                            <form className="inquiry-form  dzForm outline-none dark:bg-slate-900">
                                <div className="dzFormMsg"></div>
                                <h3 className="box-title-getintouch mt-0 mb-10 text-4xl dark:text-white">Let's Convert Your Idea into Reality <span className="bg-primary-getintouch"></span></h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                                <div className="flex-form-getintouch flex-wrap">
                                    <div className="col-lg-6-getintouch-form">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <span className="input-group-addon dark:bg-slate-900"><UserIcon className='h-8 w-8' /></span>
                                                <input name="dzName" type="text" required className="form-control outline-none dark:bg-slate-900" placeholder="First Name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6-getintouch-form">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <span className="input-group-addon dark:bg-slate-900"><DeviceMobileIcon className='h-8 w-8' /></span>
                                                <input name="dzOther[Phone]" type="text" required className="form-control outline-none dark:bg-slate-900" placeholder="Phone" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12-getintouch-form">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <span className="input-group-addon dark:bg-slate-900"><MailIcon className='h-8 w-8' /></span>
                                                <input name="dzEmail" type="email" className="form-control outline-none dark:bg-slate-900" required placeholder="Your Email Id" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6-getintouch-form">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <span className="input-group-addon dark:bg-slate-900"><CheckIcon className='h-8 w-8' /></span>
                                                <input name="dzOther[Subject]" type="text" required className="form-control outline-none dark:bg-slate-900" placeholder="Upload File" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6-getintouch-form">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <span className="input-group-addon dark:bg-slate-900"><UploadIcon className='h-8 w-8' /></span>
                                                <input name="dzOther[Subject]" type="text" required className="form-control outline-none dark:bg-slate-900" placeholder="Upload File" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12-getintouch-form">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <span className="input-group-addon dark:bg-slate-900"><PencilAltIcon className='h-8 w-8' /></span>
                                                <textarea name="dzMessage" rows="4" className="form-control outline-none dark:bg-slate-900" required placeholder="Tell us about your project or idea"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-12-getintouch-form">
                        <div className="form-group">
                            <div className="input-group">
                                <div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                                <input className="form-control d-none outline-none" data-recaptcha="true" required data-error="Please complete the Captcha" />
                            </div>
                        </div>
                    </div> */}
                                    <div className="col-lg-12-getintouch-form">
                                        <button name="submit" type="submit" value="Submit" className="site-button button-lg"> <span>Get A Free Quote!</span> </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default GetInTouch;