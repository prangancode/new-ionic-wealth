import React, { useEffect } from 'react';

import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';

const VideoLightBox = ({ URL, icon, text }) => {

    useEffect(() => {
        const lightbox = GLightbox({
            skin: 'clean video-lightbox'
        });
        return () => lightbox.destroy();
    }, []);

    return (
        <a href={URL} className="button glightbox button-3 txt-upper">
            <div>
                <i className={icon}></i>
                <span>{text}</span>
            </div>
        </a>
    )
};

export default VideoLightBox;
