import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/IVRServices/MainBanner";;
import FunFactsArea from "@/components/Common/FunFactsArea";
// import Feedback from "@/components/Common/Feedback";
import Partners from "@/components/Common/Partners";
import FAQ from "@/components/First/Faq";
import Footer from "@/components/_App/Footer";
import OurSolutions from "@/components/Common/OurSolutions";



const Index = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <OurSolutions />
            <FunFactsArea />
            {/* <Feedback /> */}
            <Partners />
            <FAQ />
            <Footer />
        </>
    )
}
export default Index;