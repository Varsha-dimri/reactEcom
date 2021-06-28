import React from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';

const SmsCampaign = () => {
    return (
        <div className="container">
            
            <h2 className="text-center"><strong>Promote your business through SMS Campaigns</strong></h2>
            <div className="row ptb-80 pb-50">
                <div className="col-lg-4 col-md-4">
                    <h3><strong>Promotional SMS :-</strong></h3>
                    <br />
                    <p>
                        Bulk SMS which is used for marketing is called Promotional SMS. These SMSs are sent out with the core objective of promoting your products and services. Using promotional bulk SMS a company can create awareness about their brand, their products or services, run marketing campaigns with a single click of a mouse
                    </p>

                </div>

                <div className="col-lg-4 col-md-4">
                    <h3><strong>Transactional SMS :-</strong></h3>
                    <br/>
                    <p>
                    Bulk SMS which are sent to the current base of customers to give them important information that is necessary for using a company’s products or services are called Transactional SMS. The key reason of sending transactional SMS is to keep customers informed. Such messages can be sent to both DND & Non-DND Numbers through a 6 digit sender ID.
                    </p>

                </div>

                <div className="col-lg-4 col-md-4">
                    <h3><strong>OTP / Verification SMS :-</strong></h3>
                    <br />
                    <p>
                    As the name suggests Verification SMS are sent out at the time when a customer is signing up to a company’s services or making an account with them or a current customer wants to revive some information. OTP stands for ‘One Time Password’. These messages are quick actions on the part of the company to help their customers with their information, verification and authentication purposes.
                    </p>

                </div>
            </div>
        </div>

    )
}        

export default SmsCampaign;