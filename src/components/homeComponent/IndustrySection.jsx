

import { faConnectdevelop } from "@fortawesome/free-brands-svg-icons"
import { faBowlFood, faFlaskVial, faMicroscope, faSyringe } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import TernaryButton from "../customButtons/TernaryButton"


const IndustrySection = () => {
    return (
        <div className="industrySec my-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 col-md-4 ">
                        <h1 className="cust_h1_heading mb-3"><span className="text-white">Industries </span><span className="coloredText">We Serve</span></h1>
                    </div>
                    <div className="col-12 col-md-4 indWhtBox">
                        <div>
                            <FontAwesomeIcon icon={faSyringe} className="indIcon"/>
                            <h4 className="mt-2">Pharmaceutical</h4>
                            <p className="custm_p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam qui saepe iure molestiae, ut praesentium.</p> 
                            <TernaryButton buttonName="Learn more" btnLink="#"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 indWhtBox">
                        <div>
                            <FontAwesomeIcon icon={faConnectdevelop} className="indIcon"/>
                            <h4 className="mt-2">Research and Development</h4>
                            <p className="custm_p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam qui saepe iure molestiae, ut praesentium.</p>
                            <TernaryButton buttonName="Learn more" btnLink="#"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4 indWhtBox">
                        <div>
                            <FontAwesomeIcon icon={faFlaskVial} className="indIcon"/>
                            <h4 className="mt-2">Chemical Manufacturing</h4>
                            <p className="custm_p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam qui saepe iure molestiae, ut praesentium.</p>
                            <TernaryButton buttonName="Learn more" btnLink="#"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 indWhtBox">
                        <div>
                            <FontAwesomeIcon icon={faMicroscope} className="indIcon"/>
                            <h4 className="mt-2">Quality Control Labs</h4>
                            <p className="custm_p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam qui saepe iure molestiae, ut praesentium.</p>
                            <TernaryButton buttonName="Learn more" btnLink="#"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 indWhtBox">
                        <div>
                            <FontAwesomeIcon icon={faBowlFood} className="indIcon"/>
                            <h4 className="mt-2">Food and Beverage</h4>
                            <p className="custm_p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam qui saepe iure molestiae, ut praesentium.</p>
                            <TernaryButton buttonName="Learn more" btnLink="#"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndustrySection