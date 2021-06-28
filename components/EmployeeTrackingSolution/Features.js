import React from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';

const Features = () => {
    return (
	
        <div className="features-area ptb-80 pb-50">
			<div className="row justify-content-center align-items-center">
				<div className="section-title">
					<h2><u>Simple way to monitor the team</u></h2>
				</div>
				<div className="row">
					<div className="col-4">
						<h5><strong>Dashboard (Track Team Performance)</strong></h5>
						<br />
						<h5>
							Dashboard gives overview of calls by team, monitor the member specifically by number of Calls in details, calls bifrication in seconds with talk-time value.
						</h5>
						<br />
						<h5><strong>Call Details (Track Call details)</strong></h5>
						<br />
						<h5>All detail will helps to track the each call (Incoming,Outgoing, Missed) handled by team with timestamp and recording play option
						</h5>
						<br />
						<h5><strong>Call Recordings (Listen Call recordings)</strong></h5>
						<br />
						<h5>With Call Recording you can listen any call made by team member from anywhere with filter of region, call status, duration, and date n time</h5>
					</div>	

					<div className="col=8">
						
					</div>				
				</div>
			</div>
		
	</div>
    )
}

export default Features;
