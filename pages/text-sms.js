import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from '@/components/Sms/MainBanner';
import Bar from "@/components/Sms/Bar";
import ServicesArea from "@/components/Sms/ServicesArea";
import Features from '@/components/Sms/Features';
import SmsCampaign from "@/components/Sms/SmsCampaign";
import HowToSendSms from"@/components/Sms/HowToSendSms";
import SliderVirtual from "@/components/Common/sliderVirtual";
import Partner from '@/components/Sms/Partner';
import CTAStyleTwo from '@/components/Sms/CTAStyleTwo';
import Footer from "@/components/_App/Footer";

const TextSMS = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <Bar />
            <ServicesArea />
            <Features />
            <SmsCampaign />
            <HowToSendSms />
            <SliderVirtual />
            <Partner />
            <CTAStyleTwo />
            <Footer />
        </>
    )
}

export default TextSMS;