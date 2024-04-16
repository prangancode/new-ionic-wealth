import React, { useState } from 'react';
import './Services.css'
import ServiceData from './services.json';
import ServiceCard from './ServiceCard';
const Services = () => {
    const [services, setServices] = useState(ServiceData);

    return (
        <>
            <div className="section-full content-inner-2 dark:bg-dark-variant">
                <div className="container">
                    <div className="section-head1 mb-12 text-black text-center">
                        <h4 className="text-2xl text-gray-dark mb-3 dark:text-white">Our Services</h4>
                        <h2 className="box-title m-tb0 dark:text-white">Financial Advice from Advisors You Can Trust<span className="bg-primary"></span></h2>
                        <p className='dark:text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    {/* Services */}
                    <div className="products-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-x-4 md:gap-x-6 xl:gap-x-12">

                        {/*  <!--Services One Single--> */}
                        {
                            services.map((service, index) => (
                                <ServiceCard service={service} />
                            ))
                        }

                    </div>
                </div>


            </div>
        </>
    );
};

export default Services;