import React from 'react';
import NavbarStyleFive from "@/components/_App/NavbarStyleFive";
import MainBanner from "@/components/CloudBasedCallManagementSolution/MainBanner";
import WhatWeOffer from '@/components/CloudBasedCallManagementSolution/WhatWeOffer';
import AboutUsContent from '@/components/CloudBasedCallManagementSolution/AboutUsContent';
import OurServices from '@/components/CloudBasedCallManagementSolution/OurServices';
import DigitalAgencyFunFacts from '@/components/CloudBasedCallManagementSolution/CloudBasedCallManagementSolutionFunFacts';
import Projects from '@/components/CloudBasedCallManagementSolution/Projects';
import PricingStyleThree from '@/components/PricingPlans/PricingStyleThree';
import FeedbackStyleThree from '@/components/Common/FeedbackStyleThree';
import BlogPostStyleTwo from '@/components/Common/BlogPostStyleTwo';
import CTAStyleTwo from '@/components/Common/CTAStyleTwo';
import Footer from "@/components/_App/Footer";

const CloudBasedCallManagementSolution = () => {
    return (
        <>
            <NavbarStyleFive />
            <MainBanner />
            <WhatWeOffer />
            <AboutUsContent />
            <OurServices />
            <DigitalAgencyFunFacts />
            <Projects />
            <PricingStyleThree />
            <FeedbackStyleThree />
            <BlogPostStyleTwo />
            <CTAStyleTwo />
            <Footer />
        </>
    )
}

export default CloudBasedCallManagementSolution;