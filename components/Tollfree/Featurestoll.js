import React from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';

const Featurestoll = () => {
    return (
		<div className="container">
        <div className="features-area ptb-80 pb-50">
			<div className="row justify-content-center align-items-center">
				<div className="section-title">
					<h2><u>Features</u></h2>
				</div>
				<div className="row">
					<div className="col-lg-3 col-md-6">
						<div className="single-box">
							<div className="icon">
                                <Icon.Server />
							</div>

							<h3>
								<Link href="/feature-details">
									<a>Professional Image</a>
								</Link>
							</h3>

							<ul>
								<li> Professional company welcome message</li>
								<li> Multi Level IVR</li>
								<li> Call transfer as per language preference</li>
							    <li> Onhold Music</li>
								<li> Voicemail,Sticky</li>
								
							</ul>
						</div>
					</div>

					<div className="col-lg-3 col-md-6">
						<div className="single-box bg-f78acb">
							<div className="icon">
                                <Icon.Code />
							</div>

							<h3>
								<Link href="/feature-details">
									<a>Super Advance Alert & Report</a>
								</Link>
							</h3>

							<ul>
							    <li> Call Recording</li>
							    <li> Call logs</li>
								<li> 2 way SMS Notification</li>
								<li> Email alerts, Caller Number blocking,</li>
								<li> Real time analysis</li>
								
							</ul>
						</div>
					</div>

					<div className="col-lg-3 col-md-6">
						<div className="single-box bg-c679e3">
							<div className="icon">
                                <Icon.Users />
							</div>

							<h3>
								<Link href="/feature-details">
									<a>24/7 Customer Availability</a>
								</Link>
							</h3>

							<ul>
								<li> Always Connected</li>
							    <li> Multiple Call Connected on Single Number</li>
								<li> Intelligent Call Routing</li>
								<li> Office timing Setup</li>
								<br />
							</ul>
						</div>
					</div>

					<div className="col-lg-3 col-md-6">
						<div className="single-box bg-eb6b3d">
							<div className="icon">
                                <Icon.GitBranch />
							</div>

							<h3>
								<Link href="/feature-details">
									<a>Simple Online Panel</a>
								</Link>
							</h3>

							<ul>
								<li> Easy Manageable</li>
								<li> Multi Agent login</li>
								<br />
								<br />
								<br />
								<br />
								<br />
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}

export default Featurestoll;
