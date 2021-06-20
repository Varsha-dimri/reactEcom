import React from 'react';
import Link from 'next/link';

const MissedCallPricing= () => {
    return (
        <div className="pricing-area pt-80 pb-50 bg-f7fafd">
            <div className="container">
                <div className="section-title">
                    <h2>Pricing</h2>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-pricing-table">
                            <div className="pricing-header">
                                <i className="flaticon-data"></i>
                                <h4>Startup</h4>
                                <h1>Rs. 6000/ Per Year</h1>
                                
                            </div>
                        
                                <div className="pricing-features">
                                <ul>
                                    <li><i data-feather="check"></i> Incoming calls(50 Calls/per Day)</li>
                                    <li><i data-feather="check"></i> SMS Alert</li>
                                    <li><i data-feather="check"></i> CRM Integration</li>
                                    <li><i data-feather="check"></i> Number Blacklist</li>
                                    <li><i data-feather="check"></i> Email Alert & Report</li>
                                    <li><i data-feather="check"></i> Customize sender ID</li>
                                  
                                    
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
                                <h1>Rs. 10000/ Per Year</h1>
                            </div>
                       
                            
                            <div className="pricing-features">
                                <ul>
                                <li><i data-feather="check"></i> Incoming calls(50 Calls/per Day)</li>
                                    <li><i data-feather="check"></i> SMS Alert</li>
                                    <li><i data-feather="check"></i> CRM Integration</li>
                                    <li><i data-feather="check"></i> Number Blacklist</li>
                                    <li><i data-feather="check"></i> Email Alert & Report</li>
                                    <li><i data-feather="check"></i> Customize sender ID</li>
                                    
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
                                <h1>Rs. 25000/ Per Year</h1>
                                
                                
                            </div>
                       
                            
                            <div className="pricing-features">
                                <ul>
                                    <li><i data-feather="check"></i> Incoming calls(50 Calls/per Day)</li>
                                    <li><i data-feather="check"></i> SMS Alert</li>
                                    <li><i data-feather="check"></i> CRM Integration</li>
                                    <li><i data-feather="check"></i> Number Blacklist</li>
                                    <li><i data-feather="check"></i> Email Alert & Report</li>
                                    <li><i data-feather="check"></i> Customize sender ID</li>
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

export default MissedCallPricing;
