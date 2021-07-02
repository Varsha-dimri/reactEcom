import React from 'react';
import Link from 'next/link'
import * as Icon from 'react-feather';

const ServiceArea = () => {
    return (
        <>
      <div className="row">      
          <div className="col-lg-6">   
             <h1 className ="text-center">Welcome To Techmet</h1></div>
          
            <div className="col-6">
              <div className="col-1 "></div>
                  <div className="row py-2 ">
                      <div class="btn-group">
                        <div className="col-4"></div>
                          <div className="col-2">
                              <Link href="/contact">
                              <a className="btn btn-primary">Pricing</a>
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
                      <div className="text-center py-3">
                      <h3>Cloud based Call Management System will helps you to manage Communication with Customers</h3>
                      </div>
              
     
                      <div className="container fluid">
                        <div className="row">      
                          <div className="col-lg-6">   
                            
                          <h6 className="py-3"><strong>Grow your business with Cloud based Call Management System:</strong></h6><br />
                            <h6>Cloud based Call Management System enables interaction between a caller and a computer via telephone. Call will get connected to desire person/department anywhere.It builts a trust factor in the mind of the prospects, so the pick up/ conversion rates will be directly increased. Techmet offers Cloud based Call Management System innovative reporting system for small, medium and enterprises business in india. Now, without installing a hardware – Possible to have complex and infinitely phone or voice workflow for business – Cloud based Call Management System.</h6>
                          </div>
                      
                       
                            <div className="col-6">
                              <div className="col-1 "></div>
                                  <div className="row py-2 ">
                                    <div className="py-4"><img src="/images/Call-Management-Solutions-1.png " /></div>
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

export default ServiceArea;