import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import CloudtelephonyPricing from '@/components/PricingPlans/NavbarPricing/CloudtelephonyPricing';
import SmsPricing from '@/components/PricingPlans/NavbarPricing/SmsPricing';
import DialerPricing from '@/components/PricingPlans/NavbarPricing/DialerPricing'; 
import FAQ from '@/components/PricingPlans/NavbarPricing/Faq';
import PricingText from '@/components/PricingPlans/NavbarPricing/PricingText';
 
const Pricing = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Pricing" />

                <div className="section-title">
                    <h2>Standard plan designed for businesses</h2>
                    <h4>If plan doesn’t suits you, Call us for Customised Plan on +91-9871045375 </h4>
                </div>
                <div class="w3-container">
  

<div class="w5 -bar">
  <a href="#" class="w5-button w3-green">CloudtelephonyPricing </a>
  <a href="#" class="w5-button">SmsPricing</a>
  <a href="#" class="w5-button">DialerPricing</a>

</div>

</div>
      <CloudtelephonyPricing />
            <SmsPricing />     
            <DialerPricing />
            <div className="text-right">
                <p>
                    <strong>Note:</strong> All charges of our services are exclusive of taxes, payable annually and include 24*7 customer support.
                </p>
            </div>
            <PricingText />
            <FAQ />
                <p className="text-right">
                    Not sure about service subscription ? Please go thru 100% refundable policy
                </p>
            <Footer />
        </>
    )
}

export default Pricing;