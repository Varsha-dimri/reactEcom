import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/VirtualNumber/MainBanner";
import Bar from "@/components/Common/BarUseCase";
import ServicesArea from "@/components/VirtualNumber/ServicesArea";
// import HowitWorks from "@/components/IVRServiceProvider/HowitWorks";
import CTAStyleTwo from '@/components/Common/CTAStyleTwo';
import Footer from "@/components/_App/Footer";


const IVRServiceProvider = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <Bar />
            <ServicesArea />
            <CTAStyleTwo />
            <Footer />
        </>
    )
}

export default IVRServiceProvider;