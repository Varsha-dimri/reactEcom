import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from '@/components/Missed Call Service/MainBanner';
import PartnerStyleTwo from '@/components/Common/PartnerStyleTwo';
import ServicesArea from '@/components/Missed Call Service/ServicesArea';
import Cta from '@/components/Missed Call Service/Cta';
import FunFactsArea from '@/components/Common/FunFactsArea';
import Features from '@/components/Missed Call Service/Features';
import TeamStyleTwo from '@/components/Common/TeamStyleTwo';
import Feedback from '@/components/Common/Feedback';
import WhyWeAreBest from '@/components/Missed Call Service/WhyWeAreBest';
import BlogPost from '@/components/Common/BlogPost';
import IVRWorks from '@/components/Missed Call Service/IVRWorks';
import MissedCallPricing from '@/components/PricingPlans/MissedCallPricing';
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