import React from 'react';
import { useState, useRef } from 'react';
import WebViewer from '@pdftron/webviewer'
import LoadingStatus from '../Shared/LoadingStatus/LoadingStatus';



const Webviewer = ({ showPdf }) => {
    const status = 'Loading PDF for Viewing and Editing.....';

    const viewer = useRef(null);
    const [pdf, setPdf] = useState(null);
    const [loading, setLoading] = useState(null);
    // useEffect(() => {
    const pdfView = () => {
        setPdf(true);
        setLoading(true);
        WebViewer(
            {
                path: 'lib',
                initialDoc: showPdf,
            },
            viewer.current,
        ).then((instance) => {
            const { documentViewer } = instance.Core;
            // you can now call WebViewer APIs here...
            console.log(instance);
        }).finally(() => setLoading(false));
    }


    // }, []);
    return (
        <>
            <div className="MyComponent">
                <a href={`./${showPdf}`} download className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-5 flex items-center justify-center w-1/6'> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg> <span> Download PDF </span> </a>
                <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iste ex beatae placeat quidem totam asperiores. Vel sed, perferendis rerum dolor minus quasi et accusamus culpa quos omnis libero asperiores?</p>
                <button className={`${!pdf && "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  my-5 flex items-center justify-center w-1/6"}`} onClick={pdfView} style={pdf && { height: "100vh", width: "-webkit-fill-available", textAlign: "left" }} ref={viewer} > <svg xmlns="http://www.w3.org/2000/svg" class={`${pdf ? "hidden" : "h-6 w-6 mr-2"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg> {loading ? <LoadingStatus status={status} /> : `${!pdf ? "Preview & Edit" : ''}`}  </button>
            </div>
        </>
    );
};

export default Webviewer;