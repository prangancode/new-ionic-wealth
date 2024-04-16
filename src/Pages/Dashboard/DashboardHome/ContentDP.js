import React from 'react';
import Webviewer from '../../Webviewer/Webviewer';

const ContentDP = () => {

    const showPdf = 'GDPR Data Protection.pdf'
    return (
        <>
            {/* <div className="col-lg-8-servicedetails"> */}
            <div className="service-details-content">

                <h2 className="title text-center text-2xl mb-10">GDPR DATA PROTECTION</h2>
                <p className='description'>
                    <span className='text-lg font-semibold text-gray-600'>DATA PRIVACY NOTICE</span>
                    <br /><br />
                    We take your privacy very seriously and we ask that you read
                    this privacy no3ce carefully as it contains important informa3on
                    on who we are, how and why we collect, store, use and share
                    personal data, your rights in rela3on to your personal data and
                    on how to contact us and supervisory authori3es in the event
                    you have a complaint.
                    <br />
                    Italicised words in this privacy no3ce have the meaning set out
                    in the Glossary of Terms at the end of this document.
                    <br /><br />
                    <span className='text-lg font-semibold text-gray-600'>Who We Are</span>
                    <br /><br />
                    <span className='text-red-500'>Riverpark Investment & Financial Consultants Ltd</span> collects, uses
                    and is responsible for certain personal data about you. When
                    we do so we are required to comply with data protec1on
                    regula1on and we are responsible as a data controller of that
                    personal data for the purposes of those laws.
                    When we men3on "Riverpark” we are referring to Riverpark
                    Investment & Financial Consultants Ltd.
                    <br /><br />
                    <span className='text-red-500'>Riverpark Investment & Financial Consultants Ltd</span> is a company registered in Scotland (SC220303) whose registered oﬃce is at
                    145 St Vincent Street, Glasgow, G2 5JH. Riverpark Investment &
                    Financial Consultants Ltd is authorised and regulated by the
                    Financial Conduct Authority. Riverpark’s Financial Services
                    Register number is 455480.
                </p>


                <Webviewer showPdf={showPdf} />

            </div>

            {/* </div> */}
        </>
    );
};

export default ContentDP;