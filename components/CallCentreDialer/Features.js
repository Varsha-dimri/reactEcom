import React from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';

const Features = () => {
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
									<a>Professional Calls Solution with Scalability</a>
								</Link>
							</h3>

							<ul>
								<li> Professional Company welcome message, </li>
								<li> Multi Level IVR</li>
								<li> Call transfer as per language preference,</li>
								<li>  Onhold Music, Voicemail, Sticky</li>
								
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
									<a>Effective Calls Management</a>
								</Link>
							</h3>

							<ul>
							    <li> Call Recording</li>
							    <li> Call logs</li>
								<li> 2 way SMS Notification</li>
								<li> Email alerts, Caller Number blocking,</li>
								<li> Real time analysis</li>
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
									<a>Tracking and Monitoring</a>
								</Link>
							</h3>

							<ul>
								<li> Always Connected</li>
								<li> Intelligent Call Routing</li>
								<li> Multiple Call Connected at same time</li>
								<li> Office timing Setup</li>
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
									<a>Reports and Analysis</a>
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

export default Features;
