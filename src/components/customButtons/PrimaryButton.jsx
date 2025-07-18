import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const PrimaryButton = ({buttonName, btnLink}) => {
    return (
        <div className="primaryBtn">
                <span className="">
                    <Link to={btnLink} className="custm_btn_primary ">{buttonName} <FontAwesomeIcon icon={faPaperPlane} className="button_icon"></FontAwesomeIcon></Link>
                </span>            
        </div>
    )
}

// Add Prop Validation
PrimaryButton.propTypes = {
    buttonName: PropTypes.string.isRequired,
    btnLink: PropTypes.string.isRequired,
};

export default PrimaryButton