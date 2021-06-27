import React from 'react'
import Link from 'next/link'

const Bar = () => {
    return (
        <>
            <div className="container fluid">
                <div className="content">
                    <div className="row h-100 justify-content-center align-items-center">      
<<<<<<< HEAD
                        <div className="col-lg-4">   
                            <h2>Welcome To Techmet</h2>
=======
                        <div className="col-lg-6">   
                            <h1 className="text-center py-2">Welcome To Techmet</h1>
>>>>>>> 0393b890a324aed9f26d96cc490b2bacf4f2e9cd
                        </div>
                       <div className= "container">
                        <div className="col-6">
                           <div className="col-1"></div>
                             <div className="row">
                                <div class="btn-group">
                                   
                                   <div className="col-2">
                                       <Link href="/contact">
                                         <a className="btn btn-primary">Pricing</a>
                                       </Link>
                                   </div>

<<<<<<< HEAD
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
=======
                        <div className="col-1"></div>
                                   <div className="col-2">
                                       <Link href="/contact">
                                         <a className="btn btn-primary px-5">FAQ</a>
                                       </Link>
                                   </div>

                        <div className="col-1"></div>
                                   <div className="col-2">
                                       <Link href="/contact">
                                         <a className="btn btn-primary px-5">Login</a>
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
        </div>
>>>>>>> 0393b890a324aed9f26d96cc490b2bacf4f2e9cd
        </>
    )
 
}

export default Bar;  