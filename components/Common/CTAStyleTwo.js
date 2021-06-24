import React from 'react';
import Link from 'next/link';

const CTAStyleTwo = () => {
    return (
        <div className="service-area ptb-80 py-10">
            <div className="Container" >
                <div className ="row agency-cta-area" >
                    <div class ="col-8 p-4">
                        <h3 class="text-center">Know more about Tollfree Service, Call on +91-9871045375</h3>
                    </div>

                    <div class = "col-4 p-4 ">
                        <button className="btn btn-primary " type="/contact">Request for demo</button>
                    </div>       
                </div>
            </div> 
        </div>
    );
}

export default CTAStyleTwo;