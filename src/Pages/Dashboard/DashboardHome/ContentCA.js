import React from 'react';
import Webviewer from '../../Webviewer/Webviewer';

const ContentCA = () => {


    const showPdf = 'Client Agreement.pdf'

    return (
        <>
            {/* <div className="col-lg-8-servicedetails"> */}
            <div className="service-details-content">

                <h2 className="title text-center text-2xl mb-10">CLIENT AGREEMENT DOCUMENT</h2>
                <p className='description text-justify'>
                    Riverpark Investment and Financial Consultants Ltd is permitted to advise on and arrange
                    (bring about) deals in investments.
                    <br /><br />
                    With regard to investments which we have arranged for you, these will not be kept under review,but we will advise you upon your request. However, we may contact you in the future by means of an unsolicited promotion (i.e. where you had not expressly requested it) should we wish to contact you to discuss the relative merits of an investment or service which we feel may be of interest to you.
                    <br /><br />
                    Riverpark Investment and Financial Consultants Ltd does not handle clients’ money. We
                    never accept a cheque made payable to us or handle cash (unless it is payment in settlement of adviser charges or disbursements for which we have sent you an invoice). If you do send us
                    money, this may delay your transaction as we may have to return this money to you.
                </p>


                <Webviewer showPdf={showPdf} />

            </div>

            {/* </div> */}
        </>
    );
};

export default ContentCA;