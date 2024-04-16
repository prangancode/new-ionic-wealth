import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./HeaderNavbar.css";
// import logo from '../../../../images/logo.png';
import MainMenu from '../MainMenu/MainMenu';
import MobileMenu from '../MobileMenu/MobileMenu';
import { RiLock2Line } from 'react-icons/ri';
import logos from '../../../../images/Ionic-Wealth-Logo-1000px-LIGHT.png';
import logos1 from '../../../../images/Ionic Wealth adobe-1.png';
import { PhoneIcon, LocationMarkerIcon, AtSymbolIcon, ChatAltIcon } from '@heroicons/react/solid'

const HeaderNavbar = () => {

    const [stickyClass, setStickyClass] = useState('relative');

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);

        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 200 ? setStickyClass('fixed top-0 left-0 z-50 opacity-90 animated slideInDown') : setStickyClass('relative');
        }
    };


    // nav link active style
    const navLinkActiveStyle = {
        color: 'var(--clr-primary-dark)',
        backgroundColor: 'transparent'
    }


    return (
        <>
            <div style={{ backgroundColor: "#405189" }} className="top-bar hidden lg:inline-flex">
                <div className="container">
                    <div className="flex justify-evenly items-center">
                        <div className="dlab-topbar-left">
                            <ul className="flex">
                                <li className='flex items-center mr-10'><PhoneIcon className=" h-5 w-5 mr-1" aria-hidden="true" /> 001 1234 6789</li>
                                <li className='flex items-center mr-10'><LocationMarkerIcon className=" h-5 w-5 mr-1" aria-hidden="true" /> 145 St Vincent Street, Glasgow, G2 5JF</li>
                            </ul>
                        </div>
                        <div className="dlab-topbar-right">
                            <ul className='flex'>
                                <li className='flex items-center mr-10'><ChatAltIcon className=" h-5 w-5 mr-1" aria-hidden="true" /> ionic.wealth</li>
                                <li className='flex items-center mr-10'><AtSymbolIcon className=" h-5 w-5 mr-1" aria-hidden="true" /> iw@example.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <header id="header_main" className={`navbar dark:bg-dark-variant nav-animation ${stickyClass}`}>
                <div className="container flex items-center justify-between relative">
                    <div className="logo-wrapper flex-shrink-0 w-28 md:w-36">
                        <Link to="/home">
                            <img src={logos} alt="Ionic Wealth logo" className="" />
                        </Link>
                    </div>
                    {/* <div className="flex-shrink-0 md:ml-12 h-100 border-l border-r px-2 md:px-3 text-center flex flex-col justify-center font-my-title">
                    {!user.email ? (
                        <NavLink
                            to="/login"
                            activeStyle={navLinkActiveStyle}
                            className="uppercase font-semibold text-base text-my-dark-gray hover:text-my-primary"
                        >
                            <RiLock2Line className="mx-auto text-my-primary" />
                            Login
                        </NavLink>
                    ) : (
                        <div>
                            <p className="normal-case text-true-gray-500 text-sm w-20 truncate">
                                {user?.displayName}
                            </p>
                            <button
                                className="uppercase font-semibold text-base leading-none text-my-dark-gray hover:text-my-primary"
                                onClick={logOut}
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div> */}
                    <div className="hidden lg:block flex-grow">
                        <MainMenu />
                    </div>
                    <div className="lg:hidden inline-flex items-center">
                        <MobileMenu />
                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderNavbar;