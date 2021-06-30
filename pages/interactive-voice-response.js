import React from 'react';
import Navbar from "@/components/_App/Navbar";
<<<<<<< HEAD
import MainBanner from "@/components/VirtualNumber/MainBanner";
import ServiceArea from "@/components/IVRServiceProvider/ServiceArea";
// import HowitWorks from "@/components/IVRServiceProvider/HowitWorks";
import SliderVirtual from "@/components/Common/sliderVirtual";
import CTAStyleTwo from '@/components/Tollfree/CTAStyleTwo';
=======
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
>>>>>>> e6268e175c55eee7f609bb8b26c83bb508034675
import Footer from "@/components/_App/Footer";

const InteractiveVoiceResponse = () => {
    return (
        <>
<<<<<<< HEAD
            
            <Navbar />
            <MainBanner />
            <ServiceArea />
            <SliderVirtual />
            <CTAStyleTwo />
=======
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
>>>>>>> e6268e175c55eee7f609bb8b26c83bb508034675
            <Footer />
        </>
    )
}

export default InteractiveVoiceResponse;