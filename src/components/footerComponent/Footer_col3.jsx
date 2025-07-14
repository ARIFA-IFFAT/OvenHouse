import { Link } from "react-router-dom"

const Footer_col3 = () => {
    return (
        <div id="industry" className="mb-5 mb-md-0">
            <h3>Consulting Industries</h3>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link  " to="/">Pharmaceutical Industry</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link  " to="/">Research and Development</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link  " to="/">Chemical Manufacturing</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link  " to="/">Quality Control Labs</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link  " to="/contact">Food and Beverage</Link>
                </li>
            </ul>
        </div>
    )
}

export default Footer_col3