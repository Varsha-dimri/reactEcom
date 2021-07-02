import React from 'react';
import Link from 'next/link';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/BestSms/MainBanner";
import IVRWorks from "@/components/IVRServices/IVRWorks";
import Footer from "@/components/_App/Footer";

const BestServiceProviderInDelhi = () => {         
    return(
        <>
        <   Navbar />
            <MainBanner />
            <div className="container ptb-80 pb-50">
                <h1>Communicate about yourself in Single Click (SMS)</h1>
                <p>
                SMS is useful for all types of businesses, especially in targeting the local customers. With the help of SMS you can communicate your existing customer or increase your sale by 200% in just a couple of days. SMS Marketing service is excellent for promoting as well as in communicating with the customers and conveying a brand message or to develop strong brand awareness among the mass.
                </p>
                <br />
                <br />
                <h2>Usage</h2>
                <p>
                    <strong> Promotional Messages : Use for promotion acticity in India.</strong>
                </p>
                <p>
                    <strong>Transactional SMS : Use for communication from company to consumer in India.</strong>
                </p>
                <p>
                    <strong>International SMS : Communication via SMS globally.</strong>
                </p>

                <br />
                <br />
                <p>
                    You can send simple broadcast
                </p>
                <p>
                    System will send the SMS to all the numbers that you have uploaded.
                </p>
                <p>
                    Promotions SMS is usually used for enquiry generation for product/services.
                </p>
                <p>
                    Transactional SMS used for update and communication to customer about product/services.
                </p>
                <p>
                High capacity system is capable to sending millions of SMS simultaneously.<strong>(This is also depends on   server load and interconnect traffic load between various telephone exchange/operator)</strong>
                </p>
                
            </div>
           
            <Footer />
        </>
    )
}

export default BestServiceProviderInDelhi;