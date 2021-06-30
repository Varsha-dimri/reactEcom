import React from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';

const ServicesArea = () => {
    return (
        <>
 <div className="container fluid">
                <div className="content">
                    <div className="row">      
                        <div className="col-lg-6">   
                            <h1 className="py-2">Welcome to techmet</h1>
                            <h4 className ="py-3">Manage your calls with Call Centre Solution</h4>
                            <p>Techmet understand the dynamics of your customer and keep them engaged till life-cycle. 
                           You can manage them using <Link href="call-centre-dialer"><strong><a>call Centre solutions</a></strong></Link> and reduce the operating cost. 
                           <Link href="call-centre-dialer"><strong><a>Auto dialer</a></strong></Link> removes non-connectivity with agent because it connects with agent when customer get connected. 
                           We offers customer detailed report and integration to a number of third party application. 
                           A type of call Centre that is designed to make & receive a large volume of calls for customer by telephone and its easy to scale as per requirement.  
                           In Call Centre, communication happens for Sales, Subscription management, technical support, product request, billing and different enquiry from customer. 
                           <Link href="call-centre-dialer"><a><strong>Auto dialer</strong></a></Link> gives the premisis base control on <Link href="call-centre-dialer"><a><strong>call centre solution</strong></a></Link>.

                       </p>
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

                           
                            <div className ="p-5 mx-5"><img src="/images/blueblue.png " /></div>
                            
                           
              
                          </div>
                        </div>
                    </div>
                </div>
            </div>  

                <div className="services-area ptb-80 pb-50">
                <div className="container">
                    <div className="row justify-content-center align-items-center">                        
                       <div className="section-title">
                                <h2>Benefits</h2>
                            </div>

                        <div className="row ">
                                <div className="col-1"></div>
                                <div className="col-2">
                                     <div className="box">
                                        <div className="icon spinner-border-m text-center">
                                        <img src="/images/Benefit01.png" class="rounded-circle " alt="Cinque Terre"/>
                                        </div> 
                                      </div>
                                      <h6 className="text-center text-danger">One Number for Callers</h6>
                                </div>

                                <div className="col-1"></div>
                                  <div className="col-2">
                                     <div className="box">
                                        <div className="icon spinner-border-m text-center">
                                        <img src="/images/Benefit02.png" class="rounded-circle " alt="Cinque Terre"/>
                                        </div> 
                                      </div>
                                      <h6 className="text-center text-danger">Call attending at 1st ring</h6>                  
                                 </div>

                                 
                                <div className="col-1"></div>
                                  <div className="col-2">
                                     <div className="box">
                                        <div className="icon spinner-border-m text-center">
                                        <img src="/images/Benefit03.png" class="rounded-circle " alt="Cinque Terre"/>
                                        </div> 
                                      </div>
                                      <h6 className="text-center text-danger">Distribute Same information to each caller</h6>                  
                                 </div>

                                 <div className="col-1"></div>
                                  <div className="col-2">
                                     <div className="box">
                                        <div className="icon spinner-border-m text-center">
                                        <img src="/images/Benefit04.png" class="rounded-circle" alt="Cinque Terre"/>
                                        </div> 
                                      </div>
                                      <h6 className="text-center text-danger">Increase your brand image for callers</h6>                  
                                 </div>

                         </div>
                         <hr ></hr>

                         
                        <div className="row ">
                                <div className="col-1"></div>
                                <div className="col-2">
                                     <div className="box">
                                        <div className="icon spinner-border-m text-center">
                                        <img src="/images/Benefit05.png" class="rounded-circle" alt="Cinque Terre"/>
                                        </div> 
                                      </div>
                                      <h6 className="text-center text-danger">No Hardware cost</h6>
                                </div>

                                <div className="col-1"></div>
                                  <div className="col-2">
                                     <div className="box">
                                        <div className="icon spinner-border-m text-center">
                                        <img src="/images/Benefit06.png" class="rounded-circle" alt="Cinque Terre"/>
                                        </div> 
                                      </div>
                                      <h6 className="text-center text-danger">Never loss business leads</h6>                  
                                 </div>

                                 
                                <div className="col-1"></div>
                                  <div className="col-2">
                                     <div className="box">
                                        <div className="icon spinner-border-m text-center">
                                        <img src="/images/Benefit07.png" class="rounded-circle" alt="Cinque Terre"/>
                                        </div> 
                                      </div>
                                      <h6 className="text-center text-danger">Pay-as-you-grow model</h6>                  
                                 </div>

                                 <div className="col-1"></div>
                                  <div className="col-2">
                                     <div className="box">
                                        <div className="icon spinner-border-m text-center">
                                        <img src="/images/Benefit08.png" class="rounded-circle" alt="Cinque Terre"/>
                                        </div> 
                                      </div>
                                      <h6 className="text-center text-danger">Scale without adding manpower</h6>                  
                                 </div>

                         </div>
                </div>
            </div>
    </div>  
        </>
    )
}

export default ServicesArea;