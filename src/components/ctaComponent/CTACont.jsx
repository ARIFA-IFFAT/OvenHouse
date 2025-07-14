import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"


const CTACont = () => {
    return (
        <div className="py-5" id="ctaSection">
            <div className="container ctabrdr ">
                <div className="ctaBackgrnd rounded-5">
                    <div className="container text-center py-5">
                        <h1 className="cust_h1_heading"><span className="blueColorText">Your Trusted Partner in </span> <span className="coloredText">Precision Manufacturing </span></h1>
                        <p className="text-muted custm_p">Discover the perfect blend of quality and innovation with Oven House. Together, we shape the future.</p>
                        <div className="btnBox my-4">
                            <span className="custm_btn_prim_brdr">
                                <Link to="contact" target="_blank" class="custm_btn_primary">Get a quote <FontAwesomeIcon icon={faPaperPlane} className="button_icon"></FontAwesomeIcon></Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTACont