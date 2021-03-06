import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from '@/components/BeTyphon/MainBanner';

import ServicesArea from "@/components/BeTyphon/ServicesArea";
import Features from '@/components/MissedCallService/Featuresmissed';
import BeTyphonWorks from"@/components/BeTyphon/BeTyphonWorks";
import SliderVirtual from "@/components/Common/sliderVirtual";
import Partner from '@/components/BeTyphon/Partner';
import BeTyphonPricing from '@/components/BeTyphon/BeTyphonPricing';
import CTAStyleTwo from '@/components/BeTyphon/CTAStyleTwo';
import Footer from "@/components/_App/Footer";

const BeTyphon = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
         
            <ServicesArea />
            <Features />
            <BeTyphonWorks /> 
            <BeTyphonPricing />
            <SliderVirtual />
            <Partner />
            <CTAStyleTwo />
            <Footer />
        </>
    )
}

export default BeTyphon;