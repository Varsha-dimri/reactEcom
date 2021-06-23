import React from 'react'
import Link from 'next/link'

const Bar = () => {
    return (
        <>
            <div className="container ptb-80 pb-50">
                <div className="content">
                    <div className="row">      
                        <div className="col-lg-5 col-md-7">   
                            <h1>Welcome To Techmet</h1>
                        </div>
                        
                        <div className="col-lg-2 col-md-1 col-sm-2">
                            <Link href="/contact">
                                <a className="btn btn-primary">Pricing</a>
                            </Link>
                        </div>
                        <div className="col-lg-2 col-md-1 col-sm-2">
                            <Link href="/contact">
                                <a className="btn btn-primary">FAQ</a>
                            </Link>
                        </div>
                        <div className="col-lg-2 col-md-1 col-sm-2">
                            <Link href="/contact">
                               <a className="btn btn-primary">LOGIN</a>
                            </Link>
                       </div>
                        <div className="col-lg-2 col-md-1 col-sm-2">
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

export default Bar;  