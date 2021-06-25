import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/VirtualNumber/MainBanner";
import Bar from "@/components/Common/BarUseCase";
import ServicesArea from "@/components/VirtualNumber/ServicesArea";
import OurFeatures from "@/components/Features/OurFeatures";
import VirtualNumberWorks from "@/components/VirtualNumber/VirtualNumberWorks";
import Partners from '@/components/Common/Partners';
import slidervirtual from "@/components/VirtualNumber/slidervirtual";
import CTAStyleTwo from '@/components/Common/CTAStyleTwo';
import Footer from "@/components/_App/Footer";



const VirtualNumber = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <Bar />
            <ServicesArea />
            <OurFeatures />
            <VirtualNumberWorks />
            <Partners />  
            <slidervirtual />      
            <CTAStyleTwo />
            <Footer />
        </>
    )
}

export default VirtualNumber;