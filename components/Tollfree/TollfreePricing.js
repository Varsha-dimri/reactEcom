import React from 'react';
import Link from 'next/link';

const TollfreePricing = () => {
    return (
        <div className="pricing-area pt-80 pb-50 bg-f7fafd">
            <div className="container">
                <div className="section-title">
                    <h2>Price</h2>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-pricing-table">
                            <div className="pricing-header">
                                <h4>Startup</h4>
                                <h2>Rs. 18000/ Yearly</h2>
                                <h5>12000 Minutes</h5>
                            </div>
                        
                                <div className="pricing-features">
                                <ul>
                                    <li><i data-feather="check"></i> Welcome Message</li>
                                    <li><i data-feather="check"></i> Programmable Extensions</li>
                                    <li><i data-feather="check"></i> SMS Alert</li>
                                    <li><i data-feather="check"></i> Voicemail</li>
                                    <li><i data-feather="check"></i> Number Blacklist</li>
                                    <li><i data-feather="check"></i> Multilevel IVR</li>
                                    <li><i data-feather="check"></i> Sticky Agent</li>
                                    <li><i data-feather="check"></i> Circle base Routing</li>
                                    <li><i data-feather="check"></i> Customize Sender Id</li>
                                </ul>
                            </div>
                            
                            <div className="pricing-footer">
                                <Link href="signup">
                                    <a className="btn btn-primary">SIGNUP TO BEGIN</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="single-pricing-table active-plan">
                            <div className="pricing-header">
                                <h4>Advance</h4>
                                <h2>Rs. 6000/ Yearly</h2>
                                <h5>42000 Minutes</h5>
                            </div>
                       
                            
                            <div className="pricing-features">
                                <ul>
                                     <li><i data-feather="check"></i> Welcome Message</li>
                                    <li><i data-feather="check"></i> Programmable Extensions</li>
                                    <li><i data-feather="check"></i> SMS Alert</li>
                                    <li><i data-feather="check"></i> Voicemail</li>
                                    <li><i data-feather="check"></i> Number Blacklist</li>
                                    <li><i data-feather="check"></i> Multilevel IVR</li>
                                    <li><i data-feather="check"></i> Sticky Agent</li>
                                    <li><i data-feather="check"></i> Customize Sender Id</li>
                                    <li><i data-feather="check"></i> Circle base Routing</li>
                                </ul>
                            </div>
                            
                            <div className="pricing-footer">
                                <Link href="signup">
                                    <a className="btn btn-primary">SIGNUP TO BEGIN</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="single-pricing-table">
                            <div className="pricing-header">
                                <h4>Business</h4>
                                <h2>Rs.1,20,000/ Yearly</h2>
                                <h5>90000 Minutes</h5>
                                
                            </div>
                       
                            
                            <div className="pricing-features">
                                <ul>
                                <li><i data-feather="check"></i> Welcome Message</li>
                                    <li><i data-feather="check"></i> Programmable Extensions</li>
                                    <li><i data-feather="check"></i> SMS Alert</li>
                                    <li><i data-feather="check"></i> Voicemail</li>
                                    <li><i data-feather="check"></i> Number Blacklist</li>
                                    <li><i data-feather="check"></i> Multilevel IVR</li>
                                    <li><i data-feather="check"></i> Sticky Agent</li>
                                    <li><i data-feather="check"></i> Circle base Routing</li>
                                     <li><i data-feather="check"></i> Customize Sender Id</li>
                                </ul>
                            </div>
                            
                            <div className="pricing-footer">
                                <Link href="signup">
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

export default TollfreePricing;
