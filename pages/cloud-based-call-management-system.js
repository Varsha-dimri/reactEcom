import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/CloudTelephony/MainBanner";
import Bar from "@/components/Common/BarUseCase";
import ServicesArea from "@/components/CloudTelephony/ServicesArea";
import CloudTelephonyWorks from "@/components/CloudTelephony/CloudTelephonyWorks";
import Partners from '@/components/Common/Partners';
import CTAStyleTwo from '@/components/Tollfree/CTAStyleTwo';
import Footer from "@/components/_App/Footer";


const CloudTelephony = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <Bar />
            <ServicesArea />
            <CloudTelephonyWorks />

            <Partners />

            <CTAStyleTwo />
            
            <Footer />
        </>
    )
}

export default CloudTelephony;