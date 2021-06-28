import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from '@/components/EmployeeTrackingSolution/MainBanner';
import BarUseCase from "@/components/common/BarUseCase";
import ServicesArea from '@/components/EmployeeTrackingSolution/ServicesArea';
import Features from '@/components/EmployeeTrackingSolution/Features';
import EmployeetrackingPricing from '@/components/EmployeeTrackingSolution/EmployeetrackingPricing';
import Partners from '@/components/Common/Partners';
import CTAStyleTwo from '@/components/Tollfree/CTAStyleTwo';
import Footer from "@/components/_App/Footer";

const EmployeeTrackingSolution = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <BarUseCase />
            <ServicesArea />
            <Features />
            <EmployeetrackingPricing />
            <Partners />
            <CTAStyleTwo />
            <Footer />
        </>
    )
}

export default EmployeeTrackingSolution;