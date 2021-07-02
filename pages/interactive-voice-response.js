import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/VirtualNumber/MainBanner";
import ServiceArea from "@/components/IVRServiceProvider/ServiceArea";
import InteractiveVoiceResponseWorks from "@/components/interactive-voice-response/InteractiveVoiceResponseWorks";
import SliderVirtual from "@/components/Common/sliderVirtual";
import CTAStyleTwo from '@/components/Tollfree/CTAStyleTwo';
import Footer from "@/components/_App/Footer";

const InteractiveVoiceResponse = () => {
    return (
        <>
            
            <Navbar />
            <MainBanner />
            <ServiceArea />
            <InteractiveVoiceResponseWorks />
            <SliderVirtual />
            <CTAStyleTwo />
            <Footer />
        </>
    )
}

export default InteractiveVoiceResponse;