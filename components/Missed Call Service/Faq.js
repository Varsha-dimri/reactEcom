import React from 'react';
import Navbar from "@/components/_App/Navbar";


const FAQ = () => {
    return(
        <>
            <Navbar />

                
                 <div className="container">
                     <div className="col-lg-7 col-md-6">
                        <h4>Know more about Tollfree Service, Call on +91-9871045375</h4>
                        {/* <div className="bt">
                           <Link href="#" active className="active"> */}
							    <a className="btn btn-primary">Get Started</a>
						     {/*</Link>  
                        </div> */}
                    </div>
                </div>
            
 
        </>
 
    )
}



export default FAQ;