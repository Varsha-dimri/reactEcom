import React from 'react';
import Link from 'next/link'
import * as Icon from 'react-feather';

const ServicesArea = () => {
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
                        <h2 className="text-center py=5">Reach your customer thru Voice SMS</h2><br />
                        <h6><strong>Voice SMS</strong> are pre-recorded <strong>voice</strong> messages to a mobile or landline networks across the country. You can send that includes a message (usually 60 seconds or less) that the other person can hear on the call. Its completely automated process hence no operators or dialer require to prcess the calls. This facility allows businesses to enter their potential market by reaching target audience. Grow your business with cost effective service and user-friendly interface.</h6>
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