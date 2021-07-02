import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from '@/components/AudioConference/MainBanner';

import ServicesArea from "@/components/AudioConference/ServicesArea";
import Features from '@/components/AudioConference/Features';
import HowAudioConferenceWorks from "@/components/AudioConference/HowAudioConferenceWorks";
import AudioConferencePricing from"@/components/AudioConference/AudioConferencePricing";
import SliderVirtual from "@/components/Common/sliderVirtual";
import Partner from '@/components/AudioConference/Partner';
import CTAStyleTwo from '@/components/AudioConference/CTAStyleTwo';
import Footer from "@/components/_App/Footer";

const AudioConference = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
          
            <ServicesArea />
            <Features />
            <HowAudioConferenceWorks />
            <AudioConferencePricing />
            <SliderVirtual />
            <Partner />
            <CTAStyleTwo />
            <Footer />
        </>
    )
}

export default AudioConference;