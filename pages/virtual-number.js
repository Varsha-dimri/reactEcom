import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/VirtualNumber/MainBanner";
import ServicesArea from "@/components/VirtualNumber/ServicesArea";
import OurFeatures from "@/components/VirtualNumber/OurFeatures";
import VirtualNumberWorks from "@/components/VirtualNumber/VirtualNumberWorks";
import Partners from '@/components/Common/Partners';
import SliderVirtual from "@/components/Common/slidervirtual";
import CTAStyleTwo from '@/components/Tollfree/CTAStyleTwo';
import Footer from "@/components/_App/Footer";



const VirtualNumber = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <ServicesArea />
            <OurFeatures />
            <VirtualNumberWorks />
            <Partners /> 
            <SliderVirtual />      
            <CTAStyleTwo />
            <Footer />
        </>
    )
}

export default VirtualNumber;