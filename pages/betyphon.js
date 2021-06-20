import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from '@/components/BeTyphon/MainBanner';
import Partner from '@/components/BeTyphon/Partner';
import WhatWeOffer from '@/components/BeTyphon/WhatWeOffer';
import AboutUsContent from '@/components/BeTyphon/AboutUsContent';
import OurServices from '@/components/BeTyphon/OurServices';
import FunFactsArea from '@/components/Common/FunFactsArea';
import Projects from '@/components/BeTyphon/Projects';
import PricingStyleFour from '@/components/PricingPlans/PricingStyleFour';
import FeedbackStyleFour from '@/components/Common/FeedbackStyleFour';
import BlogCard from '@/components/BeTyphon/BlogCard';
import Newsletter from '@/components/Common/Newsletter';
import Footer from "@/components/_App/Footer";

const BeTyphon = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <Partner />
            <WhatWeOffer />
            <AboutUsContent />
            <OurServices />
            <FunFactsArea />
            <Projects />
            <PricingStyleFour /> 
            <FeedbackStyleFour />
            <BlogCard />
            <Newsletter />
            <Footer />
            
        </>
    )
}

export default BeTyphon;