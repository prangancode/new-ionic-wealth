import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { HomeIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import "./MainMenu.css";
import useTheme from "../../../../Hooks/DarkMode/useTheme";
import { SunIcon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/24/solid";
import { FiLogOut } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useAuthContexts from "../../../../Hooks/Firebase/useAuthContexts";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const MainMenu = () => {
  const location = useLocation();
  const history = useHistory();
  const { user, logOut } = useAuthContexts() || {};
  const [nextTheme, setTheme] = useTheme();

  // nav link active style
  const navLinkActiveStyle = {
    color: "var(--clr-primary)",
    backgroundColor: "transparent",
  };

  return (
    <>
      <ul className="dark:text-white h-full w-full flex flex-col md:flex-row md:items-center md:justify-end md:pl-4 space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8  uppercase font-medium text-xl md:text-sm lg:text-my-sm text-gray-300 md:text-my-dark-gray tracking-wide md:tracking-wide lg:tracking-my-tiny">
        <li>
          <NavLink
            to={location.pathname === "/" ? "/" : "/home"}
            activeStyle={navLinkActiveStyle}
            className="hover:text-my-primary flex items-center"
          >
            <HomeIcon className=" h-5 w-5 mr-1" aria-hidden="true" /> Home
          </NavLink>
        </li>
        <Menu as="li">
          {({ open }) => (
            <>
              <Menu.Button
                as="NavLink"
                activeStyle={navLinkActiveStyle}
                className="hover:text-my-primary flex items-center cursor-pointer"
              >
                Our Services{" "}
                <ChevronUpIcon
                  className={`${open ? "transform rotate-180" : ""} w-5 h-5`}
                  aria-hidden="true"
                />
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
                <Menu.Items className="sub-menu">
                  <div className="py-5 border-t-4 border-t-blue-400 dark:bg-slate-900">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/allservices"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-my-primary"
                              : "text-gray-700",
                            "block px-4 text-base py-2"
                          )}
                        >
                          All Services
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/allservices/financial"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-my-primary"
                              : "text-gray-700",
                            "block px-4 text-base py-2"
                          )}
                        >
                          Investment & Savings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/allservices/relationship"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-my-primary"
                              : "text-gray-700",
                            "block px-4 py-2 text-base"
                          )}
                        >
                          Life Assurance
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/home"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-my-primary"
                              : "text-gray-700",
                            "block px-4 py-2 text-base"
                          )}
                        >
                          Mortgages
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/home"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-my-primary"
                              : "text-gray-700",
                            "block px-4 py-2 text-base"
                          )}
                        >
                          Estate Planning
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/home"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-my-primary"
                              : "text-gray-700",
                            "block px-4 py-2 text-base"
                          )}
                        >
                          Corporate Advice
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
        {/* <li>
                    <NavLink
                        to="/all-blogs"
                        activeStyle={navLinkActiveStyle}
                        className="hover:text-my-primary"
                    >
                        Partnership
                    </NavLink>
                </li> */}
        <li>
          <NavLink
            to="/testimonial"
            activeStyle={navLinkActiveStyle}
            className="hover:text-my-primary"
          >
            Testimonial
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contactus"
            activeStyle={navLinkActiveStyle}
            className="hover:text-my-primary"
          >
            Contact Us
          </NavLink>
        </li>

        <Menu as="li">
          {({ open }) => (
            <>
              <Menu.Button
                as="NavLink"
                activeStyle={navLinkActiveStyle}
                className={`${
                  user?.displayName
                    ? "text-sky-600 px-3 p-2 bg-[#dbf0ff] rounded-3xl ring-2 "
                    : ""
                }hover:text-my-primary flex items-center cursor-pointer`}
              >
                {user?.email ? user?.displayName : "CLIENT"}{" "}
                <ChevronUpIcon
                  className={`${open ? "transform rotate-180" : ""}  w-5 h-5`}
                  aria-hidden="true"
                />
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
                <Menu.Items className="sub-menu-client">
                  <div className="py-5 border-t-4 border-t-blue-400 dark:bg-slate-900">
                    {user?.email && (
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/dashboard"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-my-primary"
                                : "text-gray-700",
                              "block px-4 text-base py-2"
                            )}
                          >
                            Dashboard
                          </Link>
                        )}
                      </Menu.Item>
                    )}

                    {/* <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to="/reviewform"
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-my-primary' : 'text-gray-700',
                                                        'block px-4 py-2 text-base'
                                                    )}
                                                >
                                                    Review Form
                                                </Link>
                                            )}
                                        </Menu.Item> */}
                    {user?.email ? (
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => logOut(location, history)}
                            className={classNames(
                              active
                                ? "bg-gray-100 text-red-500 font-semibold"
                                : "text-red-400 font-semibold",
                              " px-4 py-2 text-base flex items-center justify-items-center w-full justify-between"
                            )}
                          >
                            LOGOUT{" "}
                            <span>
                              {" "}
                              <FiLogOut className="w-5 h-5" />{" "}
                            </span>
                          </button>
                        )}
                      </Menu.Item>
                    ) : (
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/login"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-my-primary"
                                : "text-gray-700",
                              "block px-4 py-2 text-base"
                            )}
                          >
                            CLIENT LOGIN
                          </Link>
                        )}
                      </Menu.Item>
                    )}
                  </div>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>

        <div className="extra-cell">
          <button onClick={() => setTheme(nextTheme)} className="dez-page ">
            {nextTheme === "dark" ? (
              <SunIcon className="text-white h-10 w-10 fill-yellow-500 hover:fill-yellow-400" />
            ) : (
              <MoonIcon className="text-white h-10 w-10 fill-gray-500 hover:fill-gray-400" />
            )}{" "}
          </button>
        </div>
      </ul>
    </>
  );
};

export default MainMenu;
