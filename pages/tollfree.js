import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/Tollfree/MainBanner";
import Bar from "@/components/common/Bar";
import ServicesArea from "@/components/Tollfree/ServicesArea";
import Features from "@/components/IVRServices/Features";
import IVRWorks from "@/components/Tollfree/IVRWorks";
import TollfreePricing from "@/components/PricingPlans/Navbarsolutions/TollfreePricing";
import FAQ from "@/components/Tollfree/Faq";
import Footer from "@/components/_App/Footer";
import Text from "@/components/Tollfree/Text";

const Tollfree = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <Bar />
            <Text />
            <ServicesArea />
            <Features />
            <IVRWorks />
            <TollfreePricing />
            <FAQ />
            <Footer />
        </>
    )
}

export default Tollfree;