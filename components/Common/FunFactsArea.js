import React from 'react';
import Link from 'next/link';

const FunFactsArea = () => {
    return (
        <div className="funfacts-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <h2><strong>TECHMET</strong> NEW EDGE OF EXPERIENCE!</h2>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-3 col-6">
                        <div className="funfact">
                            <h3>5,000<strong>+</strong></h3>
                            <p>Happy Customers</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-3 col-6">
                        <div className="funfact">
                            <h3>9,000<strong>+</strong></h3>
                            <p>Cup of Coffees</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-3 col-6">
                        <div className="funfact">
                            <h3>10<strong>+</strong></h3>
                            <p>Products</p>
                        </div>
                    </div>

                </div>

                <div className="contact-cta-box">
                    <h3>Have any question about us?</h3>
                    <p>Don't hesitate to contact us</p>
 
                    <Link href="/contact">
                        <a className="btn btn-primary">Contact Us</a>
                    </Link>
                </div>

                <div className="map-bg">
                    <img src="/images/map.png" alt="map" />
                </div>
            </div>
        </div>
    )
}

export default FunFactsArea;