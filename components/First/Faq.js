import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
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
                            <h1>FAQ</h1>    
                        </div> 
                        <Accordion allowZeroExpanded preExpanded={['a']}>
                            <AccordionItem uuid="a">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            Question: How to get the demo of services?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Answer : Yes, We offers the demo of our standard solutions. Call us on customer care number +919871045375 or we can also contact with you, Click here.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="b">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            Question: How to become channel partner for products?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Answer : You can partner with us for fastest business growth across the globe. Join us, as Solutionist Or Channel Partner as per business dedication and expectation on it. Want to know more about the program Apply here.                                    
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="c">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            Question: How to pay for service subscription?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        <strong>Answer : You can pay us by any mode of payment – Online-NEFT & RTGS, Cheque, Cash Submission to bank, Paytm etc. Details are below.</strong>
                                        <strong>Payment Link :</strong> www.techmet.in/pay

                                        Bank Details:

                                        Company Name    : BSD Technologies Private Limited
                                        Account Number  : 51780200000180
                                        IFSC Code             : BARB0RAJGAO
                                        Branch                  : Rajendra Park, Gurgaon
                                        Swift Code            : BARBINBBGUR
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        
                            <AccordionItem uuid="d">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            Can I share resources between features?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="e">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            Is multidex supported for instant apps?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="f">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            Can I share resources between features?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    
                </div>
            </div>
 
            <Footer />
        </>
 
    )
}



export default FAQ;