import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/IVRServices/MainBanner";
import Features from "@/components/IVRServices/Features";
import ServicesArea from "@/components/IVRServices/ServicesArea";
import Team from "@/components/Common/Team";
import FunFactsArea from "@/components/Common/FunFactsArea";
import RecentWorks from "@/components/Common/RecentWorks";
import PricingStyleOne from "@/components/PricingPlans/PricingStyleOne";
import Feedback from "@/components/Common/Feedback";
import Partner from "@/components/Common/Partner";
import BlogPost from "@/components/Common/BlogPost";
import FAQ from "@/components/First/Faq";
import Footer from "@/components/_App/Footer";
import Bar from "@/components/common/Bar";


const Index = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <Bar />
            <Features />
            <ServicesArea />
            <Team />
            <FunFactsArea />
            <RecentWorks />
            <PricingStyleOne />
            <Feedback />
            <Partner />
            <FAQ />
            <BlogPost />
            <Footer />
        </>
    )
}

export default Index;