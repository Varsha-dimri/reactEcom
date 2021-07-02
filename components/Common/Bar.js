import React from 'react'
import Link from 'next/link'

const Bar = () => {
    return (
        <>
            <div className="container fluid">
                <div className="content">
                    <div className="row">      
                        <div className="col-lg-6">   
                     
                            <h1 className ="py-3">Welcome To Techmet</h1>
                               <h4 className ="py-2" >Create A Big Company Image with IVR Services</h4>
                               <h5 className ="py-2">Grow your business with Cloud technology based IVR :</h5>
						        <h6 className="text-muted">IVR stands for Interactive Voice Response. This technology enables interaction between a caller and a computer via the telephone. Callers can interact with IVR systems by pressing numbers on a telephone keypad or by speaking simple commands to answer the computer’s voice prompts. Call will be get connected to desire person/department anywhere. Techmet offers Cloud PBX is innovative reporting system for small, medium and enterprises business in india.</h6>									
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

                           
                            <div className ="px-5 mx-5"><img src="/images/Economic-Policy0.png " /></div>
                            
                           
              
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
 
}

export default Bar;  