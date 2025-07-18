

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
                            <h3 className="mt-2">Pharmaceutical</h3>
                            <p className="custm_p">We provide advanced thermal and laboratory equipment for drug development, quality testing, and stability analysis. Our solutions meet GMP standards and support high-precision pharmaceutical production.</p> 
                            <TernaryButton buttonName="Learn more" btnLink="/industries#Pharma"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 indWhtBox">
                        <div>
                            <FontAwesomeIcon icon={faConnectdevelop} className="indIcon"/>
                            <h3 className="mt-2">Research and Development</h3>
                            <p className="custm_p">Our equipment empowers innovation in research environments by providing accurate, reliable, and consistent conditions. Ideal for universities, biotech, and industrial R&D labs.</p>
                            <TernaryButton buttonName="Learn more" btnLink="/industries#R_D"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4 indWhtBox">
                        <div>
                            <FontAwesomeIcon icon={faFlaskVial} className="indIcon"/>
                            <h3 className="mt-2">Chemical Manufacturing</h3>
                            <p className="custm_p">Our high-temperature, corrosion-resistant equipment supports safe processing, drying, and production in demanding chemical environments.</p>
                            <TernaryButton buttonName="Learn more" btnLink="/industries#Chemical"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 indWhtBox">
                        <div>
                            <FontAwesomeIcon icon={faMicroscope} className="indIcon"/>
                            <h3 className="mt-2">Quality Control Labs</h3>
                            <p className="custm_p">Maintain precision, compliance, and product consistency with our reliable lab instruments designed for thorough quality control in regulated industries.</p>
                            <TernaryButton buttonName="Learn more" btnLink="/industries#Q_C"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 indWhtBox">
                        <div>
                            <FontAwesomeIcon icon={faBowlFood} className="indIcon"/>
                            <h3 className="mt-2">Food and Beverage</h3>
                            <p className="custm_p">Ensure food safety, hygiene, and regulatory compliance with our robust testing and thermal processing tools tailored for food labs and production units.</p>
                            <TernaryButton buttonName="Learn more" btnLink="/industries#Food"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndustrySection