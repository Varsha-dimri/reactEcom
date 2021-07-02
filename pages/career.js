import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/Career/MainBanner";
import NavTab from "@/components/Career/NavTab";
import Footer from "@/components/_App/Footer";


const Career = () => {
    return(
        <>
            <Navbar />
            <MainBanner />
            <NavTab />
            <Footer />
        </>
    )
}

export default Career;