import React from 'react';
import Link from 'next/link';

const CTAStyleTwo = () => {
    return (
        <div className="row">
            <div className="agency-cta-area ptb-80">
                <div className="container">
                    <div className= "col-lg-7 col-md-6">
                        <div className="agency-cta-content">
                            <h2>Know more about Tollfree Service, Call on +91-9871045375</h2>
                            <Link href="/contact">
                                <a className="btn btn-gradient ">Get Started</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    );
}

export default CTAStyleTwo;