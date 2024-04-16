import React, { Fragment } from 'react';
import { Link, NavLink, useRouteMatch, Switch, Route } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';

import logos from '../../../images/Ionic-Wealth-Logo-1000px-BLACK.png';
import useAuthContexts from '../../../Hooks/Firebase/useAuthContexts';
import {
    RiDashboardFill,
    RiShoppingCartFill,
    RiMessage2Fill,
    RiSecurePaymentFill,
    RiFileEditFill,
    RiListUnordered,
    RiPlayListAddFill,
    RiUserAddFill,
    RiHome8Fill,
    RiLogoutBoxLine,
} from 'react-icons/ri';

import ClientAgreement from '../ClientAgreement/ClientAgreement';
import DataProtection from '../DataProtection/DataProtection';
import AddReview from '../AddReview/AddReview';
import Questions from '../Questions/Questions';

import MakeAdmin from '../MakeAdmin/MakeAdmin';

import DashboardHome from '../DashboardHome/DashboardHome';
import HeaderNavbar from '../../Shared/Header/HeaderNavbar/HeaderNavbar';


import UploadDocument from '../UploadDocument/UploadDocument';

import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './Dashboard.css'
import { Redirect } from 'react-router-dom';
import PreLoader from '../../Shared/PreLoader/PreLoader';




const Dashboard = () => {
    const location = useLocation();
    const history = useHistory();
    const { user, isAdmin, logOut } = useAuthContexts();
    let { path, url } = useRouteMatch();

    // dashboard nav link active style
    const linkActiveStyle = {
        // background: 'white',
        color: '#fff',
    };



    return (
        <>


            <div className="dashboard-wrapper min-h-vh-100 flex flex-nowrap ">
                <div className="dashboard-sidebar dashboard-sidebar-bg-clr  flex-shrink-0 shadow-my-around py-4 lg:py-8 px-2 lg:px-4 xl:px-6" >
                    <div className="logo-wrapper flex-shrink-0 justify-items-center hidden md:block ">
                        <Link to="/home">
                            <img src={logos} alt="Agency logo" className="w-40 mb-12 mx-4" />
                        </Link>
                    </div>
                    <ul className="dashboard-menu text-color-menu-link flex flex-col -mt-2">
                        <li className="border-b">
                            <NavLink
                                to="/home"
                                title="Home"
                                activeStyle={linkActiveStyle}
                                className="dashboard-menu-link"
                            >
                                <span className="text-2xl">
                                    <RiHome8Fill />
                                </span>
                                <span className="hidden md:block pl-3">Home</span>
                            </NavLink>
                        </li>

                        {!isAdmin && (
                            <>
                                <li>
                                    <NavLink
                                        exact
                                        to={`${url}`}
                                        title="Dashboard home"
                                        activeStyle={linkActiveStyle}
                                        className={`${isAdmin ? 'hidden' : 'dashboard-menu-link'}`}
                                    >
                                        <span className="text-2xl">
                                            <RiDashboardFill />
                                        </span>
                                        <span className="hidden md:block pl-3">Dashboard</span>
                                    </NavLink>
                                </li>
                                <li className="border-t">
                                    <NavLink
                                        to={`${url}/add-review`}
                                        title="Review"
                                        activeStyle={linkActiveStyle}
                                        className={`${isAdmin ? 'hidden' : 'dashboard-menu-link'}`}
                                    >
                                        <span className="text-2xl">
                                            <RiMessage2Fill />
                                        </span>
                                        <span className="hidden md:block pl-3">Review Form</span>
                                    </NavLink>
                                </li>

                                <li className="border-t">
                                    <NavLink
                                        to={`${url}/upload-document`}
                                        title="Upload Document"
                                        activeStyle={linkActiveStyle}
                                        className={`${isAdmin ? 'hidden' : 'dashboard-menu-link'}`}
                                    >
                                        <span className="text-2xl">
                                            <RiSecurePaymentFill />
                                        </span>
                                        <span className="hidden md:block pl-3">Upload your document</span>
                                    </NavLink>
                                </li>


                            </>
                        )}


                        <li className="border-t">
                            <button
                                onClick={() => logOut(location, history)}
                                title="Logout"
                                className="dashboard-menu-link"
                            >
                                <span className="text-2xl">
                                    <RiLogoutBoxLine />
                                </span>
                                <span className="hidden md:block pl-3">Logout</span>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="dashboard-content flex-grow bg-white shadow-my-around" style={{ backgroundColor: "#f3f3f9" }}
                // style={{
                //     backgroundImage: "url(" + dbBg + ")"
                // }}
                >
                    <header className="dashboard-header navbar static mb-4">
                        <div className="px-4 w-full flex items-center justify-between">
                            <h2 className="flex-grow pl-8 truncate text-blue-500 text-right md:text-center sm:text-lg tracking-normal md:text-xl lg:text-2xl">
                                Welcome To Dashboard
                            </h2>
                        </div>
                    </header>
                    <div className="lg:container p-0 lg:p-8 w-full">
                        <Switch>
                            <Route exact path={`${path}`}>
                                {/* {(isAdmin ? (<Redirect to="admindashboard" />) : (<PreLoader />))} */}
                                {(isAdmin && (<Redirect to="admindashboard" />))}
                                {(!isAdmin && <DashboardHome />)}
                            </Route>

                            <Route path={`${path}/client-agreement`}>
                                <ClientAgreement />
                            </Route>
                            <Route path={`${path}/add-review`}>
                                <AddReview />
                            </Route>
                            <Route path={`${path}/upload-document`}>
                                <UploadDocument />
                            </Route>
                            <Route path={`${path}/questions`}>
                                <Questions />
                            </Route>

                        </Switch>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Dashboard;