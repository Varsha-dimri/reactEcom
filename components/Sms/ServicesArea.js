import React from 'react';
import Link from 'next/link';
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
                        <h2 className = "py-3 text-center"><strong>Communicate about yourself in Single Click (SMS)</strong></h2> 
                        <p>
                            SMS is useful for all types of businesses, especially in targeting the local customers. With the help of SMS you can communicate your existing customer or increase your sale by 200% in just a couple of days. SMS Marketing service is excellent for promoting as well as in communicating with the customers and conveying a brand message or to develop strong brand awareness among the mass.
                        </p>
                        <p>
                        Businesses around the world have been using SMS’s for promoting their products and services, bringing in new customers through several campaigns and keeping in touch with their current customer base. With the help of SMS you can communicate regularly with your existing customers or increase your sales by 200% in just a couple of days.
                        </p>
                        <p>
                        SMS Marketing service is excellent for promoting as well as in communicating with the customers and conveying a brand message or to develop strong brand awareness among the mass. Use SMS mobile marketing to add to and enhance your overall outbound strategy and campaign management.
                        </p>

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
                                      <h6 className="text-center text-danger">No Setup Feel</h6>
                                      <p className="text-justify ">Just charged for SMS’s only,No setup fee is demanded.</p>
                                </div>

                                <div className="col-1"></div>
                                  <div className="col-2">
                                     <div className="box">
                                        <div className="icon spinner-border-m text-center">
                                        <img src="/images/Benefit02.png" class="rounded-circle " alt="Cinque Terre"/>
                                        </div> 
                                      </div>   
                                      <h6 className="text-center text-danger">Call attending at 1st ring</h6>
                                    <p className="text-justify ">Send them instantly or set up a time and date as needed.</p>        
                                 </div>

                                 
                                <div className="col-1"></div>
                                  <div className="col-2">
                                     <div className="box">
                                        <div className="icon spinner-border-m text-center">
                                        <img src="/images/Benefit03.png" class="rounded-circle " alt="Cinque Terre"/>
                                        </div> 
                                      </div>   
                                      <h6 className="text-center text-danger">Distribute Same information to each caller</h6>
                                    <p className="text-justify ">SMS go to NON-DND Number (Auto Filter)</p>             
                                 </div>

                                 <div className="col-1"></div>
                                  <div className="col-2">
                                     <div className="box">
                                        <div className="icon spinner-border-m text-center">
                                        <img src="/images/Benefit04.png" class="rounded-circle" alt="Cinque Terre"/>
                                        </div> 
                                      </div>
                                      <h6 className="text-center text-danger">Sender ID</h6>
                                      <p className="text-justify  ">Recipient will get SMS from 6 digit ID <br />(EG. VM-ICICIB)</p>
                                     </div>

                         </div>
                         

                         
                        <div className="row py-4">
                                <div className="col-1"></div>
                                <div className="col-2">
                                     <div className="box">
                                        <div className="icon spinner-border-m text-center">
                                        <img src="/images/Benefit05.png" class="rounded-circle" alt="Cinque Terre"/>
                                        </div> 
                                      </div>
                                       <h5  className="text-center text-danger">SMS Validity</h5>
                                    <p className="text-justify ">SMS stays in your online account until you use them.</p>
                                </div>

                                <div className="col-1"></div>
                                  <div className="col-2">
                                     <div className="box">
                                        <div className="icon spinner-border-m text-center">
                                        <img src="/images/Benefit06.png" class="rounded-circle" alt="Cinque Terre"/>
                                        </div> 
                                      </div>
                                       
                                      <h5 className="text-center text-danger">Low Price</h5>
                                    <p className="text-justify ">Transparent pricing & billing structure, Pay only as you use</p>                
                                 </div>

                                 
                                <div className="col-1"></div>
                                  <div className="col-2">
                                     <div className="box">
                                        <div className="icon spinner-border-m text-center">
                                        <img src="/images/Benefit07.png" class="rounded-circle" alt="Cinque Terre"/>
                                        </div> 
                                      </div>
                                      
                                      <h5 className="text-center text-danger">Pay Per Use</h5>
                                    <p className="text-justify  ">Our transparent pricing & billing, only pay what you use</p>                 
                                 </div>

                                 <div className="col-1"></div>
                                  <div className="col-2">
                                     <div className="box">
                                        <div className="icon spinner-border-m text-center">
                                        <img src="/images/Benefit08.png" class="rounded-circle" alt="Cinque Terre"/>
                                        </div> 
                                      </div>
                                      <h5  className="text-center text-danger">Scalability</h5>
                                    <p className="text-justify ">Scale your business without adding manpower</p>
                                 </div>

                         </div>
                </div>
            </div>
    </div>            




              
                          
                    
             
           
        </>
    )
}

export default ServicesArea;