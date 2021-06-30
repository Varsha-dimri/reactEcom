import React from 'react';
import Link from 'next/link'
import * as Icon from 'react-feather';

const ServicesArea = () => {
    return (
        <>
                <div className="container fluid">
                <div className="content">
                    <div className="row">      
                        <div className="col-lg-6">   
                            <h1 className ="py-3">Welcome To Techmet</h1>
                        </div>
                      
                       
                    <div className="col-6">
                      <div className="col-1 "></div>
                         <div className="row py-2 ">
                             <div class="btn-group">
                                   
                                   <div className="col-2">
                                       <Link href="/contact">
                                         <a className="btn btn-primary">Pricing</a>
                                       </Link>
                                   </div>

                                   <div className="col-1"></div>
                                   <div className="col-2">
                                       <Link href="/contact">
                                         <a className="btn btn-primary px-5">FAQ</a>
                                       </Link>
                                   </div>

                                       <div className="col-1"></div>
                                   <div className="col-2">
                                       <Link href="/contact">
                                         <a className="btn btn-primary px-5">Login</a>
                                       </Link>
                                   </div>

                                  <div className="col-1"></div>
                                    <div className="col-2">
                                       <Link href="/contact">
                                         <a className="btn btn-danger">FreeTrial</a>
                                       </Link>
                                    </div>
                              </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <h2 className = "py-5 text-center"><strong>Make your operations more transparent & increase your business…</strong></h2> 
                        <h6 className = "py-5"><strong>LMS</strong> is stands for <strong>Lead Management Software</strong>. This technology helps you to manage your employee performance and analyse the ROI of leads sources with customised workflow.</h6>
                        <h6 className = "py-2"><strong>Introducing BeTyphon – The best Lead Management Solution for Your Business Growth</strong></h6>
                        <h6 className = "py-3">
                            Complete all sales activities, see detailed company and contact records and view communication history all in one place so that you can manage leads without the hassle or wasted efforts. Betyphon’s helps you to manage and follow up all leads in one place. It lets you assign different prospects to different agent and track them in one place.
                        </h6>
                        <h6 className = "py-3">
                            You can personalize your customer outreach without searching for details. Organise and score leads as they are captured. Leads can be organized in multiple ways – by geography, by the media channel they are sourced from, their behavioural traits and more. Without a flexible lead management system, it can be challenging to coordinate distribution, follow up and management schedule.
                        </h6>
                        <h6 className = "py-3"><strong>BeTyphon is easy to use, flexible to suit your specific needs –</strong></h6>
                        <ul>
                            <li className = "py-3"> Easy and straightforward manner to manage individual leads. Track the performance all automated when and how you like.</li>
                            <li className = "py-3">Make your operations more transparent & increase your business</li>
                            <li className = "py-3">BeTyphon Lead Management technology helps you to manage your employee performance and analyse the ROI of leads sources with customised workflow.</li>
                            <li className = "py-3">Betyphon works as SAAS which allows you to access from anywhere on Computer, Tablet or Mobile.</li>
                            <li className = "py-3">Betyphon mobile app allows the call recording, auto dialing, GPS tracking, Picture upload & much more</li>
                        </ul>
                        <h6 className = "py-3">
                            In today’s fast moving business times, the probability that you are not up-to-date with new technologies is shrinking the growth of your business. Every company, big or small, any industry, needs a constant flow of happy customers and clients. Organizations generate leads through various online & offline marketing initiatives with the aim of converting these leads into customers. Majority of the companies use hardcopy or excel sheets to maintain details of these leads. Any follow-ups done, conversions made or even discarded leads are still managed on paper or time consuming excel sheets.
                        </h6>
                        <h6 className = "py-3">
                            No matter which industry your company belongs to, your pain-areas following the old processes i.e. creating manual reports, no timely & systematic follow ups will cause leakage in business and costly business operations. These methods cause loss of correct information on conversions, loss of time and money
                        </h6>
                        <h6 className = "py-3">You spend money and resources on marketing efforts to generate leads, what happens to it? Well most marketing leads are never pursued. In fact, it’s estimated that 80% of leads generated through marketing get lost, discarded or ignored. That’s a lot of lost revenue.  Also most leads don’t convert on the first impression, which means they need to be nurtured over time.<strong> So Betyphon is solution for you</strong></h6>
                    </div>
                </div>    

                <div className="services-area ptb-80 pb-50">
                            <div className="section-title">
                <div className="container-fluid bg-light ">
                    <div className="row justify-content-center align-items-center">                        

                                <h2><ul>Benefits</ul></h2>
                            </div>

                            <div className="row text-center">
                                <div className="col-lg-3 col-md-3">
                                    <div className="box">
                                    <div className="icon spinner-border-m">
                                     <img src="/images/Benefit01.png" class="rounded-circle" alt="Cinque Terre"/>
                                     </div> 
                                    </div>
                                    <h5>One Dashboard for all</h5>
                                </div>

                                <div className="col-lg-3 col-md-3">
                                    <div className="box">
                                    <div className="icon spinner-border-m">
                                    <img src="/images/Benefit02.png" class="rounded-circle" alt="Cinque Terre"/>
                                    </div>
                                    </div>
                                    <h5>Call recording</h5>
                                </div>

                                <div className="col-lg-3 col-md-3">
                                    <div className="box">
                                    <div className="icon spinner-border-m">
                                     <img src="/images/Benefit03.png" class="rounded-circle" alt="Cinque Terre"/>
                                    </div>
                                    </div>
                                    <h5>Lead Capture</h5>
                                </div> 

                                <div className="col-lg-3 col-md-3">
                                    <div className="box">
                                    <div className="icon spinner-border-m">
                                    <img src="/images/Benefit04.png" class="rounded-circle" alt="Cinque Terre"/>
                                    </div>
                                    </div>
                                    <h5>Work anywhere</h5>
                                </div>
                                
                                <div className="col-lg-3 col-md-3">
                                    <div className="box">
                                    <div className="icon spinner-border-m">
                                    <img src="/images/Benefit05.png" class="rounded-circle" alt="Cinque Terre"/>
                                    </div>
                                    </div>
                                    <h5>Powerful Forms</h5>
                                </div>

                                <div className="col-lg-3 col-md-3">
                                    <div className="box">
                                    <div className="icon spinner-border-m">
                                    <img src="/images/Benefit06.png" class="rounded-circle" alt="Cinque Terre"/>
                                    </div>
                                    </div>
                                    <h5>Integration</h5>
                                </div>

                                <div className="col-lg-3 col-md-3">
                                    <div className="box">
                                    <div className="icon spinner-border-m">
                                    <img src="/images/Benefit07.png" class="rounded-circle" alt="Cinque Terre"/>
                                    </div>
                                    </div>
                                    <h5>Pay-as-you-grow model</h5>
                                </div>

                                <div className="col-lg-3 col-md-3">
                                    <div className="box">
                                    <div className="icon spinner-border-m">
                                    <img src="/images/Benefit08.png" class="rounded-circle" alt="Cinque Terre"/>
                                    </div>
                                    </div>
                                    <h5>Real-time Reports</h5>
                                </div>
                           </div>
                        </div>
                </div>
            </div> 
           
        </>
    )
}

export default ServicesArea;