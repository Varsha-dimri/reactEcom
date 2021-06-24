import React from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';

const OurSolutions = () => {
    return (
        <div className="features-area pt-80 pb-50 bg-f7fafd">
            <div className="section-title">
                <h1><u>OUR SOLUTION</u></h1>
            </div>
            <div className="container">
                <div className ="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <div className="icon spinner-border-m">
                                <Icon.Server />
                                <img src="images/ivr-icon.png" />
							</div>
                            <h5>IVR Service</h5><br />
                            <p>Automated telephony system that interacts with callers, gathers information & routes calls to specific recipient.</p>
                       </div>     
                       <div className="col-1">

                       </div>
                       
                        <div className="col-3">
                            <div className="icon spinner-border-m">
                                <Icon.Server />
                            </div>
                            <h5>Missed Call Service</h5><br />
                            <p>Services used for Customer engagement, verification, Lead generation, Conduct pool and collecting feedback</p>
                        </div>
                        <div className="col-1">

                        </div>
                        <div className="col-3">
                            <div className="icon spinner-border-m">
                                    <Icon.Server />
                                </div>                            
                            <h5>Tollfree Service</h5><br />
                            <p>1800 Number which free for caller, domestic and international use which add credibility for business</p>
                        </div>
                        <div className="col-3">

                        </div>
                    </div><br />
                
                    <div className="row">
                        <div className="col-3">
                            <div className="icon spinner-border-m">
                                    <Icon.Server />
                                </div>
                            <h5>SMS Service</h5><br />
                            <p>SMS solution help to businesses with their marketing campaign, service alert/updates and OTP confirmation.</p>
                        </div>                           
                        <div className="col-1">
                            </div> 
                        <div className="col-3">
                            <div className="icon spinner-border-m">
                                    <Icon.Server />
                                </div>
                            <h5>Voice Broadcast</h5><br />
                            <p>Voice broadcasting helps in notification, confirmations, promotions, survey & discount with scalability.</p>
                        </div>
                        <div className="col-1">

                        </div>
                        <div className="col-3">
                            <div className="icon spinner-border-m">
                                    <Icon.Server />
                                </div>
                            <h5>Audio Conference</h5><br />
                            <p>Connect the caller/participant on cloud space via dial-in or dial-out method with special features.</p>
                        </div>
                        <div className="col-1">
                            
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-3">
                            <div className="icon spinner-border-m">
                                    <Icon.Server />
                                </div>
                            <h5>Call Center Dialer</h5><br />
                            <p>Receive incoming calls, place outgoing calls, Call centre matrics with performance management.</p>
                        </div>                            
                        <div className="col-1">
                            
                        </div>
                        <div className="col-3">
                            <div className="icon spinner-border-m">
                                    <Icon.Server />
                                </div>
                            <h5>BeTyphon- Mobile CRM</h5><br />
                            <p>Lead Management Software helps to track and manage the lead, customer, telesales, field executive and much more</p>
                        </div>
                        <div className="col-1">
                            
                        </div>
                        <div className="col-3">
                            <div className="icon spinner-border-m">
                                    <Icon.Server />
                                </div>
                            <h5>ETS-Employee Tracking Solution</h5><br />
                            <p>Track calls in detail with Recording, Location and attendance of your employee</p>
                        </div>
                        <div className="col-1">
                            
                        </div>
                    </div>
                </div>     
            </div>                
        </div> 

    )
}

export default OurSolutions;  