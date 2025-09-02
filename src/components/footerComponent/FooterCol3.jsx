
import { HashLink } from "react-router-hash-link"

const FooterCol3 = () => {
    return (
        <div id="industry" className="mb-5 mb-md-0">
            <h3>Consulting Industries</h3>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <HashLink smooth className="nav-link  " to="/industries#Pharma">Pharmaceutical Industry</HashLink>
                </li>
                <li className="nav-item">
                    <HashLink smooth className="nav-link  " to="/industries#R_D">Research and Development</HashLink>
                </li>
                <li className="nav-item">
                    <HashLink smooth className="nav-link  " to="/industries#Chemical">Chemical Manufacturing</HashLink>
                </li>
                <li className="nav-item">
                    <HashLink smooth className="nav-link  " to="/industries#Q_C">Quality Control Labs</HashLink>
                </li>
                <li className="nav-item">
                    <HashLink smooth className="nav-link  " to="/industries#Food">Food and Beverage</HashLink>
                </li>
            </ul>
        </div>
    )
}

export default FooterCol3