import { faFacebook, faInstagram, faLinkedin, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { Link } from "react-router-dom";
library.add(faFacebook, faInstagram, faLinkedin);

const SocialMediaIcons = () => {
    return (
        <div className="socialIcons">

            <Link to="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} style={{ fontSize: '24px', color: '#fff' }} className="social_icon"/></Link>
            <Link to="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} style={{ fontSize: '24px', color: '#fff' }} className="social_icon"/></Link>
            <Link to="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: '24px', color: '#fff' }} className="social_icon"/></Link>
        </div>
    )
}
export default SocialMediaIcons;