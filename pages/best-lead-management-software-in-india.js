import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/IVRServices/MainBanner";
import TollfreeWorks from "@/components/Tollfree/TollfreeWorks";
import Footer from "@/components/_App/Footer";

const BestTollfreeServiceInIndia = () => {         
    return(
        <>
            <Navbar />
            <MainBanner />
            <div className="container ptb-80 pb-50">
                <h2>Make your operations more transparent & increase your business…</h2>
                <p>
                    LMS is stands for Lead Management System. This technology helps you to manage your employee performance and analyse the ROI of leads sources with customised workflow.
                </p>
                <p>
                    Betyphon works as SAAS which allows you to access from anywhere on Computer, Tablet or Mobile. Betyphon mobile app allows the call recording, auto dialing, GPS tracking, Picture upload & much more
                </p>   
                <h1>BeTyphon helps you to</h1>
                <br />

                <h2>Are you looking for a software which makes your operations more transparent and add value in your business?</h2>     
                
                <br />
                <br />
                <p>
                    <strong>Create Business Rules:</strong> Build your own business rule which supposed to be followed by each of concern person who are involved with business.
                </p>    
                <p>
                    <strong>Lead Distribution:</strong> Distribute your lead as per current requirement of business line. You can create auto rule engine as well.
                </p>
                <p>
                    <strong>Customer Overview as per need:</strong> You can view the customer as you want to see (Count, Amount, Location, Status, Source etc.)
                </p>
                <p>
                    <strong>Customer Management: </strong>Manage your customer as per business need.
                </p>
                <p>
                    <strong>Enhance Team Performance: </strong>On basis of reports you can execute your team to make better performance.
                </p>
                <p>
                    <strong>Scalable tool:</strong> Software is a tool which can be accessed by multiple counts with hierarchy which makes business more efficient and scalable.
                </p>
            </div>
            <Footer />
         </>
    )
}

export default BestTollfreeServiceInIndia;