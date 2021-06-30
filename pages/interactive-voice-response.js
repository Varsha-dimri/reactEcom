import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from '@/components/IVRServices/MainBanner';
import WhatWeOffer from '@/components/MachineLearningTwo/WhatWeOffer';
import AboutUsContent from '@/components/MachineLearningTwo/AboutUsContent';
import OurServices from '@/components/MachineLearningTwo/OurServices';
import FunFactsArea from '@/components/Common/FunFactsArea';
import Projects from '@/components/MachineLearningTwo/Projects';
// import PricingStyleFour from '@/components/PricingPlans/PricingStyleFour';
// import FeedbackStyleFour from '@/components/Common/FeedbackStyleFour';
import BlogCard from '@/components/MachineLearningTwo/BlogCard';
import Newsletter from '@/components/Common/Newsletter';
import Partners from '@/components/Common/Partners';
import Footer from "@/components/_App/Footer";

const InteractiveVoiceResponse = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <WhatWeOffer />
            <AboutUsContent />
            <OurServices />
            <FunFactsArea />
            <Projects />
            {/* <PricingStyleFour /> 
            <FeedbackStyleFour /> */}
            <BlogCard />
            <Newsletter />
            <Partners />
            <Footer />
        </>
    )
}

export default InteractiveVoiceResponse;