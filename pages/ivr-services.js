import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/IVRServices/MainBanner";
import ServicesArea from "@/components/IVRServices/ServicesArea";
import Features from "@/components/IVRServices/Features";
import IVRWorks from "@/components/IVRServices/IVRWorks";
import PricingStyleOne from "@/components/PricingPlans/PricingStyleOne";
import FAQ from "@/components/IVRServices/Faq";
import Footer from "@/components/_App/Footer";
import Bar from "@/components/common/Bar";

const IVRServices = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <Bar />
            <ServicesArea />
            <Features />
            <IVRWorks />
            <PricingStyleOne />
            <FAQ />
            <Footer />
        </>
    )
}

export default IVRServices;