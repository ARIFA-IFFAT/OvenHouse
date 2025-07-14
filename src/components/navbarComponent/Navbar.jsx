import { Link } from "react-router-dom";
import { useState } from "react";
import PrimaryButton from "../customButtons/PrimaryButton"
import SocialMediaIcons from "../socialmediaComponent/SocialMediaIcons";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container" id="site_header">
                <Link className="navbar-brand" rel="stylesheet" to="/"><img src="images/ARHCS_logo_transparent.png" alt="arhcs_logo" className="w-25"></img></Link>
                <button className="navbar-toggler"
                    onClick={toggleNavbar}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    {isOpen ?
                        (<span>&#10005;</span>) :
                        (<span className="navbar-toggler-icon"></span>)
                    }
                </button>
                <div className={` collapse navbar-collapse ${isOpen ? 'show' : ''} `} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link  " to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  " to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  " to="/company">Company</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  " to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  " to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  " to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <div className="d-flex gap-3 align-items-center">
                        <PrimaryButton buttonName="Get a quote" btnLink="contact" />
                        <div className="topSMLinks">
                            <SocialMediaIcons/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;