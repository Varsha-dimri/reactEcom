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
									<a className="text-center">Professional Image</a>
								</Link>
							</h3>

							<ul>
								<li> An ideal facility from the organisation to facilitate customers to get in touch easily </li>
								<li> Customisable call process</li>
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
									<a className="text-center">Super Advance Alert & Report</a>
								</Link>
							</h3>

							<ul>
								<li> Integrate with Website, Application Or CRM</li>
								<li> Calls logs & Call recording to be used for in-depth analysis</li>
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
									<a className="text-center">24/7 Customer Availability</a>
								</Link>
							</h3>

							<ul>
								<li> Intelligent call routing</li>
								<li> Multiple calls connectivity in backend</li>
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
									<a className="text-center">Simple Online Panel</a>
								</Link>
							</h3>

							<ul>
								<li> Easy Manageable</li>
								<li> Multiple agent log in</li>
								<li> Easily installed</li>
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
