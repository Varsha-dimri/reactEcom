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
									<a>Single Dashboard to manage all leads </a>
								</Link>
							</h3>

							<ul>
								<li> *Leads All in One place</li>
								<li> *Add or Remove leads easily </li>
								<li> *Search leads by any column </li>
								<li> *Manage leads distribution</li>
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
									<a>Call Recording & Advance Reports</a>
								</Link>
							</h3>

							<ul>
								<li> *Real-time Reports</li>
								<li> *Call history of dialouts</li>
								<li> *Communication Reports</li>
								<li> *Customized Report</li>
								<li> *Call Recording </li>
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
									<a>Integrations all Source for leads</a>
								</Link>
							</h3>

							<ul>
								<li> *Auto Integration(Vendors, website,IVR) </li>
								<li>  *API capability to share or received data</li>
								<li>  *Upload bulk data in excel sheet format</li>
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
									<a>Scalable with Pay Per Go</a>
								</Link>
							</h3>

							<ul>
								<li> Pay only for what you use ``Increase or reduce user as you need``</li>
								
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
