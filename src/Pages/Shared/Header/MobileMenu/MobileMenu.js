import React, { Fragment } from 'react';
import { slide as Menus } from 'react-burger-menu';
import './MobileMenu.css';
import { NavLink } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, HomeIcon } from '@heroicons/react/solid'
// import MainMenu from '../MainMenu/MainMenu';
import { FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logos from "../../../../images/Ionic-Wealth-Logo-1000px-LIGHT.png"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const MobileMenu = () => {
    const navLinkActiveStyle = {
        color: 'var(--clr-primary-dark)',
        backgroundColor: 'transparent'
    };
    return (
        <>
            {/* <div className="extra-cell">
                <Link to='./contact' className="dez-page site-buttonmobile">Inquire Now </Link>
            </div> */}
            <Menus width={'260px'} customCrossIcon={<FiX />}>
                <div className="logo-wrapper flex-shrink-0 w-28 md:w-36">
                    <Link to="/home">
                        <img src={logos} alt="Agency logo" className="w-full m-4" />
                    </Link>
                </div>
                {/* <MainMenu /> */}
                <ul className="h-full w-full flex flex-col md:flex-row md:items-center md:justify-end md:pl-4 space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 font-normal md:font-medium text-base md:text-sm lg:text-my-sm text-black md:text-my-dark-gray tracking-wide md:tracking-wide lg:tracking-my-tiny mt-16 ">
                    <li>
                        <NavLink
                            to="/home"
                            activeStyle={navLinkActiveStyle}
                            className="hover:text-my-primary flex items-center bg-white p-3 border-t-2 border-gray-200"
                        >
                            <HomeIcon className=" h-5 w-5 mr-1" aria-hidden="true" /> Home
                        </NavLink>
                    </li>
                    <Menu as="li" style={{ marginTop: "auto" }}>
                        <Menu.Button as="Navlink"

                            activeStyle={navLinkActiveStyle}
                            className="hover:text-my-primary flex items-center justify-between cursor-pointer bg-white p-3 border-t-2 border-gray-200"
                        >
                            Our Services  <span><ChevronDownIcon className=" h-5 w-5" aria-hidden="true" /></span>
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-180"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-85"
                            leaveFrom="transform opacity-100 scale-150"
                            leaveTo="transform opacity-0 scale-100"
                        >
                            <Menu.Items className="origin-top-right mt-auto w-full shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ">
                                <div className="py-5 border-t-4 border-t-blue-400">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/allservices"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-my-primary' : 'text-gray-700',
                                                    'block px-4 text-base py-2'
                                                )}
                                            >
                                                Investment & Savings
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/allservices"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-my-primary' : 'text-gray-700',
                                                    'block px-4 py-2 text-base'
                                                )}
                                            >
                                                Life Assurance
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/allservices"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-my-primary' : 'text-gray-700',
                                                    'block px-4 py-2 text-base'
                                                )}
                                            >
                                                Mortgages
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/allservices"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-my-primary' : 'text-gray-700',
                                                    'block px-4 py-2 text-base'
                                                )}
                                            >
                                                Estate Planning
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/allservices"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-my-primary' : 'text-gray-700',
                                                    'block px-4 py-2 text-base'
                                                )}
                                            >
                                                Corporate Advice
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>

                    <li style={{ marginTop: "auto" }}>
                        <NavLink
                            to="/home"
                            activeStyle={navLinkActiveStyle}
                            className="hover:text-my-primary flex items-center bg-white p-3 border-t-2 border-gray-200"
                        >
                            Partnership
                        </NavLink>
                    </li>

                    <li style={{ marginTop: "auto" }}>
                        <NavLink
                            to="/testimonial"
                            activeStyle={navLinkActiveStyle}
                            className="hover:text-my-primary flex items-center bg-white p-3 border-t-2 border-gray-200"
                        >
                            Testimonial
                        </NavLink>
                    </li>
                    <li style={{ marginTop: "auto" }}>
                        <NavLink
                            to="/contactus"
                            activeStyle={navLinkActiveStyle}
                            className="hover:text-my-primary flex items-center bg-white p-3 border-t-2 border-gray-200"
                        >
                            Contact Us
                        </NavLink>
                    </li>

                    <Menu as="li" style={{ marginTop: "auto" }}>
                        <Menu.Button as="Navlink"

                            activeStyle={navLinkActiveStyle}
                            className="hover:text-my-primary flex justify-between items-center cursor-pointer bg-white p-3 border-t-2 border-gray-200"
                        >
                            Client  <span><ChevronDownIcon className=" h-5 w-5" aria-hidden="true" /></span>
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-180"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-85"
                            leaveFrom="transform opacity-100 scale-150"
                            leaveTo="transform opacity-0 scale-100"
                        >
                            <Menu.Items className="origin-top-right mt-auto w-full shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-5 border-t-4 border-t-blue-400">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/home"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-my-primary' : 'text-gray-700',
                                                    'block px-4 text-base py-2'
                                                )}
                                            >
                                                Account settings
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/home"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-my-primary' : 'text-gray-700',
                                                    'block px-4 py-2 text-base'
                                                )}
                                            >
                                                Support
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/home"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-my-primary' : 'text-gray-700',
                                                    'block px-4 py-2 text-base'
                                                )}
                                            >
                                                Private Policy
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>

                </ul>
            </Menus>
        </>
    );
};

export default MobileMenu;