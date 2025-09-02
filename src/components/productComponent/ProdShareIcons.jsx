import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";


const ProdShareIcons = ({mailLink, wplink, fbLink}) => {
  return (
    <div className="shareicons mt-3 d-flex gap-2">
                        <p className="text-dark custm_p">Share:</p>
                        <div className="d-flex gap-2">
                            <a href={wplink} className="shareLnk" target="_blank"><FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon></a>
                            <a href={fbLink} className="shareLnk" target="_blank"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
                            <a href={mailLink} className="shareLnk" target="_blank"><FontAwesomeIcon icon={faEnvelopeOpenText}></FontAwesomeIcon></a>
                        </div>
                    </div>
  )
}

export default ProdShareIcons


ProdShareIcons.propTypes = {
    mailLink: PropTypes.string.isRequired,
    wplink: PropTypes.string.isRequired, 
    fbLink: PropTypes.string.isRequired
}