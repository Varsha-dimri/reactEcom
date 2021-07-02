import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/VirtualNumber/MainBanner";
import ServiceArea from "@/components/IVRServiceProvider/ServiceArea";
import IVRServiceProviderWorks from "@/components/IVRServiceProvider/IVRServiceProviderWorks";
import SliderVirtual from "@/components/Common/sliderVirtual";
import CTAStyleTwo from '@/components/Tollfree/CTAStyleTwo';
import Footer from "@/components/_App/Footer";


const IVRServiceProvider = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <ServiceArea />
            <IVRServiceProviderWorks />
            <SliderVirtual />
            <CTAStyleTwo />
            <Footer />
        </>
    )
}

export default IVRServiceProvider;