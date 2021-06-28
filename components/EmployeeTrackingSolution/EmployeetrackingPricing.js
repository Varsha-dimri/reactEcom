import React from 'react';
import Link from 'next/link';

const EmployeetrackingPricing= () => {
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
                                <h4>Trial</h4>
                                <h1>Free</h1>
                                <h3> User Only</h3>
                            </div>
                        
                            <div className="pricing-features">
                                <ul>
                                    <li><i data-feather="check"></i> Team Management </li>
                                    <li><i data-feather="check"></i> Call Recording</li>
                                    <li><i data-feather="check"></i> Searching Bar</li>
                                    <li><i data-feather="check"></i> Dynamic Reports</li>
                                    <li><i data-feather="check"></i> - </li>
                                    <li><i data-feather="check"></i> - </li>
                                    <li><i data-feather="check"></i> - </li>
                                    <li><i data-feather="check"></i> - </li>
                                    <li><i data-feather="check"></i> - </li>
                                    <li><i data-feather="check"></i> - </li>
                                    <li><i data-feather="check"></i> - </li>
                                    <li><i data-feather="check"></i> - </li>
                                    <li><i data-feather="check"></i> - </li>
                                    <li><i data-feather="check"></i> - </li>

                                    
                                </ul>
                            </div>
                            
                            <div className="pricing-footer">
                                <Link href="contactus">
                                    <a className="btn btn-primary">SIGNUP TO BEGIN</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="single-pricing-table active-plan">
                            <div className="pricing-header">
                                <h4>Startup Plan</h4>
                                <h1>Rs. 5000</h1>
                                <h3>5Users/Monthly</h3>
                            </div>
                       
                            
                            <div className="pricing-features">
                                <ul>
                                <li><i data-feather="check"></i> Team Management </li>
                                    <li><i data-feather="check"></i> Call Recording</li>
                                    <li><i data-feather="check"></i> Searching Bar</li>
                                    <li><i data-feather="check"></i> Dynamic Reports</li>
                                    <li><i data-feather="check"></i> Live Location Tracking </li>
                                    <li><i data-feather="check"></i>Whatsapp Direct </li>
                                    <li><i data-feather="check"></i> Visit Tracking </li>
                                    <li><i data-feather="check"></i>Mini CRM </li>
                                    <li><i data-feather="check"></i> Image Mapping </li>
                                    <li><i data-feather="check"></i> SMS - Disposition </li>
                                    <li><i data-feather="check"></i> Notification </li>
                                    <li><i data-feather="check"></i> - </li>
                                    <li><i data-feather="check"></i> - </li>
                                    <li><i data-feather="check"></i> - </li>

                                </ul>
                            </div>
                            
                            <div className="pricing-footer">
                                <Link href="contactus">
                                    <a className="btn btn-primary">SIGNUP TO BEGIN</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="single-pricing-table">
                            <div className="pricing-header">
                                <h4>Enterprsies</h4>
                                <h1>Rs. 40000</h1>
                                <h3>50 Users/Monthly</h3>
                                
                            </div>
                       
                            
                            <div className="pricing-features">
                                <ul>
                                <li><i data-feather="check"></i> Team Management </li>
                                    <li><i data-feather="check"></i> Call Recording</li>
                                    <li><i data-feather="check"></i> Searching Bar</li>
                                    <li><i data-feather="check"></i> Dynamic Reports</li>
                                    <li><i data-feather="check"></i> Live Location Tracking </li>
                                    <li><i data-feather="check"></i>Whatsapp Direct </li>
                                    <li><i data-feather="check"></i> Visit Tracking </li>
                                    <li><i data-feather="check"></i>Mini CRM </li>
                                    <li><i data-feather="check"></i> Image Mapping </li>
                                    <li><i data-feather="check"></i> SMS - Disposition </li>
                                    <li><i data-feather="check"></i> Notification </li>
                                    <li><i data-feather="check"></i> User Pin  </li>
                                    <li><i data-feather="check"></i> API Integration </li>
                                    <li><i data-feather="check"></i> Chat </li>
                                </ul>
                            </div>
                            
                            <div className="pricing-footer">
                                <Link href="contactus">
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

export default EmployeetrackingPricing;
