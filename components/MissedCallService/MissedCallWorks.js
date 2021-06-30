import React from 'react';
import Link from 'next/link';
// import * as Icon from 'react-feather';

const MissedCallWorks = () => {
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


        <div className="features-area pt-80 pb-50 bg-f7fafd">
            <div className="container">
                
                <h2 className ="text-center">How Missed Call Service Actually Works</h2>
                <div className="bar py-2">
                    <h6>
                    Your advertised number on diffenet medium sources (9810 XXX XXX) like Digital Media, Radio & TV, Publishing-Broucher, Pumplets, holdings etc. Or Product <strong>(Anyone who gives a missed call to a number, call will be get disconnect after a ring)</strong>
                    </h6>
                    <h6><strong>Each Missed Call is logged in System</strong></h6>
                    <h6><strong>Interact with Customer as per Business Process</strong>
                    </h6>
                    <h6><strong>Automize your Feedback/Support Or Verification </strong></h6>
                    <h6>And post call completed, System will automatically send sms on caller number with your customer sender ID,<strong> Example :  Pay TM, Tata Sky, ID-Idea, VM-ICICIB)</strong></h6>
                    <h6>You can also set Auto Thank you SMS, give updates or interact with customer for which purpose you asked to give missed call</h6>
                </div>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <h2>Missed Call Number for your Business</h2>    
                        <h6>
                            Your customer can placed a missed call to your given number at zero cost and receive a call back immediately. Missed Call Service is easiest way to give your customer updates, Lead Generation, Free Callback to caller, Customer Engagement, Customer Support, Customer Feedback, Application Download, Opinion Poll, OTP/Mobile Number Verification.
                        </h6>
                        <h6>
                            <strong>Lead Generation :</strong> This is an effective and low cost method to generate more leads. Also create awareness and interest among people about your business.
                        </h6>
                        <h6>
                            <strong>Customer Engagement :</strong> Missed Call can be followed  by a variety of actions – another call, text message etc.
                        </h6>
                        <h6>
                            <strong>Customer Verification :</strong> Missed call alert is a better alternative to OTPs for customer verification. Ask them to verify their phone number by giving a missed to a mobile number.
                        </h6>
                        <h6>
                            <strong>Conduct Polls, Collect Feedback : </strong>Before you launch new products and services use missed call solution to conduct research and survey polls about consumer opinion and needs
                        </h6>
                    </div>
                </div>  
                
            </div>
        </div>
        </>
    )
}

export default MissedCallWorks;  