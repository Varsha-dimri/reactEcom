import React from 'react';
// import Link from 'next/link';
// import * as Icon from 'react-feather';

const VirtualNumberWorks = () => {
    return (
        <div className ="row">
            <div className="features-area pt-80 pb-50 bg-f7fafd">
                <div className="container">
                    <div className ="col-lg-7 col-md-6">
                        <h2>How Virual Number Actually Works</h2>
                        <p>Anyone who calls on your Business Number, will first hear a Company welcome message (<strong>Welcome to XYZ Company Limited, We offers the special products and services</strong>) and post welcome message extension option will come :</p>
                
                        <ul>
                            <li>Press 1 for Sales Department</li>
                            <li>Press 2 for HR Department</li>
                            <li>Press 3 for Marketing Department</li>
                            <li>Press 5 for Accounts Department</li>
                            <li>Press 9 for customer care</li>
                        </ul>

                        <p>Based upon the extension option selected by caller, Incoming call will be automatically routed to any mobile or land-line phone mapped to that extension and agent start speaking with customer.</p>
                    
                        <p>And post call completed, System will automatically send sms on caller number.</p>
                    </div>
                    <div className="col-lg-7 col-md-6 bg-f7fafd">
                        <h3>Try Free-Signup Instant</h3>
                        <div className="faq-contact">
                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <input type="text" placeholder="Company Name" className="form-control" />
                                </div>
                            </div>
                                
                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <input type="email" placeholder="Email" className="form-control" />
                                </div>
                            </div>
                                
                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <input type="text" placeholder="Mobile Number" className="form-control" />
                                </div>
                            </div>
                                
                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <textarea name="message" cols="30" rows="6" placeholder="Message" className="form-control"></textarea>
                                </div>
                            </div>
                                
                            <div className="col-lg-12 col-md-12">
                                <button className="btn btn-primary" type="submit">Send Enquiry</button>
                            </div>
                        </div>
                        <h3>Instant setup. It’s free!</h3>
                    </div>
                </div>                                                  
            </div> 
        </div>
    )
}

export default VirtualNumberWorks;  