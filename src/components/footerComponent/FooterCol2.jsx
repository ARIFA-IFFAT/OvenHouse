import { Link } from "react-router-dom"

const FooterCol2 = () => {
    return (
        <div id="quickLinks" className="mb-5 mb-md-0">
            <h3>Quick Links</h3>
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
        </div>
    )
}

export default FooterCol2