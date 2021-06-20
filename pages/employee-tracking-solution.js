import React from 'react';
import NavbarStyleTwo from "@/components/_App/NavbarStyleTwo";
import MainBanner from "@/components/Employee Tracking Solution/MainBanner";
import TopFeatures from '@/components/Employee Tracking Solution/TopFeatures';
import DomainSearch from '@/components/Employee Tracking Solution/DomainSearch';
import WhyChoose from '@/components/Employee Tracking Solution/WhyChoose';
import PricingStyleTwo from '@/components/PricingPlans/PricingStyleTwo';
import FeedbackStyleTwo from '@/components/Common/FeedbackStyleTwo';
import Partner from "@/components/Common/Partner";
import Features from '@/components/Employee Tracking Solution/Features';
import BlogPost from "@/components/Common/BlogPost";
import CTA from '@/components/Common/CTA';
import Footer from "@/components/_App/Footer";

const EmployeeTrackingSolution = () => {
    return (
        <>
            <NavbarStyleTwo />
            <MainBanner />
            <TopFeatures />
            <DomainSearch />
            <WhyChoose />
            <PricingStyleTwo />
            <FeedbackStyleTwo />
            <div className="pb-80">
                <Partner />
            </div>
            <Features />
            <BlogPost />
            <CTA />
            <Footer />
        </>
    )
}

export default EmployeeTrackingSolution;