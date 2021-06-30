import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const ServicesArea = () => {
    return (
        <>
            <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <h2>Employee Tracking Solution</h2>    
                        <h6><Link href="employee-tracking-solution"><a><strong>Employee Tracking Solution</strong></a></Link> helps to manage your employee by real-time tracking on day activities like attendance, <strong>calls recording,</strong> day visits, GPS Location, Talk-time, Prospect contacted and much more. It provides actionable data driven insights who helps to improve and execute the team in your tele calling and field operations. Its effective <strong> Call Recording Solution</strong> on mobile.
                        </h6>
                        <br />
                        <br />
                        <h6><strong>Employee Tracking Solution</strong> is a SAAS (Software as a service) you only need to pay only charges against what you use. It’s a very simple mobile application which connected to Web App. for tracking and reporting at a glance. Manager can assign, schedule and reschedule the tasks as per employees.</h6>
                    </div>
                </div>    

                <div className="services-area ptb-5s0 pb-50 bg bg-f7fafd">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">                        

                            <div className="section-title">
                                <h2>Features of ETS – Employee Tracking Solution </h2>
                            </div>

                            <div className="row text-center">
                                <div className="col-lg-4 col-md-4">
                                    <div className="box">
                                        <div className="icon spinner-border-m">
                                            <img src="/images/Benefit01.png" class="rounded-circle" alt="Cinque Terre"/>
                                        </div> 
                                    </div>
                                    <h3>All Calls Recording</h3>
                                    <h5>Record your all incoming & Outgoing Calls from anywhere</h5>
                                </div>

                                <div className="col-lg-4 col-md-4">
                                    <div className="box">
                                        <div className="icon spinner-border-m">
                                            <img src="/images/Benefit02.png" class="rounded-circle" alt="Cinque Terre"/>
                                        </div>
                                    </div>
                                    <h3>Live Location Tracking</h3>
                                    <h5>Track your employee real-time and his day route</h5>
                                </div>

                                <div className="col-lg-4 col-md-4">
                                    <div className="box">
                                        <div className="icon spinner-border-m">
                                            <img src="/images/Benefit03.png" class="rounded-circle" alt="Cinque Terre"/>
                                        </div>
                                    </div>
                                    <h3>Field Visit Schedules</h3>
                                    <h5>Track & Schedule the visit of your Field Employee</h5>
                                </div> 

                                <div className="col-lg-4 col-md-4">
                                    <div className="box">
                                        <div className="icon spinner-border-m">
                                            <img src="/images/Benefit04.png" class="rounded-circle" alt="Cinque Terre"/>
                                        </div>
                                    </div>
                                    <h3>Mini CRM</h3>
                                    <h5>Make entry of prospect manually OR excel upload and track the status of each one.</h5>
                                </div>
                                
                                <div className="col-lg-4 col-md-4">
                                    <div className="box">
                                        <div className="icon spinner-border-m">
                                            <img src="/images/Benefit05.png" class="rounded-circle" alt="Cinque Terre"/>
                                        </div>
                                    </div>
                                    <h3>Notification</h3>
                                    <h5>Notify your employee for overdue, Followups, new allocated prospect</h5>
                                </div>

                                <div className="col-lg-4 col-md-4">
                                    <div className="box">
                                        <div className="icon spinner-border-m">
                                            <img src="/images/Benefit06.png" class="rounded-circle" alt="Cinque Terre"/>
                                        </div>
                                    </div>
                                    <h3>Dynamic Reports</h3>
                                    <h5>Dynamic report of attendance, Prospect status, Call details, Hourly Report & more</h5>
                                </div>

                                <div className="col-lg-4 col-md-4">
                                    <div className="box">
                                        <div className="icon spinner-border-m">
                                            <img src="/images/Benefit07.png" class="rounded-circle" alt="Cinque Terre"/>
                                        </div>
                                    </div>
                                    <h3>Communicate via Chat Option</h3>
                                    <h5>Chat directly with employee whose going to visit</h5>
                                </div>

                                <div className="col-lg-4 col-md-4">
                                    <div className="box">
                                        <div className="icon spinner-border-m">
                                            <img src="/images/Benefit08.png" class="rounded-circle" alt="Cinque Terre"/>
                                        </div>
                                    </div>
                                    <h3>Works Offline, as well</h3>
                                    <h5>internet issue ? No worries, our application works offline as well.</h5>
                                </div>

                                <div className="col-lg-4 col-md-4">
                                    <div className="box">
                                        <div className="icon spinner-border-m">
                                            <img src="/images/Benefit01.png" class="rounded-circle" alt="Cinque Terre"/>
                                        </div> 
                                    </div>
                                    <h3>Other Software Integrations</h3>
                                    <h5>Easily integrate with your current Software/ CRM /ERP for required features</h5>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <h2 className="text-center">Why is it so Great ?</h2>
                <br />
                <img src="\images\ETS\Features-of-ETS.png" alt="ETS Solution"/>
            </div>
        </>
    )
}

export default ServicesArea;