import React from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';

const Featuresmissed = () => {
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
								<li> * Call Disconnected after ring </li>
								<li> *Thankyou SMS to caller</li>
						     	<br />
								<br />
								<br />
								<br />
								<br />
								<br />
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
								<li> OTP/Mobile Verification</li>
								<li> Application Download</li>
								<li> Opinion Poll</li>
							    <li> Customer Engagaement</li>
								<br />
								<br />
								<br />
								
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
								<li> Multiple Call Connected on single Number,</li>
								<br />
								<br />
								<br />
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
								<li> Real-time analysis</li>
								<li>Call Logs</li>
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

export default Featuresmissed;
