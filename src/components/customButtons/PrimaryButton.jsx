import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const PrimaryButton = ({buttonName, btnLink}) => {
    return (
        <div className="primaryBtn">
                    <Link to={btnLink} className="custm_btn_primary "><span >{buttonName}</span> <FontAwesomeIcon icon={faArrowRightLong} className="button_icon"></FontAwesomeIcon></Link>
                           
        </div>
    )
}

// Add Prop Validation
PrimaryButton.propTypes = {
    buttonName: PropTypes.string.isRequired,
    btnLink: PropTypes.string.isRequired,
};

export default PrimaryButton