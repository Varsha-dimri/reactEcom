import React from 'react';
import Link from 'next/link';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/IVRServices/MainBanner";
import Footer from "@/components/_App/Footer";

const BestServiceProvider = () => {         
    return(
        <>
        <   Navbar />
            <MainBanner />
            <div className="container ptb-80 pb-50">
                <h1 className="text-center">Best IVR Service Provider</h1>
                <p>
                    TechMet’s Smart IVRS is a hosted Interactive Voice Response System that is configured through a Virtual Number to automate business communication. 
                    All business calls that are hit to the <Link href="/virtual-number"><a><strong>Virtual Number</strong></a></Link>, segregates and routes callers to specific departments with the help of DTMF inputs as selected appropriately to optimize communication efficiency. 
                    Multi-level IVR service with unlimited prompts, best to provide a personalized experience to the customers when they reach on the business number. 
                    <strong> TechMet</strong> is the <Link href="/best-ivr-service-provider"><a><strong>Best IVRS Service Provider</strong></a></Link> in India who facilitates the customizations and enables the unique features of communication channels as per your business requirements.
                </p>
            </div>
            <Footer />
        </>
    )
}

export default BestServiceProvider;

