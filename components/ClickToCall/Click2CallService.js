import React from 'react';
import Link from 'next/link';

const Click2CallService = () => {
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
                        <h2 className="text-center py-3">Connect your Website Visitor thru Click2Call Service</h2><br />
                      <h6 className="py-2"> Click2Call Service stands to make it easier for your web visitors to just click and connect with you instantly over telephone. This technology enables interaction between a caller and a computer via the telephone. Callers click on the website ‘connect’ button and call will be connected to the desired person or department anywhere.
                        </h6>
                        <h6 className="py-2">
                        A person clicks a button on a web or app platform to connect to the company whose button that is. In simple terms a click-to-call service is a request-to-connect or a speed dial for a business communication. The immediate connection can be processed on a phone call or over a cloud based phone system. The click-to-call dials a number, which is embedded behind this ‘connect’ button, automatically for the caller in a split second. As an organisation you can post a button on your website or your mobile app to enable your customers to call you.
                        </h6>
                        <h6 className="py-2">
                        Click-to-call is also called click-to-talk, click-to-text or request-to-call. These click-to-call links are commonly found as buttons on websites. But several times click-to-call can be set up as hyperlinks over emails and videos. Currently used technology does not require a customer to download any software.
                        </h6>
                        <h6 className="py-2">
                            This technology is yet another form of direct response marketing to bring the business closer to its consumers. Increase in the use of mobile devices is making the click-to-call feature more popular among users. Anyone using the click-to-call feature is demonstrating his interest in your offerings that’s why their interest in getting on a call immediately. This is good news for an organisation’s inbound sales teams.
                        </h6>
                    </div>

            </div>

            
        
        </>

    )
}        

export default Click2CallService;