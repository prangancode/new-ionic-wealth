import React from 'react';
import Webviewer from '../../Webviewer/Webviewer';

const ContentQA = () => {

    const showPdf = '20 Questions Risk Profiler.pdf'
    return (
        <>
            {/* <div className="col-lg-8-servicedetails"> */}
            <div className="service-details-content">

                <h2 className="title text-center text-2xl mb-10">Dynamic Planner Risk Profiler</h2>
                <p className='description'>
                    In order for your adviser to provide you with financial advice, they need to understand your experience of investing in financial products and approach to risk. To do this they have adopted Dynamic Planner’s risk profiling process comprising 3 short sets of questions, which normally takes less than 10 minutes to complete.
                </p><br />
                <ul className='list-disc leading-8 text-blue-400 italic'>
                    <li>Firstly, you will be asked about your experience of investing in different financial products.</li>
                    <li>Next, your attitude to investment risk will be explo</li>
                    <li>Finally, you will be asked a few questions to help your adviser understand your capacity for taking investment risk given your current financial position.</li>
                </ul><br />
                <p>Once you have answered all these questions, return this document to your adviser who will work out your risk profile and use this to inform the financial advice they provide.</p>


                <Webviewer showPdf={showPdf} />

            </div>

            {/* </div> */}
        </>
    );
};

export default ContentQA;