import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from '@/components/MissedCallService/MainBanner';
import ServicesArea from '@/components/MissedCallService/ServicesArea';
import Features from '@/components/MissedCallService/Features';
import IVRWorks from '@/components/Missed Call Service/IVRWorks';
import MissedCallPricing from '@/components/PricingPlans/Navbarsolutions/MissedCallPricing';
import Footer from "@/components/_App/Footer";
import Bar from "@/components/common/Bar";
import Text from "@/components/Missed Call Service/Text";

const MissedCallService = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <Bar />
            <Text />
            <ServicesArea />
            <Features />
            <IVRWorks />
            <MissedCallPricing />
            <Footer />
        </>
    )
}

export default MissedCallService;