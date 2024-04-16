import React from 'react';
import logo from '../../../images/Ionic-Wealth-Logo-1000px-BLACK.png'
import { NavLink, useRouteMatch, Switch, Route } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import dbBg from '../../../images/background/Dashboard-bg.jpg';
import useAuthContexts from '../../../Hooks/Firebase/useAuthContexts';
import {
    RiDashboardFill,
    RiFileEditFill,
    RiHome8Fill,
    RiUserAddFill,
    RiLogoutBoxLine,
} from 'react-icons/ri';


import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageDocuments from '../ManageDocuments/ManageDocuments';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import AdminDashboard from '../AdminDashboard/AdminDashboard';
import { Link } from 'react-router-dom';



const MainAdminDashboard = () => {

    const location = useLocation();
    const history = useHistory();
    const { logOut, user } = useAuthContexts();
    let { path, url } = useRouteMatch();

    // dashboard nav link active style
    const linkActiveStyle = {
        background: 'var(--clr-primary)',
        color: 'white',
    };

    return (
        <>
            <header className="dashboard-header navbar static bg-slate-50 shadow-xl">
                <div className="px-4 w-full flex items-center justify-between">
                    <div className="logo-wrapper flex-shrink-0 w-28 md:w-36">
                        <Link to="/home">
                            <img src={logo} alt="CarRev" className="w-full" />
                        </Link>
                    </div>
                    <h2 className="flex items-center  text-right md:text-center sm:text-lg tracking-normal md:text-xl lg:text-2xl">
                        <span className='mr-4 underline underline-offset-2 text-sky-500'>
                            {user?.displayName}
                        </span>

                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                        </span>

                    </h2>
                </div>
            </header>
            <div className="dashboard-wrapper bg-[#f1f9fe] min-h-vh-100  flex flex-nowrap space-x-2 md:space-x-4 xl:space-x-10 py-4 lg:py-8">
                <div className="dashboard-sidebar flex-shrink-0  shadow-my-around py-4 lg:py-8 px-2 lg:px-4 xl:px-6 bg-[#f1f9fe]">
                    <ul className="dashboard-menu flex flex-col -mt-2">
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

                        {


                            <>
                                <li>
                                    <NavLink
                                        exact
                                        to={`${url}`}
                                        title="Dashboard home admin"
                                        activeStyle={linkActiveStyle}
                                        className="dashboard-menu-link"
                                    >
                                        <span className="text-2xl">
                                            <RiDashboardFill />
                                        </span>
                                        <span className="hidden md:block pl-3">Admin Dashboard</span>
                                    </NavLink>
                                </li>
                                <li className="border-t">
                                    <NavLink
                                        to={`${url}/manage-documents`}
                                        title="Manage all orders"
                                        activeStyle={linkActiveStyle}
                                        className="dashboard-menu-link"
                                    >
                                        <span className="text-2xl">
                                            <RiFileEditFill />
                                        </span>
                                        <span className="hidden md:block pl-3">
                                            Manage All Documents
                                        </span>
                                    </NavLink>
                                </li>
                                <li className="border-t">
                                    <NavLink
                                        to={`${url}/make-admin`}
                                        title="Make admin"
                                        activeStyle={linkActiveStyle}
                                        className="dashboard-menu-link"
                                    >
                                        <span className="text-2xl">
                                            <RiUserAddFill />
                                        </span>
                                        <span className="hidden md:block pl-3">Make Admin</span>
                                    </NavLink>
                                </li>
                            </>

                        }

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
                <div className="dashboard-content flex-grow bg-white shadow-my-around py-4 lg:py-8 px-2 lg:px-4 xl:px-6" style={{
                    backgroundImage: "url(" + dbBg + ")"
                }}>
                    <div className="lg:container m-0 lg:m-0 p-0 lg:p-0">
                        <Switch>

                            <>
                                <Route exact path={`${path}`}>
                                    <AdminDashboard />
                                </Route>
                                <Route path={`${path}/make-admin`}>
                                    <MakeAdmin />
                                </Route>
                                <Route path={`${path}/manage-documents`}>
                                    <ManageDocuments />
                                </Route>
                            </>

                        </Switch>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MainAdminDashboard;