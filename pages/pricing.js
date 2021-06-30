import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import MainBanner from '@/components/PricingPlans/MainBanner';
import PricingTab from "@/components/PricingPlans/PricingTab";
import FAQ from '@/components/PricingPlans/Faq';
import PricingText from '@/components/PricingPlans/PricingText';
 
const Pricing = () => {
    return (
        <>
            <Navbar />

            <MainBanner />
            <PricingTab />
            <PricingText />
            <FAQ />               
            <Footer />
        </>
    )
}

export default Pricing;