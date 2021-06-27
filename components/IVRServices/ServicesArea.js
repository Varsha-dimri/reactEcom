import React from 'react';
import * as Icon from 'react-feather';

const ServicesArea = () => {
    return (
        <>
            <div className="services-area">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                         
                        <div className="col-lg-5">
                            <div className="hero-content">
                                <h5 className="py-3">Create A Big Company Image with IVR Services</h5>
                                    
                                <h5>Grow your business with Cloud technology based IVR :</h5>
						        <p>IVR stands for Interactive Voice Response. This technology enables interaction between a caller and a computer via the telephone. Callers can interact with IVR systems by pressing numbers on a telephone keypad or by speaking simple commands to answer the computer’s voice prompts. Call will be get connected to desire person/department anywhere. Techmet offers Cloud PBX is innovative reporting system for small, medium and enterprises business in india.</p>									
						        {/* <Link href="/contact">
							        <a className="btn btn-primary">Get Started</a>
						        </Link> */}
					        </div>
                        </div>

                        <div className="col-lg-6 col-md-12 services-left-image"> 
                            <div><img src="/images/unnamed.png" /></div>
                            
                           
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

                            <div className="row text-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                    <div className="icon spinner-border-m">
                                     <img src="/images/Benefit01.png" class="rounded-circle" alt="Cinque Terre"/>
                                     </div> 
                                    </div>
                                    <h3>One Number for Callers</h3>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                    <div className="icon spinner-border-m">
                                    <img src="/images/Benefit02.png" class="rounded-circle" alt="Cinque Terre"/>
                                    </div>
                                    </div>
                                    <h3>Call attending at 1st ring</h3>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                    <div className="icon spinner-border-m">
                                     <img src="/images/Benefit03.png" class="rounded-circle" alt="Cinque Terre"/>
                                    </div>
                                    </div>
                                    <h3>Distribute Same information to each caller</h3>
                                </div> 

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                    <div className="icon spinner-border-m">
                                    <img src="/images/Benefit04.png" class="rounded-circle" alt="Cinque Terre"/>
                                    </div>
                                    </div>
                                    <h3>Increase your brand image for callers</h3>
                                </div>
                                
                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                    <div className="icon spinner-border-m">
                                    <img src="/images/Benefit05.png" class="rounded-circle" alt="Cinque Terre"/>
                                    </div>
                                    </div>
                                    <h3>No Hardware cost</h3>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                    <div className="icon spinner-border-m">
                                    <img src="/images/Benefit06.png" class="rounded-circle" alt="Cinque Terre"/>
                                    </div>
                                    </div>
                                    <h3>Never loss business leads</h3>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                    <div className="icon spinner-border-m">
                                    <img src="/images/Benefit07.png" class="rounded-circle" alt="Cinque Terre"/>
                                    </div>
                                    </div>
                                    <h3>Pay-as-you-grow model</h3>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                    <div className="icon spinner-border-m">
                                    <img src="/images/Benefit08.png" class="rounded-circle" alt="Cinque Terre"/>
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