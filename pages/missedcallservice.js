import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from '@/components/Missed Call Service/MainBanner';
import ServicesArea from '@/components/Missed Call Service/ServicesArea';
import Features from '@/components/Missed Call Service/Features';
import IVRWorks from '@/components/Missed Call Service/IVRWorks';
import MissedCallPricing from '@/components/PricingPlans/Navbarsolutions/MissedCallPricing';
import Footer from "@/components/_App/Footer";
// import FAQ from "@/components/Missed Call Service/Faq";
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
            {/* <FAQ /> */}
            <Footer />
        </>
    )
}

export default MissedCallService;