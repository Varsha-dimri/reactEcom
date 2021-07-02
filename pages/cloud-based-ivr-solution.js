import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/CloudTelephony/MainBanner";
import ServiceArea from "@/components/cloud-based-ivr-solution/ServiceArea";
import CloudTelephonyWorks from "@/components/CloudTelephony/CloudTelephonyWorks";
import SliderVirtual from "@/components/Common/sliderVirtual";
import Partners from '@/components/Common/Partners';
import CTAStyleTwo from '@/components/Tollfree/CTAStyleTwo';
import Footer from "@/components/_App/Footer";


const CloudTelephony = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <ServiceArea />
            <CloudTelephonyWorks />
            <SliderVirtual />
            <Partners />
            <CTAStyleTwo />
            <Footer />
        </>
    )
}

export default CloudTelephony;