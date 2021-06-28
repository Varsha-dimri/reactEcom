import React from 'react';


const HowToSendSms = () => {
    return (
        <section>
            <div className="container">

                <div className ="Container-fluid">
                    <hr></hr>
                    <h2 className="text-center p-4 px-5">How to send SMS</h2>
                    <hr></hr>
                </div>
       

                <div className="Container-fluid" >
                    <p>
                        SMS Terminal – SMS can be sent through the admin panel provided by the Service Provider-TECHMET  (System will send the SMS to all the numbers that you have uploaded and you can send a simple broadcast)
                    </p>
                    <p>
                    API – You can integrate through API provided sms can be sent.
                    </p>
                    <p>
                    High capacity system is capable of sending millions of SMS simultaneously.<strong> (This also depends on   server load and interconnect traffic load between various telephone exchange/operators)</strong>
                    </p>
                </div>   
            </div>  
        </section>
    )  
}

export default HowToSendSms;  