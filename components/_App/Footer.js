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
                        <div className="single-footer-widget">
                            <h2>Important Links</h2>
                            <ul className="list">
                                <li>
                                    <Link href="">
                                        <a>Best IVR Service Provider</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="">
                                        <a>Best IVR Service Provider in delhi ncr</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="">
                                        <a>Missed Call Service Provider in India</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="">
                                        <a>Best Tollfree Service Provider in India</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="">
                                        <a>Best Lead Management Software in India</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="">
                                        <a>Best SMS Service in Delhi</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget pl-5">
                            <h2>Solutions</h2>
                            <ul className="list">
                                <li>
                                    <Link href="/about-1">
                                        <a>IVR Services</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services-1">
                                        <a>Tollfree Services</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/features">
                                        <a>Missedcall Services</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/pricing">
                                        <a>Transaction & OTP Messages</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog-1">
                                        <a>Click to Call Services</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog-1">
                                        <a>Audio Conference</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog-1">
                                        <a>Employee Tracking Solution</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog-1">
                                        <a>Betyphon – Mobile CRM</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <h2>About Us</h2> 
                            <ul className="list">
                                <li>
                                    <Link href="/faq">
                                        <a>Partner with us</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/privacy-policy">
                                        <a>Privacy Policy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/term-condition">
                                        <a>Career</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/team">
                                        <a>Pay Us</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a>Blog</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <h3>Reach Us</h3>
                            
                            <ul className="footer-contact-info">
                                <li> 
                                    <Icon.MapPin />
                                    BSD Technologies Private Limited <br />Rajendra Park, F-block, Gurgaon -122001
                                </li>
                                <li>
                                    <Icon.Mail />
                                    Email: <a href="mailto:info@techmet.in">info@techmet.in</a>
                                    <a href="mailto:support@techmet.in">support@techmet.in</a>
                                </li>
                                <li> 
                                    <Icon.PhoneCall />
                                    Phone: <a href="tel:18001206389">18001206389</a>
                                </li>
                            </ul>
                            <ul className="social-links">
                                <li>
                                    <Link href="#">
                                        <a className="facebook" target="_blank"><Icon.Facebook /></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a className="twitter" target="_blank"><Icon.Twitter /></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a className="instagram" target="_blank"><Icon.Instagram /></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
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