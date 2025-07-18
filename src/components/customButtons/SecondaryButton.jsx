import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

import PropTypes from "prop-types";

const SecondaryButton = ({buttonName, btnLink}) => {
    const isHashLink = btnLink.startsWith("#");
    return (
        <div className="secondaryBtn">
            {isHashLink?(
                <a href={btnLink} className="custm_btn_secondary">
                    {buttonName}
                    <FontAwesomeIcon icon={faPaperPlane} className="button_icon" />
                </a>
            ):(
                <Link to={btnLink} className="custm_btn_secondary">{buttonName} <FontAwesomeIcon icon={faPaperPlane} className="button_icon"></FontAwesomeIcon></Link>
            )}
            

        </div>
    )
}


SecondaryButton.propTypes={
    buttonName: PropTypes.string.isRequired,
    btnLink: PropTypes.string.isRequired,
}
export default SecondaryButton