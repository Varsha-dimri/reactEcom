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
                                <h2>Create A Big Company Image with IVR Services</h2>
                                    
                                <h5>Grow your business with Cloud technology based IVR :</h5>
						        <p>IVR stands for Interactive Voice Response. This technology enables interaction between a caller and a computer via the telephone. Callers can interact with IVR systems by pressing numbers on a telephone keypad or by speaking simple commands to answer the computer’s voice prompts. Call will be get connected to desire person/department anywhere. Techmet offers Cloud PBX is innovative reporting system for small, medium and enterprises business in india.</p>									
						        {/* <Link href="/contact">
							        <a className="btn btn-primary">Get Started</a>
						        </Link> */}
					        </div>
                        </div>

                        <div className="col-lg-6 col-md-12 services-left-image"> 
                            <img 
                                src="/images/services-left-image/big-monitor.png"
                                className="animate__animated animate__fadeInDown animate__delay-0.2s" 
                                alt="big-monitor"
                            /> 
            
                            <img 
                                src="/images/services-left-image/creative.png"
                                className="animate__animated animate__fadeInUp animate__delay-0.2s" 
                                alt="creative"
                            />
    
                            <img 
                                src="/images/services-left-image/developer.png"
                                className="animate__animated animate__fadeInLeft animate__delay-0.2s" 
                                alt="developer"
                            />
                    
                            <img 
                                src="/images/services-left-image/flower-top.png"
                                className="animate__animated animate__fadeInLeft animate__delay-0.2s" 
                                data-wow-delay="0.6s" 
                                alt="flower-top"
                            />
        
                            <img 
                                src="/images/services-left-image/small-monitor.png"
                                className="animate__animated animate__bounceIn animate__delay-0.2s" 
                                alt="small-monitor"
                            />
                        
                            <img 
                                src="/images/services-left-image/small-top.png"
                                className="animate__animated animate__fadeInDown animate__delay-0.2s" 
                                alt="small-top"
                            />
                
                            <img 
                                src="/images/services-left-image/table.png"
                                className="animate__animated animate__zoomIn animate__delay-0.2s" 
                                alt="table"
                            />
            
                            <img 
                                src="/images/services-left-image/target.png"
                                className="animate__animated animate__fadeInUp animate__delay-0.2s" 
                                alt="target"
                            />
                        
                            <img 
                                src="/images/services-left-image/cercle-shape.png"
                                className="bg-image rotateme" 
                                alt="shape"
                            />
           
                            <img 
                                src="/images/services-left-image/service-left-main-pic.png"
                                className="animate__animated animate__fadeInUp animate__delay-0.2s" 
                                alt="main-pic"
                            /> 
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
                                        <Icon.Database /> 
                                    </div>
                                    <h3>One Number for Callers</h3>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Globe /> 
                                    </div>
                                    <h3>Call attending at 1st ring</h3>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.File /> 
                                    </div>
                                    <h3>Distribute Same information to each caller</h3>
                                </div> 

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Cloud /> 
                                    </div>
                                    <h3>Increase your brand image for callers</h3>
                                </div>
                                
                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.TrendingUp /> 
                                    </div>
                                    <h3>No Hardware cost</h3>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Folder /> 
                                    </div>
                                    <h3>Never loss business leads</h3>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Monitor /> 
                                    </div>
                                    <h3>Pay-as-you-grow model</h3>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Mail /> 
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