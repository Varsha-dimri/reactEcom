import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/IVRServices/MainBanner";
import Bar from "@/components/common/Bar";
import ServicesArea from "@/components/IVRServices/ServicesArea";
import Features from "@/components/IVRServices/Features";
import IVRWorks from "@/components/IVRServices/IVRWorks";
import IVRPricing from "@/components/IVRServices/IVRPricing";
import FAQ from "@/components/IVRServices/Faq";
import Partners from "@/components/Common/Partners";
import CTAStyleTwo from "@/components/IVRServices/CTAStyleTwo";
import Footer from "@/components/_App/Footer";


const IVRServices = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <Bar />
            <ServicesArea />
            <Features />
            <IVRWorks />
            <IVRPricing />
            <Partners />
            <FAQ />
            <CTAStyleTwo />
            <Footer />
        </>
    )
}

export default IVRServices;