import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/CloudTelephony/MainBanner";
import ServicesArea from "@/components/CloudTelephony/ServicesArea";
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
            
            <ServicesArea />
            <CloudTelephonyWorks />
            <SliderVirtual />
            <Partners />
            <CTAStyleTwo />
            <Footer />
        </>
    )
}

export default CloudTelephony;