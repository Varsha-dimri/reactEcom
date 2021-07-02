import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from '@/components/MissedCallService/MainBanner';
import MissedCallWorks from "@/components/MissedCallService/MissedCallWorks";
import ServicesArea from '@/components/MissedCallService/ServicesArea';
import Featuresmissed from '@/components/MissedCallService/Featuresmissed';
import MissedCallPricing from '@/components/MissedCallService/MissedCallPricing';
import Partners from '@/components/Common/Partners';
import SliderVirtual from "@/components/Common/sliderVirtual";
import CTAStyleTwo from '@/components/MissedCallService/CTAStyleTwo';
import Footer from "@/components/_App/Footer";

const MissedCallService = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <MissedCallWorks />
            <ServicesArea />
            <Featuresmissed />
           
            <MissedCallPricing />
            <Partners />
            <SliderVirtual />
            <CTAStyleTwo />
            <Footer />
        </>
    )
}

export default MissedCallService;