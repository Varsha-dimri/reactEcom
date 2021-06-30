import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from '@/components/IVRServices/MainBanner';
import Footer from "@/components/_App/Footer";


const Blog = () => {
    return(
        <>
            <Navbar />
            <MainBanner />
            <div className="container-fluid">
                <h1 className="text-center"><strong>TechMet Blog</strong></h1>
                <br />
                <h4 className="px-5">Expert Advice, Tips, Case Studies, Stories and more to help your Business Grow Faster!</h4>
                <br />
                <h6>No posts were found.</h6>
            </div>

            <Footer />
        </>
    )
}

export default Blog;