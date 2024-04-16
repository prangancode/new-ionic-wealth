import React, { useState } from 'react';
import ContentCA from './ContentCA';
import ContentDP from './ContentDP';
import ContentQA from './ContentQA';
import ContentTable from './ContentTable';
import ContentUser from './ContentUser';
import './DashboardHome.css';


const DashboardHome = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <>

            {/* <div className="dashboard-wrapper flex flex-nowrap space-x-2 md:space-x-4 xl:space-x-2 py-4 lg:py-8 lg:px-6">
                <div className="dashboard-sidebar flex-shrink-0 h-full bg-white rounded-md py-4 lg:py-8 px-2 lg:px-4 xl:px-6">
                    <ul className="dashboard-menu flex flex-col -mt-2">
                        <li >
                            <button className={toggleState === 1 ? "tabs-dashboard-user active-tabs-dashboard-user" : "tabs-dashboard-user"}
                                onClick={() => toggleTab(1)}>
                                User Information <span><i className="far fa-angle-right" /></span></button>
                        </li>
                        <li >
                            <button className={toggleState === 2 ? "tabs-dashboard-user active-tabs-dashboard-user" : "tabs-dashboard-user"}
                                onClick={() => toggleTab(2)}>
                                Client Agreement <span><i className="far fa-angle-right" /></span></button>
                        </li>
                        <li >
                            <button className={toggleState === 3 ? "tabs-dashboard-user active-tabs-dashboard-user" : "tabs-dashboard-user"}
                                onClick={() => toggleTab(3)}>
                                Data Protection <span><i className="far fa-angle-right" /></span></button>
                        </li>
                        <li >
                            <button className={toggleState === 4 ? "tabs-dashboard-user active-tabs-dashboard-user" : "tabs-dashboard-user"}
                                onClick={() => toggleTab(4)}>
                                Questions <span><i className="far fa-angle-right" /></span></button>
                        </li>
                        <li >
                            <button className={toggleState === 5 ? "tabs-dashboard-user active-tabs-dashboard-user" : "tabs-dashboard-user"}
                                onClick={() => toggleTab(5)}>
                                Investment Details <span><i className="far fa-angle-right" /></span></button>
                        </li>
                    </ul>
                </div>
                <div className="dashboard-content flex-grow ">
                    
                    <div className="lg:container m-0 lg:m-0 p-0 lg:p-0">
                        <div className={toggleState === 1 ? "  active-content-services" : "content-services"}>
                            <ContentUser />
                        </div>
                        <div className={toggleState === 2 ? "  active-content-services bg-white rounded-md py-4 lg:py-8 px-2 lg:px-4 xl:px-6" : "content-services "}>
                            <ContentCA />
                        </div>
                        <div className={toggleState === 3 ? "  active-content-services bg-white rounded-md py-4 lg:py-8 px-2 lg:px-4 xl:px-6" : "content-services"}>
                            <ContentDP />
                        </div>
                        <div className={toggleState === 4 ? "  active-content-services bg-white rounded-md py-4 lg:py-8 px-2 lg:px-4 xl:px-6" : "content-services"}>
                            <ContentQA />
                        </div>
                        <div className={toggleState === 5 ? "  active-content-services bg-gray-100 rounded-md py-4 lg:py-8 px-2 lg:px-4 xl:px-6" : "content-services"}>
                            <ContentTable />
                        </div>
                    </div>






                </div>

            </div> */}

            <div class="mb-12 border-b border-gray-200 dark:border-gray-700">
                <ul class="flex flex-wrap 2xl:w-3/4 2xl:mx-auto -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                    <li >
                        <button className={toggleState === 1 ? "inline-block p-4 rounded-t-lg border-b-2  border-blue-600 dark:border-blue-500 active-tabs-dashboard-user" : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"}
                            onClick={() => toggleTab(1)}>
                            User Information <span><i className="far fa-angle-right" /></span></button>
                    </li>
                    <li >
                        <button className={toggleState === 2 ? "inline-block p-4 rounded-t-lg border-b-2 border-blue-600 dark:border-blue-500 active-tabs-dashboard-user" : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"}
                            onClick={() => toggleTab(2)}>
                            Client Agreement Document <span><i className="far fa-angle-right" /></span></button>
                    </li>
                    <li >
                        <button className={toggleState === 3 ? "inline-block p-4 rounded-t-lg border-b-2 border-blue-600 dark:border-blue-500 active-tabs-dashboard-user" : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"}
                            onClick={() => toggleTab(3)}>
                            GDPR Data Protection <span><i className="far fa-angle-right" /></span></button>
                    </li>
                    <li >
                        <button className={toggleState === 4 ? "inline-block p-4 rounded-t-lg border-b-2 border-blue-600 dark:border-blue-500 active-tabs-dashboard-user" : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"}
                            onClick={() => toggleTab(4)}>
                            Risk Profiler Questions <span><i className="far fa-angle-right" /></span></button>
                    </li>
                    <li >
                        <button className={toggleState === 5 ? "inline-block p-4 rounded-t-lg border-b-2 border-blue-600 dark:border-blue-500 active-tabs-dashboard-user" : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"}
                            onClick={() => toggleTab(5)}>
                            Investment Details <span><i className="far fa-angle-right" /></span></button>
                    </li>

                </ul>
            </div>
            <div id="myTabContent">
                <div className="dashboard-content flex-grow ">

                    <div className="lg:container m-0 lg:m-0 p-0 lg:p-0">
                        <div className={toggleState === 1 ? "  active-content-services" : "content-services"}>
                            <ContentUser />
                        </div>
                        <div className={toggleState === 2 ? "  active-content-services bg-white rounded-md py-4 lg:py-8 px-2 lg:px-4 xl:px-6" : "content-services "}>
                            <ContentCA />
                        </div>
                        <div className={toggleState === 3 ? "  active-content-services bg-white rounded-md py-4 lg:py-8 px-2 lg:px-4 xl:px-6" : "content-services"}>
                            <ContentDP />
                        </div>
                        <div className={toggleState === 4 ? "  active-content-services bg-white rounded-md py-4 lg:py-8 px-2 lg:px-4 xl:px-6" : "content-services"}>
                            <ContentQA />
                        </div>
                        <div className={toggleState === 5 ? "  active-content-services bg-gray-100 rounded-md py-4 lg:py-8 px-2 lg:px-4 xl:px-6" : "content-services"}>
                            <ContentTable />
                        </div>
                    </div>






                </div>
            </div>



        </>
    );
};

export default DashboardHome;