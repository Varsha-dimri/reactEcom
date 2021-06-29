import React from 'react';
import Link from 'next/link';

const CTAStyleTwo = () => {
    return (
        <div className="service-area ptb-80 px-4 container">
            <div className="Container" >
                <div className ="row agency-cta-area" >
                    <div class ="col-8 px-4 py-5">
                        <h4 class="text-center">Pay online by Credit card, Delbit Card, NRFT/RTGS/IMPS</h4>
                    </div>

                    <div class = "col-4 py-5 px-5 ">
                        <button className="btn btn-primary " type="/pay">Click Here</button>
                    </div>       
                </div>
            </div> 
        </div>
    );
}

export default CTAStyleTwo;