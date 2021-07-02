import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/VirtualNumber/MainBanner";
import ServiceArea from "@/components/IVRServiceProvider/ServiceArea";
// import HowitWorks from "@/components/IVRServiceProvider/HowitWorks";
import SliderVirtual from "@/components/Common/sliderVirtual";
import CTAStyleTwo from '@/components/Tollfree/CTAStyleTwo';
import Footer from "@/components/_App/Footer";

const InteractiveVoiceResponse = () => {
    return (
        <>
            
            <Navbar />
            <MainBanner />
            <ServiceArea />
            <SliderVirtual />
            <CTAStyleTwo />
            <Footer />
        </>
    )
}

export default InteractiveVoiceResponse;