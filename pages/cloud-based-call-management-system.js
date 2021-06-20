import React from 'react';
import NavbarStyleSix from "@/components/_App/NavbarStyleSix";
import MainBanner from '@/components/CloudBasedCallManagementSystem/MainBanner';
import Projects from '@/components/CloudBasedCallManagementSystem/Projects';
import AboutUsContent from '@/components/CloudBasedCallManagementSystem/AboutUsContent';
import FeedbackStyleFive from '@/components/Common/FeedbackStyleFive';
import Partner from '@/components/CloudBasedCallManagementSystem/Partner';
import BlogPostStyleThree from '@/components/Common/BlogPostStyleThree';
import CreativeArea from '@/components/CloudBasedCallManagementSystem/CreativeArea';
import Footer from "@/components/_App/Footer";

const CloudBasedCallManagementSystem = () => {
    return (
        <>
            <NavbarStyleSix />
            <MainBanner />
            <Projects />
            <AboutUsContent />
            <FeedbackStyleFive />
            <Partner />
            <BlogPostStyleThree />
            <CreativeArea />
            <Footer />
        </>
    )
}

export default CloudBasedCallManagementSystem;