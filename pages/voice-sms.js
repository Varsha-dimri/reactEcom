import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from '@/components/Voice/MainBanner';

import ServicesArea from "@/components/Voice/ServicesArea";
import Features from '@/components/Voice/Features';
import VoiceSmsWorks from "@/components/Voice/VoiceSmsWorks";
import VoicesmsPricing from"@/components/Voice/VoicesmsPricing";
import SliderVirtual from "@/components/Common/sliderVirtual";
import Partner from '@/components/Voice/Partner';
import CTAStyleTwo from '@/components/Voice/CTAStyleTwo';
import Footer from "@/components/_App/Footer";

const VoiceSMS = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
          
            <ServicesArea />
            <Features />
            <VoiceSmsWorks />
            <VoicesmsPricing />
            <SliderVirtual />
            <Partner />
            <CTAStyleTwo />
            <Footer />
        </>
    )
}

export default VoiceSMS;