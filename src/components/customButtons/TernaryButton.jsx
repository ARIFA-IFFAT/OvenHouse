import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const TernaryButton = ({buttonName, btnLink}) => {
    return (
        <div className="ternaryButton">
            <Link to={btnLink}>{buttonName}<FontAwesomeIcon className="trBtn_icon" icon={faArrowAltCircleRight}></FontAwesomeIcon></Link>
        </div>
    )
}

TernaryButton.propTypes = {
    buttonName: PropTypes.string.isRequired,
    btnLink: PropTypes.string.isRequired,
}


export default TernaryButton


