import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"


const CTACont = () => {
    return (
        <div className="mt-5" id="ctaSection">
            <div className=" ctabrdr ">
                <div className="ctaBackgrnd ">
                    <div className="container text-center py-5">
                        <h2 className="cust_h2_heading"><span className="blueColorText">Your Trusted Partner in </span> <span className="coloredText">Precision Manufacturing </span></h2>
                        <p className="text-muted custm_p">Discover the perfect blend of quality and innovation with Oven House. Together, we shape the future.</p>
                        <div className="btnBox my-4">
                            <span className="custm_btn_prim_brdr">
                                <Link to="contact" className="custm_btn_primary">Get a quote <FontAwesomeIcon icon={faPaperPlane} className="button_icon"></FontAwesomeIcon></Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTACont