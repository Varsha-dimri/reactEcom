import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';


const GoogleMap = () => {
    return (
        <>
            <div className="Container">
            <div className="col-lg-8 col-md-8">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.183613366869!2d-73.99830468463497!3d40.71397427933168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a263f3910db%3A0xd6e6cdf32a6b11b1!2s27%20Division%20St%2C%20New%20York%2C%20NY%2010002%2C%20USA!5e0!3m2!1sen!2sbd!4v1614260467637!5m2!1sen!2sbd" width="100%" height="450" allowFullScreen="" loading="lazy"></iframe>
            </div>
            <div className="col-lg-4 col-md-8">
                <h2>Get Social</h2>
                <ul className="social-links">
                                <li>
                                    <Link href="https://www.facebook.com/bsdtechnologiesprivatelimited/#">
                                        <a className="facebook" target="_blank"><Icon.Facebook /></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://twitter.com/techmetbsd">
                                        <a className="twitter" target="_blank"><Icon.Twitter /></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.instagram.com/bsdtechnologies/">
                                        <a className="instagram" target="_blank"><Icon.Instagram /></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.linkedin.com/company/bsd-technologies-private-limted/">
                                        <a className="linkedin" target="_blank"><Icon.Linkedin /></a>
                                    </Link>
                                </li>
                            </ul>
                <h2>Contact Info</h2>
                <div className="icon">
                    <Icon.Mail />
                </div>
                <h2>Support@techmet.in</h2>
                <h2>info@techmet.in</h2>
                <h2>18001206389</h2>
            </div>
            </div>
        </>
    )
}

export default GoogleMap;  