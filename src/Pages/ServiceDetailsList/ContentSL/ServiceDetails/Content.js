import React from 'react';
import servicebanner from '../../../../images/serviceImg/service-01.jpg'
import servicesmallbanner from '../../../../images/serviceImg/service-02.jpg'

import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid';

const Content = () => {
    return (
        <>
            {/* <div className="col-lg-8-servicedetails"> */}
            <div className="service-details-content">
                <div className="main-thumb mb-20">
                    <img src={servicebanner} alt="" />
                </div>
                <h2 className="title">Financial Planning</h2>
                <p className='description'>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                    aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                    consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                    dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                    exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                    molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatu
                </p>
                <ul className="circle-check-list mt-12 mb-12">
                    <li>
                        <i className="fas fa-check" />
                        Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
                        magnam aliquam quaerat voluptatem enim ad minima veniam quis nostrum
                    </li>
                    <li>
                        <i className="fas fa-check" />
                        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nmolestiae
                        consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatu
                    </li>
                    <li>
                        <i className="fas fa-check" />
                        But I must explain to you how all this mistaken idea of denouncing pleasure praising
                        pain was born and I will give you complete account of the system expound
                    </li>
                </ul>
                <div className="row-servicedetails justify-items-center mt-10">
                    <div className="col-lg-6-servicedetails">
                        <div className="image text-center mb-10">
                            <img style={{ width: '100%' }} src={servicesmallbanner} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6-servicedetails">
                        <h3 className="sub-title">How To Buildup Business</h3>
                        <p>
                            Nor again is there anyone who loves or pursues or desires to obtain pain of itself,
                            because it is pain, but because occasionally circumstances occur in which toil and
                            pain can procure him some great pleasure.
                        </p>
                        <ul className="check-list mt-10 mb-10">
                            <li><i className="fas fa-check" />Business &amp; Consulting Agency</li>
                            <li><i className="fas fa-check" />Awards Winning Business Comapny</li>
                            <li><i className="fas fa-check" />Complete Guide To Mechanical</li>
                            <li><i className="fas fa-check" />Firebase Authentication &amp; Database</li>
                        </ul>
                    </div>
                </div>

                <div className="w-full mt-10">
                    <div className="w-full  mx-auto bg-white rounded-2xl">
                        <Disclosure>
                            {({ open }) => (
                                <>

                                    <Disclosure.Button className="flex justify-between w-full px-4 py-7 font-medium text-left text-white bg-blue-500  hover:bg-blue-600 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                                        <span>How To Create A Mobile App In Expo And Firebase</span>
                                        <ChevronUpIcon
                                            className={`${open ? 'transform rotate-180' : ''
                                                } w-5 h-5 text-white`}
                                        />
                                    </Disclosure.Button>
                                    <Transition
                                        show={open}
                                        enter="transition duration-1000 ease-in-out"
                                        enterFrom="transform scale-950 opacity-0"
                                        enterTo="transform scale-500 opacity-100"
                                        leave="transition duration-750 ease-out"
                                        leaveFrom="transform scale-1000 opacity-100"
                                        leaveTo="transform scale-950 opacity-0"
                                    >
                                        <Disclosure.Panel static className="px-4 pt-4 pb-2 text-gray-500 border-1 my-2 border-blue-500">
                                            Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some
                                        </Disclosure.Panel>
                                    </Transition>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>

                                    <Disclosure.Button className="flex justify-between w-full px-4 py-7 font-medium text-left text-blue-900 bg-blue-100  hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                                        <span>Smashing Podcast Episode With Ben How ?</span>
                                        <ChevronUpIcon
                                            className={`${open ? 'transform rotate-180' : ''
                                                } w-5 h-5 text-blue-500`}
                                        />
                                    </Disclosure.Button>
                                    <Transition
                                        show={open}
                                        enter="transition duration-1000 ease-in-out"
                                        enterFrom="transform scale-950 opacity-0"
                                        enterTo="transform scale-500 opacity-100"
                                        leave="transition duration-750 ease-out"
                                        leaveFrom="transform scale-1000 opacity-100"
                                        leaveTo="transform scale-950 opacity-0"
                                    >
                                        <Disclosure.Panel static className="px-4 pt-4 pb-2 text-gray-500 border-1 my-2 border-blue-500">
                                            Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some
                                        </Disclosure.Panel>
                                    </Transition>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>

                                    <Disclosure.Button className="flex justify-between w-full px-4 py-7 font-medium text-left text-white bg-blue-500  hover:bg-blue-600 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                                        <span>Smashing Podcast Episode With Ben How ?</span>
                                        <ChevronUpIcon
                                            className={`${open ? 'transform rotate-180' : ''
                                                } w-5 h-5 text-white`}
                                        />
                                    </Disclosure.Button>
                                    <Transition
                                        show={open}
                                        enter="transition duration-1000 ease-in-out"
                                        enterFrom="transform scale-950 opacity-0"
                                        enterTo="transform scale-500 opacity-100"
                                        leave="transition duration-750 ease-out"
                                        leaveFrom="transform scale-1000 opacity-100"
                                        leaveTo="transform scale-950 opacity-0"
                                    >
                                        <Disclosure.Panel static className="px-4 pt-4 pb-2 text-gray-500 border-1 mt-2 border-blue-500">
                                            Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some
                                        </Disclosure.Panel>
                                    </Transition>
                                </>
                            )}
                        </Disclosure>
                    </div>
                </div>

            </div>

            {/* </div> */}
        </>
    );
};

export default Content;