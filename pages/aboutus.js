import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Partners from '@/components/Common/Partners';
import Footer from "@/components/_App/Footer";
import MainBanner from '@/components/AboutUs/MainBanner'; 

 
const AboutUs = () => {
    return (
        <>
            <Navbar />
           

            <MainBanner />

                <div className="container text-center">
                   <h6>BSD Technologies Pvt Ltd is the leading cloud based service provider registered under Govt. of India IT company act. We provides cost effective and cutting edge IT solutions that are reliable, resilient and responsive. When you met with us, you get IT Partner rather than a seller. We  provide communication solutions like – IVR Services, Lead Management Software, SMS Solutions, Conference Solutions and much more.</h6>
                   <h6>Our clients unprecendented reliability and inteligence in business through our flagship product BeTyphon TM.</h6>
                </div>
                <div className="py-5">
                    <h2 className ="text-center">OUR VISION</h2>
                    <h6 className ="text-center px-5">To consistently provide scalable & robust IT/Software services through different technology platforms as per the customer requirement in diverse horizontal and vertical segments.</h6>
                </div>

               
            <div className="px-5"><hr></hr></div>
 
          
                <div className= "col-12">
                  <div className="row">
                    <div className ="col-1">

                    </div>
                    <div className ="col-3">

                      <div className="icon spinner-border-m  ">
                          <img src="/images/About01.png" class="rounded-circle" alt="Cinque Terre"/>
					            </div>

                      <h5>20+</h5>
                      <h4>Different Industries</h4>

                    </div>

                    <div className ="col-1">
                    </div> 
                    <div className ="col-3">

                      <div className="icon spinner-border-m  ">
                          <img src="/images/About02.png" class="rounded-circle" alt="Cinque Terre"/>
				            	</div>

                      <h5>99.99% Uptime</h5>
                      <h4>Handled Successfully</h4>

                    </div>

                    <div className ="col-1">

                    </div>
                    <div className ="col-3">

                      <div className="icon spinner-border-m  ">
                          <img src="/images/About03.png" class="rounded-circle" alt="Cinque Terre"/>
					            </div>

                      <h5>10+</h5>
                      <h4>Products</h4>

                    </div>

                </div>
            </div> 
               <div className= "col-12 ">
                 <div className="row ">

                     <div className ="col-3"></div>
                    <div className ="col-3 py-5">
                    <div className="icon spinner-border-m  ">
                      <img src="/images/About04.png" class="rounded-circle" alt="Cinque Terre"/>
					      </div>
                        <h5>5,000+</h5>
                        <h4>Happy Customers</h4>
                    </div>

                    <div className ="col-1"></div>
                    <div className ="col-3 py-5">
                    <div className="icon spinner-border-m  ">
                      <img src="/images/About05.png" class="rounded-circle" alt="Cinque Terre"/>
					</div>
                        <h5>9,000+</h5>
                        <h4>Cup of Coffees</h4>
                    </div>
                   

                 </div>
               </div> 
               <div className="px-5"><hr></hr></div>
  

        
       

            <Partners /> 
            <Footer />
        </>
    )
}

export default AboutUs;