import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import CloudtelephonyPricing from '@/components/PricingPlans/NavbarPricing/CloudtelephonyPricing';
import SmsPricing from '@/components/PricingPlans/NavbarPricing/SmsPricing';
import DialerPricing from '@/components/PricingPlans/NavbarPricing/DialerPricing'; 
 
const Pricing = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Pricing" />

            <div className="section-title">
                    <h2>Standard plan designed for businesses</h2>
                    <h4>If plan doesn’t suits you, Call us for Customised Plan on +91-9871045375 </h4>
                </div>

                <button type="submit" formaction="/CloudtelephonyPricing.js">CloudTelephony</button>
                <button type="submit" formaction="/SmsPricing.js">SMS</button>
                <button type="submit" formaction="/DialerPricing.js">Submit to another page</button>

            <CloudtelephonyPricing />

            <SmsPricing />

      
            <DialerPricing />
    

            <Footer />
        </>
    )
}

export default Pricing;