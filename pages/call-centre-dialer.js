import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from '@/components/CallCentreDialer/MainBanner';

import ServicesArea from "@/components/CallCentreDialer/ServicesArea";
import Features from '@/components/CallCentreDialer/Features';
import CallCentreDialerService from "@/components/CallCentreDialer/CallCentreDialerService";
import SliderVirtual from "@/components/Common/sliderVirtual";
import Partner from '@/components/CallCentreDialer/Partner';
import CTAStyleTwo from '@/components/CallCentreDialer/CTAStyleTwo';
import Footer from "@/components/_App/Footer";

const CallCentreDialer = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
           
            <ServicesArea />
            <Features />
            <CallCentreDialerService />
            <SliderVirtual />
            <Partner />
            <CTAStyleTwo />
            <Footer />
        </>
    )
}

export default CallCentreDialer;