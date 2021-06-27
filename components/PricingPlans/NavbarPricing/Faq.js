import React from 'react';
import Navbar from "@/components/_App/Navbar";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

const FAQ = () => {
    return(
        <>
            <Navbar />

            <div className="faq-area ptb-80">
                <div className="container">
                    <div className="faq-accordion">
                        <div className="section-title">
                            <h1>Frequently Asked Questions</h1>    
                        </div>
                        <Accordion allowZeroExpanded preExpanded={['a']}>
                            <AccordionItem uuid="a">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                        Question : How to decide the plan for Services ?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Answer :  You can choose the plan based on your requirements and call volume. We have Startup, Advance & Business mode for each of our services.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="b">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            Question : What is the difference between IVR and Tollfree services ?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Answer : Techmet services can be used by different industries as per their requirement and suitability. We have created products and pricing considering the requirements of different sizes of businesses. IVR Services is a product for businesses who want IVR solution on Mobile number and cost will be charged for Leg-B forwarding only. Tollfree Services is also a product for business which starts from 1800 where callers will not been charged for calls. Subscriber will be charged for incoming calls.
                                    </p>
                              
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="c">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                        Question : How do i get IVR Services on my existing number ?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Answer : We understand that you may already be having a contact number shared with your existing customers. You can easily forward your existing tollfree or mobile numbers to Techmet provided number (DID Number). Our sales representative will guide you through the process and we will happy to serve you.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        
                            <AccordionItem uuid="d">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                        Question : What is the Refund policy ?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Answer : We promise that we will provide a full refund in case you are not satisfied with Techmet services, anytime within first 30 days for your service activation
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <p className="text-right"><strong>Note:</strong> All charges of our services are based on requirement & avaiable on product page.</p>
                        </Accordion>
                    </div>
                </div>
            </div> 
        </>
    )
}



export default FAQ;