import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/IVRServices/MainBanner";
import TollfreeWorks from "@/components/Tollfree/TollfreeWorks";
import Footer from "@/components/_App/Footer";

const BestTollfreeServiceInIndia = () => {         
    return(
        <>
            <Navbar />
            <MainBanner />
            <div className="container ptb-80 pb-50">
                <h2>Tollfree number with IVR for your Business</h2>
                <p>
                    There’s no better way to connect with your callers 24X7 with your toll free number with IVR functionality. It also adds credibility to your business wherein caller not get charged to connect with you.
                </p>
                <ul>
                    <li>Free for Callers    </li>  
                    <li>Improve the quality of Leads</li>
                    <li>Sounds more Professional</li>
                    <li>Increasae your Business Enquiryḥ</li>  
                </ul>                
            </div>
            <TollfreeWorks />
            <Footer />
         </>
    )
}

export default BestTollfreeServiceInIndia;