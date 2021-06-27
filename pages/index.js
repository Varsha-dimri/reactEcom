import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/First/MainBanner";
import FunFactsArea from "@/components/Common/FunFactsArea";
import Partners from "@/components/Common/Partners";
import SliderVirtual from "@/components/Common/sliderVirtual";
import FAQ from "@/components/First/Faq";
import Footer from "@/components/_App/Footer";
import CTAStyleTwo from '@/components/First/CTAStyleTwo';
import OurSolutions from "@/components/Common/OurSolutions";




const Index = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <OurSolutions />
            <FunFactsArea />
            <SliderVirtual />
            <Partners />          
            <FAQ />
            <CTAStyleTwo />
            <Footer />
        </>
    )
}
export default Index;