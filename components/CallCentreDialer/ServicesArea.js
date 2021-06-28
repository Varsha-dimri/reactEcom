import React from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';

const ServicesArea = () => {
    return (
        <>
            <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <h2>Manage your calls with Call Centre Solution</h2><br />
                       <p>Techmet understand the dynamics of your customer and keep them engaged till life-cycle. 
                           You can manage them using <Link href="call-centre-dialer"><strong><a>call Centre solutions</a></strong></Link> and reduce the operating cost. 
                           <Link href="call-centre-dialer"><strong><a>Auto dialer</a></strong></Link> removes non-connectivity with agent because it connects with agent when customer get connected. 
                           We offers customer detailed report and integration to a number of third party application. 
                           A type of call Centre that is designed to make & receive a large volume of calls for customer by telephone and its easy to scale as per requirement.  
                           In Call Centre, communication happens for Sales, Subscription management, technical support, product request, billing and different enquiry from customer. 
                           <Link href="call-centre-dialer"><a><strong>Auto dialer</strong></a></Link> gives the premisis base control on <Link href="call-centre-dialer"><a><strong>call centre solution</strong></a></Link>.

                       </p>
                    </div>
                </div>    

                <div className="services-area ptb-80 pb-50">
                <div className="container">
                    <div className="row justify-content-center align-items-center">                        

                            <div className="section-title">
                                <h2>Benefits</h2>
                            </div>

                            <div className="row text-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                    <div className="icon spinner-border-m">
                                     <img src="/images/Benefit01.png" className="rounded-circle" alt="Cinque Terre"/>
                                     </div> 
                                    </div>
                                    <h3>One Number for Callers</h3>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                    <div className="icon spinner-border-m">
                                    <img src="/images/Benefit02.png" className="rounded-circle" alt="Cinque Terre"/>
                                    </div>
                                    </div>
                                    <h3>Call attending at 1st ring</h3>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                    <div className="icon spinner-border-m">
                                     <img src="/images/Benefit03.png" className="rounded-circle" alt="Cinque Terre"/>
                                    </div>
                                    </div>
                                    <h3>Distribute Same information to each caller</h3>
                                </div> 

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                    <div className="icon spinner-border-m">
                                    <img src="/images/Benefit04.png" className="rounded-circle" alt="Cinque Terre"/>
                                    </div>
                                    </div>
                                    <h3>Increase your brand image for callers</h3>
                                </div>
                                
                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                    <div className="icon spinner-border-m">
                                    <img src="/images/Benefit05.png" className="rounded-circle" alt="Cinque Terre"/>
                                    </div>
                                    </div>
                                    <h3>No Hardware cost</h3>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                    <div className="icon spinner-border-m">
                                    <img src="/images/Benefit06.png" className="rounded-circle" alt="Cinque Terre"/>
                                    </div>
                                    </div>
                                    <h3>Never loss business leads</h3>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                    <div className="icon spinner-border-m">
                                    <img src="/images/Benefit07.png" className="rounded-circle" alt="Cinque Terre"/>
                                    </div>
                                    </div>
                                    <h3>Pay-as-you-grow model</h3>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                    <div className="icon spinner-border-m">
                                    <img src="/images/Benefit08.png" className="rounded-circle" alt="Cinque Terre"/>
                                    </div>
                                    </div>
                                    <h3>Scale without adding manpower</h3>
                                </div>
                           </div>
                        </div>
                </div>
            </div> 
           
        </>
    )
}

export default ServicesArea;