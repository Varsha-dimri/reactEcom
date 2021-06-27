import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/Tollfree/MainBanner";
import Bar from "@/components/common/Bar";
import ServicesArea from "@/components/Tollfree/ServicesArea";
import Features from "@/components/IVRServices/Features";
import TollfreeWorks from "@/components/Tollfree/TollfreeWorks";
import TollfreePricing from "@/components/Tollfree/TollfreePricing";
import Partners from '@/components/Common/Partners';
import SliderVirtual from "@/components/Common/sliderVirtual";
import CTAStyleTwo from '@/components/Common/CTAStyleTwo';
import Footer from "@/components/_App/Footer";

const Tollfree = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <Bar />
            <ServicesArea />
            <Features />
            <TollfreeWorks />
            <TollfreePricing />
            <Partners />
            <SliderVirtual />
            <CTAStyleTwo />
            <Footer />
        </>
    )
}

export default Tollfree;