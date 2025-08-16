import { Link } from "react-router-dom"

const Footer_col3 = () => {
    return (
        <div id="industry" className="mb-5 mb-md-0">
            <h3>Consulting Industries</h3>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link  " to="/industries#Pharma">Pharmaceutical Industry</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link  " to="/industries#R_D">Research and Development</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link  " to="/industries#Chemical">Chemical Manufacturing</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link  " to="/industries#Q_C">Quality Control Labs</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link  " to="/industries#Food">Food and Beverage</Link>
                </li>
            </ul>
        </div>
    )
}

export default Footer_col3