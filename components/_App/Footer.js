import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-area bg-f7fafd">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget pb-10">
                            <h2>Important Links</h2>
                            <br />
                            <ul className="list">
                                <li>
                                    <Link href="/best-ivr-service-provider">
                                        <h5><a>Best IVR Service Provider</a></h5>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/best-ivr-service-provider-in-delhi-ncr">
                                        <h5><a>Best IVR Service Provider in delhi ncr</a></h5>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/missed-call-service-provider-in-india">
                                        <h5><a>Missed Call Service Provider in India</a></h5>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/best-tollfree-service-provider-in-india">
                                        <h5><a>Best Tollfree Service Provider in India</a></h5>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/best-lead-management-software-in-india">
                                        <h5><a>Best Lead Management Software in India</a></h5>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/best-sms-service-in-delhi">
                                        <h5><a>Best SMS Service in Delhi</a></h5>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget pl-5">
                            <h2>Solutions</h2>
                            <br />
                            <ul className="list">
                                <li>
                                    <Link href="/ivr-services">
                                        <h5><a>IVR Services</a></h5>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/tollfree">
                                        <h5><a>Tollfree Services</a></h5>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/missedcallservice">
                                        <h5><a>Missedcall Services</a></h5>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/text-sms">
                                        <h5><a>Transaction & OTP Messages</a></h5>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/click-to-call">
                                        <h5><a>Click to Call Services</a></h5>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/audio-conference">
                                        <h5><a>Audio Conference</a></h5>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/employee-tracking-solution">
                                        <h5><a>Employee Tracking Solution</a></h5>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/betyphon">
                                        <h5><a>Betyphon – Mobile CRM</a></h5>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <h2>About Us</h2> 
                            <br />
                            <ul className="list">
                                <li>
                                    <Link href="/partner">
                                        <h5><a>Partner with us</a></h5>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/privacy-policy">
                                        <h5><a>Privacy Policy</a></h5>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/career">
                                        <h5><a>Career</a></h5>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/payus">
                                        <h5><a>Pay Us</a></h5>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog">
                                        <h5><a>Blog</a></h5>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <h2>Reach Us</h2>
                            <br />
                            
                            <ul className="footer-contact-info">
                                <li> 
                                    <Icon.MapPin />
                                    <h5>BSD Technologies Private Limited <br />Rajendra Park, F-block, Gurgaon -122001</h5>
                                </li>
                                <li>
                                    <Icon.Mail />
                                    <h5>Email: <a href="mailto:info@techmet.in">info@techmet.in</a></h5>
                                    <h5><a href="mailto:support@techmet.in">support@techmet.in</a></h5>
                                </li>
                                <li> 
                                    <Icon.PhoneCall />
                                    <h5>Phone: <a href="tel:18001206389">18001206389</a></h5>
                                </li>
                            </ul>
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
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="copyright-area">
                            <p>Copyright &copy; {currentYear} <a href="https://techmet.in/" target="_blank">BSD Technologies Private Limited</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <img src="/images/map.png" className="map" alt="map" />

            {/* Shape Images */}
            <div className="shape1">
                <img src="/images/shape1.png" alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
        </footer>
    )
     
}

export default Footer; 