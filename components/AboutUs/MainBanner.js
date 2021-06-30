import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
		<div className="main-banner" style={{paddingTop:"0px", paddingBottom: "0px"}}>

            <div className="" style={{paddingTop: "112px", background: "linear-gradient(to bottom, #434b41, transparent)"}}>
                <img src='/images/banner-image/about.png' className=""alt="About-Us" />
            </div>
        </div>
    )
}

export default MainBanner;