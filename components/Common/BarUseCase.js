import React from 'react'
import Link from 'next/link'

const BarUseCase = () => {
    return (
        <>
            <div className="container ptb-80">
                <div className="content">
                    <div className="row">      
                        <div className="col-lg-7 col-md-6">   
                            <h1>Welcome To Techmet</h1>
                        </div>
                        
                        <div className="col-lg-2 col-md-3 col-6">
                            <Link href="/contact">
                                <a className="btn btn-primary">Pricing</a>
                            </Link>
                        </div>
                        
                        <div className="col-lg-3 col-md-3 col-6">
                            <Link href="/contact">
                                <a className="btn btn-danger">FREE TRIAL</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>        
        </>
    )
 
}

export default BarUseCase;  