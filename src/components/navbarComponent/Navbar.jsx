import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PrimaryButton from "../customButtons/PrimaryButton"
import SocialMediaIcons from "../socialmediaComponent/SocialMediaIcons";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [shrink, setShrink] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

useEffect(()=>{
    const handleScroll = () =>{
    if(window.scrollY>50){
    setShrink(true)
    }
    else{
setShrink(false)
    }
    };

    window.addEventListener("scroll", handleScroll);
    return ()=> window.removeEventListener("scroll", handleScroll);
    },[]);

    return (
        <nav className={`navbar navbar-expand-lg shadow-sm ${shrink ? 'shrink' : ''}`}>
            <div className="container " id="site_header">
                <Link className="navbar-brand m-0" rel="stylesheet" to="/">
                <img src="images/ARHCS_logo_transparent.png" alt="arhcs_logo" className={`logo-img ${shrink ? 'small' : ''}`}>
                </img>
                </Link>

                {/* Toggler for Mobile */}
                <button className="navbar-toggler ms-auto"
                    onClick={toggleNavbar}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarMob"
                    aria-controls="navbarMob"
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    {isOpen ?
                        (<span>&#10005;</span>) :
                        (<span className="navbar-toggler-icon"></span>)
                    }
                </button>
                <div className={` collapse navbar-collapse ${isOpen ? 'show' : ''} `} id="navbarMob">
                    <ul className="navbar-nav ms-auto">
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
                            <Link className="nav-link  " to="/industries">Industries</Link>
                        </li>
                        <div className=" my-3 my-sm-0">

                        <PrimaryButton buttonName="Contact Us" btnLink="/contact" />
                        </div>

                    </ul>
                    <div className="d-flex gap-3 align-items-center my-3 my-sm-0">
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



