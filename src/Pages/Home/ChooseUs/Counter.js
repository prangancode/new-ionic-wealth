import React from 'react';
import CountUp from 'react-countup';
import './Counter.css'
import { ShoppingBagIcon, UserIcon, UsersIcon, DeviceMobileIcon } from '@heroicons/react/solid'
const counterBlog = [
    { icon: <ShoppingBagIcon className="iconsize-counter" />, num: '15', title: 'Years in Business', },
    { icon: <UserIcon className="iconsize-counter" />, num: '700', title: 'Happy Clients', },
    { icon: <UsersIcon className="iconsize-counter" />, num: '50', title: 'Technical Experts', },
    { icon: <DeviceMobileIcon className="iconsize-counter" />, num: '200', title: 'Apps Delivered', },
];

const Counter = () => {
    return (
        <>
            <div className="container-fluid-counter">
                <div className="chooses-info-content counter-main">
                    {counterBlog.map((data, index) => (
                        <div className="border-right-counter border-gray-500 p-8">
                            <h2 className="flex justify-center items-center mt-0 font-extrabold text-counter"><span className='pb-3'>{data.icon}</span><span className="counter"><CountUp end={data.num} duration={4} /></span>+</h2>
                            <h4 className="font-weight-400 mt-0 counter-title">{data.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Counter;