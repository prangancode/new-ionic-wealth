import React, { useState } from 'react';
import './HomeTab.css'
import pic5 from './../../../images/our-work/pic6.jpg';
import pic6 from './../../../images/our-work/pic7.jpg';
import { CheckCircleIcon } from '@heroicons/react/solid'
const Para = () => {
    return (
        <>
            <div className="about-box-hometab text-gray-600 dark:bg-slate-900 ">
                <p className='dark:text-white about-box-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </>
    )
}
const HomeTab = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <>
            <div className="container">
                <div className="bloc-tabs">
                    <button
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}
                    >
                        Cost Effectiveness
                    </button>
                    <button
                        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(2)}
                    >
                        Flexible Engagement Models
                    </button>
                    <button
                        className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(3)}
                    >
                        Technology Expertization
                    </button>
                    <button
                        className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(4)}
                    >
                        Pre-Built Packages
                    </button>
                </div>

                <div className="content-tabs chooseus-content">
                    <div
                        className={toggleState === 1 ? "content  active-content" : "content"}
                    >
                        <div className="row-hometab p-tb50 ">
                            <div className="col-lg-6-hometab m-b10  about-img " >
                                <img src={pic5} alt="" />
                            </div>
                            <div className="col-lg-6-hometab">
                                <div className="p-l30 text-white" >
                                    <h4 className="font-weight-300 text-white">Project Cost Effectiveness</h4>
                                    <ul className="list-checked primary">
                                        <li className='flex items-center'><CheckCircleIcon className='w-8 h-8 mr-3 text-blue-500' /><span>Contrary to popular belief, Lorem Ipsum is not simply</span></li>
                                        <li className='flex items-center'><CheckCircleIcon className='w-8 h-8 mr-3 text-blue-500' /><span>Random text. It has roots in a piece of classical Latin literature</span></li>
                                        <li className='flex items-center'><CheckCircleIcon className='w-8 h-8 mr-3 text-blue-500' /><span>Latin professor at Hampden-Sydney College in Virginia</span></li>
                                    </ul>
                                    <Para />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={toggleState === 2 ? "content  active-content" : "content"}
                    >
                        <div className="row-hometab p-tb50 ">
                            <div className="col-lg-6-hometab m-b10  about-img " >
                                <img src={pic6} alt="" />
                            </div>
                            <div className="col-lg-6-hometab ">
                                <div className="p-l30 text-white " >
                                    <h4 className="font-weight-300 text-white">Flexible Engagement Models</h4>
                                    <ul className="list-checked primary">
                                        <li className='flex items-center'><CheckCircleIcon className='w-8 h-8 mr-3 text-blue-500' /><span>Contrary to popular belief, Lorem Ipsum is not simply</span></li>
                                        <li className='flex items-center'><CheckCircleIcon className='w-8 h-8 mr-3 text-blue-500' /><span>Random text. It has roots in a piece of classical Latin literature</span></li>
                                        <li className='flex items-center'><CheckCircleIcon className='w-8 h-8 mr-3 text-blue-500' /><span>Latin professor at Hampden-Sydney College in Virginia</span></li>
                                    </ul>
                                    <Para />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={toggleState === 3 ? "content  active-content" : "content"}
                    >
                        <div className="row-hometab p-tb50 ">
                            <div className="col-lg-6-hometab m-b10  about-img " >
                                <img src={pic5} alt="" />
                            </div>
                            <div className="col-lg-6-hometab e">
                                <div className="p-l30 text-white " >
                                    <h4 className="font-weight-300 text-white">Technology Expertization</h4>
                                    <ul className="list-checked primary">
                                        <li className='flex items-center'><CheckCircleIcon className='w-8 h-8 mr-3 text-blue-500' /><span>Contrary to popular belief, Lorem Ipsum is not simply</span></li>
                                        <li className='flex items-center'><CheckCircleIcon className='w-8 h-8 mr-3 text-blue-500' /><span>Random text. It has roots in a piece of classical Latin literature</span></li>
                                        <li className='flex items-center'><CheckCircleIcon className='w-8 h-8 mr-3 text-blue-500' /><span>Latin professor at Hampden-Sydney College in Virginia</span></li>
                                    </ul>
                                    <Para />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={toggleState === 4 ? "content  active-content" : "content"}
                    >
                        <div className="row-hometab p-tb50 ">
                            <div className="col-lg-6-hometab m-b10  about-img " >
                                <img src={pic6} alt="" />
                            </div>
                            <div className="col-lg-6-hometab ">
                                <div className="p-l30 text-white " >
                                    <h4 className="font-weight-300 text-white">Pre-Built Packages</h4>
                                    <ul className="list-checked primary">
                                        <li className='flex items-center'><CheckCircleIcon className='w-8 h-8 mr-3 text-blue-500' /><span>Contrary to popular belief, Lorem Ipsum is not simply</span></li>
                                        <li className='flex items-center'><CheckCircleIcon className='w-8 h-8 mr-3 text-blue-500' /><span>Random text. It has roots in a piece of classical Latin literature</span></li>
                                        <li className='flex items-center'><CheckCircleIcon className='w-8 h-8 mr-3 text-blue-500' /><span>Latin professor at Hampden-Sydney College in Virginia</span></li>
                                    </ul>
                                    <Para />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeTab;