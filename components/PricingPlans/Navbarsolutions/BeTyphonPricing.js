import React from 'react';
import Link from 'next/link';

const BeTyphonPricing= () => {
    return (
        <div className="pricing-area pt-80 pb-50 bg-f7fafd">
            <div className="container">
                <div className="section-title">
                    <h2>Pricing of Plan with Features</h2>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-pricing-table">
                            <div className="pricing-header">
                                <i className="flaticon-data"></i>
                                <h4>Startup</h4>
                                <h3>1 User</h3>
                                <h5> (Forever)</h5>
                            </div>
                        
                                <div className="pricing-features">
                                <ul>
                                    <li><i data-feather="check"></i> 1 Users </li>
                                    <li><i data-feather="check"></i> Email Support Only</li>
                                    <li><i data-feather="check"></i> Web & Mobile CRM</li>
                                    <li><i data-feather="check"></i> Auto Lead Distribution</li>
                                    <li><i data-feather="check"></i> Tasks & Reminders </li>
                                    <li><i data-feather="check"></i> Customized Calling structure </li>
                                    <li><i data-feather="check"></i> Real-time Reports </li>
                                    

                                    
                                </ul>
                            </div>
                            
                            <div className="pricing-footer">
                                <Link href="#">
                                    <a className="btn btn-primary">SIGNUP TO BEGIN</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="single-pricing-table active-plan">
                            <div className="pricing-header">
                                <i className="flaticon-cloud"></i>
                                <h4>Advance</h4>
                                <h3>Rs. 1000/User/Month</h3>
                                <h5>Billed Yearly</h5>
                            </div>
                       
                            
                            <div className="pricing-features">
                                <ul>
                                <li><i data-feather="check"></i> Everything in free, and  </li>
                                    <li><i data-feather="check"></i> Chat & phone support</li>
                                    <li><i data-feather="check"></i> Auto Lead Capture</li>
                                    <li><i data-feather="check"></i> Dynamic Reports</li>
                                    <li><i data-feather="check"></i> SMS & Email Communication</li>
                                    <li><i data-feather="check"></i> Push Notification </li>
                                    <li><i data-feather="check"></i> Call Details & Call Recording </li>
                                    <li><i data-feather="check"></i> Real-time Tracking </li>
                                    
                                </ul>
                            </div>
                            
                            <div className="pricing-footer">
                                <Link href="#">
                                    <a className="btn btn-primary">SIGNUP TO BEGIN</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="single-pricing-table">
                            <div className="pricing-header">
                                <i className="flaticon-vps"></i>
                                <h4>Business</h4>
                                <h3>Rs. 1500/ User/ Month</h3>
                                <h5>Billed Yearly</h5>
                                
                            </div>
                       
                            
                            <div className="pricing-features">
                                <ul>
                                <li><i data-feather="check"></i> Everything in Free & Standard, and </li>
                                    <li><i data-feather="check"></i> On-site Support</li>
                                    <li><i data-feather="check"></i> Rule based triggers</li>
                                    <li><i data-feather="check"></i> Custom Workflow</li>
                                    <li><i data-feather="check"></i> Push Notification </li>
                                    <li><i data-feather="check"></i> API and Webhook Integration </li>
                                    <li><i data-feather="check"></i> Custom Lead Integrations </li>
                                    
                                </ul>
                            </div>
                            
                            <div className="pricing-footer">
                                <Link href="#">
                                    <a className="btn btn-primary">SIGNUP TO BEGIN</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shape Images */}
            <div className="shape8 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
            <div className="shape2 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
            <div className="shape7">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape4">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
        </div>
    );
}

export default BeTyphonPricing;
