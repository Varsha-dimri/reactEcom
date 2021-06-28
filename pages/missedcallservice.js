import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from '@/components/MissedCallService/MainBanner';
import Bar from "@/components/common/Bar";
import ServicesArea from '@/components/MissedCallService/ServicesArea';
import Features from '@/components/MissedCallService/Features';
import MissedCallWorks from '@/components/MissedCallService/MissedCallWorks';
import MissedCallPricing from '@/components/PricingPlans/Navbarsolutions/MissedCallPricing';
import Partners from '@/components/Common/Partners';
import SliderVirtual from "@/components/Common/sliderVirtual";
import CTAStyleTwo from '@/components/Tollfree/CTAStyleTwo';
import Footer from "@/components/_App/Footer";

const MissedCallService = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <Bar />
            <ServicesArea />
            <Features />
            <MissedCallWorks />
            <MissedCallPricing />
            <Partners />
            <SliderVirtual />
            <CTAStyleTwo />
            <Footer />
        </>
    )
}

export default MissedCallService;