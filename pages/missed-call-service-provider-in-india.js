import React from 'react';
import Link from 'next/link';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/MissedCallService/MainBanner";
import MissedCallWorks from "@/components/MissedCallService/MissedCallWorks";
import Footer from "@/components/_App/Footer";

const MissedCallServiceProviderInIndia = () => {         
    return(
        <>
        <   Navbar />
            <MainBanner />
            <div className="container ptb-80 pb-50">
                <h5>
                    Your customer can placed a missed call to your given number at zero cost and receive a call back immediately. 
                    Missed Call Service is easiest way to give your customer updates, Lead Generation, Free Callback to caller, 
                    Customer Engagement / Support / Feedback, Application Download, Opinion Poll, OTP/Mobile Number Verification.
                </h5>
            </div>
            <MissedCallWorks />
            <Footer />
        </>
    )
}

export default MissedCallServiceProviderInIndia;