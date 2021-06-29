import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/PayUs/MainBanner";
import CTAStyleTwo from "@/components/PayUs/CTAStyleTwo";
import Products from "@/components/PayUs/Products";
import AccountInfo from "@/components/PayUs/AccountInfo";
import Partners from '@/components/Common/Partners';
import SliderVirtual from "@/components/Common/sliderVirtual";
import Footer from "@/components/_App/Footer";

 
const PayUs = () => {
    return (
       
        <>
            <Navbar />
            <MainBanner />
            <CTAStyleTwo />
            <Products />
            <AccountInfo />
            <SliderVirtual />
            <Partners />
            <Footer />
        </>
    )
}

export default PayUs;