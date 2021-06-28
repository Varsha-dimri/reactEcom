import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from '@/components/ClickToCall/MainBanner';
import Bar from "@/components/ClickToCall/Bar";
import ServicesArea from "@/components/ClickToCall/ServicesArea";
import Features from '@/components/ClickToCall/Features';
import Click2CallService from "@/components/ClickToCall/Click2CallService";
import ClickToCallPricing from"@/components/ClickToCall/ClickToCallPricing";
import SliderVirtual from "@/components/Common/sliderVirtual";
import Partner from '@/components/ClickToCall/Partner';
import CTAStyleTwo from '@/components/ClickToCall/CTAStyleTwo';
import Footer from "@/components/_App/Footer";

const ClickToCall = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <Bar />
            <ServicesArea />
            <Features />
            <Click2CallService />
            <ClickToCallPricing />
            <SliderVirtual />
            <Partner />
            <CTAStyleTwo />
            <Footer />
        </>
    )
}

export default ClickToCall;