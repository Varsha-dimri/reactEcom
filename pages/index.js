import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/IVRServices/MainBanner";
import Features from "@/components/IVRServices/Features";
import ServicesArea from "@/components/IVRServices/ServicesArea";
import Team from "@/components/Common/Team";
import FunFactsArea from "@/components/Common/FunFactsArea";
import RecentWorks from "@/components/Common/RecentWorks";
import IVRPricing from "@/components/PricingPlans/IVRPricing";
import Feedback from "@/components/Common/Feedback";
import Partner from "@/components/Common/Partner";
import BlogPost from "@/components/Common/BlogPost";
import FAQ from "@/components/First/Faq";
import Footer from "@/components/_App/Footer";


const Index = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <Features />
            <ServicesArea />
            <Team />
            <FunFactsArea />
            <RecentWorks />
            <IVRPricing />
            <Feedback />
            <Partner />
            <FAQ />
            <BlogPost />
            <Footer />
        </>
    )
}

export default Index;