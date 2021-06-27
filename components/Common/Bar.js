import React from 'react'
import Link from 'next/link'

const Bar = () => {
    return (
        <>
            <div className="container fluid">
                <div className="content">
                    <div className="row h-100 justify-content-center align-items-center">      
                        <div className="col-lg-6">   
                            <h2>Welcome To Techmet</h2>
                        </div>
                       
                        <div className="col-6">
                           <div className="col-1"></div>
                             <div className="row">
                                <div class="btn-group">
                                   
                                   <div className="col-2">
                                       <Link href="/contact">
                                         <a className="btn btn-primary">Pricing</a>
                                       </Link>
                                   </div>

                        <div className="col-1"></div>
                                   <div className="col-2">
                                       <Link href="/contact">
                                         <a className="btn btn-primary">FAQ</a>
                                       </Link>
                                   </div>

                        <div className="col-1"></div>
                                   <div className="col-2">
                                       <Link href="/contact">
                                         <a className="btn btn-primary">Login</a>
                                       </Link>
                                   </div>

                       <div className="col-1"></div>
                                    <div className="col-2">
                                       <Link href="/contact">
                                         <a className="btn btn-primary">FreeTrial</a>
                                       </Link>
                                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
 
}

export default Bar;  