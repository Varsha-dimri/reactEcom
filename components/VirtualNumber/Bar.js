import React from 'react'
import Link from 'next/link'

const Bar = () => {
    return (
        <>
                <div className="container">
                    <div className="row justify-content-center">
                            <h1>Welcome To Techmet</h1>
                        <div className="col-lg-2 col-md-5 col-5">
                            <Link href="/contact">
                                <a className="btn btn-primary">Pricing</a>
                            </Link>
                        </div>
                        
                        <div className="col-lg-3 col-md-5 col-4">
                            <Link href="/contact">
                                <a className="btn btn-primary">FREE TRIAL</a>
                            </Link>
                        </div>
                    </div>
                </div>         
      
        </>
    )
 
}

export default Bar;  