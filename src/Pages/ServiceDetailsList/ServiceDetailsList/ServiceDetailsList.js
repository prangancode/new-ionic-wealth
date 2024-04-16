import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import HeaderNavbar from '../../Shared/Header/HeaderNavbar/HeaderNavbar';
import Breadcrumbs from '../BreadcrumbSL/Breadcrumbs';
import ServiceDetails from '../ContentSL/ServiceDetails/ServiceDetails';

const ServiceDetailsList = () => {
    return (
        <>
            <HeaderNavbar />
            <Breadcrumbs breadcrumb={{ pagename: 'Service Detail' }} />
            <ServiceDetails />
            <Footer />
        </>
    );
};

export default ServiceDetailsList;