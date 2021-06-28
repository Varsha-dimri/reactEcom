import React from "react"
import Link from '@/utils/ActiveLink'
import * as Icon from 'react-feather'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const cart = useSelector((state) => state.cart)
    const [menu, setMenu] = React.useState(true)
 
    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("header");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 130) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0); 
    })
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <header id="header" className="headroom">
            <div className="startp-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link href="/it-startup">
                            <a onClick={toggleNavbar} className="navbar-brand">
                                <img src="/images/logo.png" alt="logo" />
                            </a>
                        </Link>

                        <button 
                            onClick={toggleNavbar} 
                            className={classTwo}
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="icon-bar top-bar"></span>
                            <span className="icon-bar middle-bar"></span>
                            <span className="icon-bar bottom-bar"></span>
                        </button>

                        <div className={classOne} id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link href="/#" activeClassName="active">
                                        <a onClick={e => e.preventDefault()} className="nav-link">
                                            Solutions<Icon.ChevronDown />
                                        </a>
                                    </Link>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link href="/ivr-services" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">IVR Services</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/tollfree" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Tollfree Services</a>
                                            </Link>
                                        </li>
 
                                        <li className="nav-item">
                                            <Link href="/missedcallservice" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Missed Call Service</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/employee-tracking-solution" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Employee Tracking Solution</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/betyphon" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Betyphon : Mobile CRM</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/#" activeClassName="active">
                                                <a onClick={e => e.preventDefault()} className="nav-link">
                                                    SMS <Icon.ChevronDown />
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/text-sms" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Text SMS</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/voice-sms" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Voice SMS</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/#" activeClassName="active">
                                                <a onClick={e => e.preventDefault()} className="nav-link">
                                                    Customized Solutions <Icon.ChevronDown />
                                                </a>
                                            </Link>
                                            
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/click-to-call" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Click To Call</a>
                                                    </Link>
                                                </li>   

                                                <li className="nav-item">
                                                    <Link href="/audio-conference" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Audio Conference</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/call-centre-dialer" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Call Centre Dialer</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>                     
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link href="/#">
                                        <a onClick={e => e.preventDefault()} className="nav-link">
                                            USE CASES <Icon.ChevronDown />
                                        </a>
                                    </Link> 

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link href="/virtual-number" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Virtual Number</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/cloud-telephony" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Cloud Telephony</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/ivr-service-provider" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">IVR Service Provider</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/interactive-voice-response" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Interactive Voice Response</a>
                                            </Link>
                                        </li> 

                                        <li className="nav-item">
                                            <Link href="/cloud-based-ivr-solution" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Cloud Based IVR Solution</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/cloud-based-call-management-solution" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Cloud Based Call Management Solution</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/cloud-based-call-management-system" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Cloud Based Management Call System</a>
                                            </Link>
                                        </li>
  
                                    </ul>
                                </li>

                                
                                <li className="nav-item">
                                    <Link href="/pricing" activeClassName="active">
                                        <a onClick={toggleNavbar} className="nav-link">PRICING</a>
                                    </Link>                                    
                                </li>

                                <li className="nav-item">
                                    <Link href="/partner" activeClassName="active">
                                        <a onClick={toggleNavbar} className="nav-link">PARTNER WITH US</a>
                                    </Link>                                    
                                </li>                             

                                <li className="nav-item">
                                    <Link href="/contactus" activeClassName="active">
                                        <a onClick={toggleNavbar} className="nav-link">CONTACT US</a>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link href="/aboutus" activeClassName="active">
                                        <a onClick={toggleNavbar} className="nav-link">ABOUT US</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>                        
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Navbar;