import React from 'react'
import Link from 'next/link'

const Bar = () => {
    return (
        <>
            <div className="container">
                <div className="content">
                    <div className="row h-100 justify-content-center align-items-center">      
                        <div className="col-lg-3">   
                            <h2>Welcome To Techmet</h2>
                        </div>

                        <div className="col-lg-2">
                            <Link href="/conta
                            ct">
                                <a className="btn btn-primary">Pricing</a>
                            </Link>
                        </div>
                        <div className="col-lg-2">
                            <Link href="/contact">
                                <a className="btn btn-primary">FAQ</a>
                            </Link>
                        </div>
                        <div className="col-lg-2">
                            <Link href="/contact">
                               <a className="btn btn-primary">LOGIN</a>
                            </Link>
                       </div>
                        <div className="col-lg-2">
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