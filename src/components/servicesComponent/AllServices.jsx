import { faPersonDigging } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import WhyChooseUs from "../aboutComponent/WhyChooseUs"

const AllServices = () => {
    return (
        <div className="my-5">


            <div id="allServ">
                <div className="d-md-flex gap-3 justify-content-between">
                    <div className="curveBox curvLefTop mb-3 p-4 col-12 col-md-6">
                        <h3>1. Custom Equipment Solutions</h3>
                        <p className="custm_p text-muted">
                            <span className="text_highlight">Tailored to Your Needs -</span>
                            <br />
                            We design and manufacture high-quality laboratory and kitchen equipment suited for diverse industries. Whether you need precision lab instruments or robust kitchen tools, our team ensures you get durable, innovative, and efficient solutions.
                        </p>
                        <div>
                            <p className="custm_p text-muted "><FontAwesomeIcon icon={faPersonDigging} className="me-2 tickIcon"></FontAwesomeIcon>Laboratory ovens, incubators, hot plates, and more</p>

                            <p className="custm_p text-muted "><FontAwesomeIcon icon={faPersonDigging} className="me-2 tickIcon"></FontAwesomeIcon>Commercial kitchen equipment for reliable operations</p>

                            <p className="custm_p text-muted "><FontAwesomeIcon icon={faPersonDigging} className="me-2 tickIcon"></FontAwesomeIcon>Custom-built solutions to match your specifications</p>
                        </div>
                    </div>
                    <div className="curveBox curvRighTop mb-3 p-4 col-12 col-md-6">
                        <h3>2. Hassle-Free Maintenance</h3>
                        <p className="custm_p text-muted">
                            <span className="text_highlight">Keeping Your Equipment Running Smoothly -</span>
                            <br />
                            Our experienced technicians handle everything from routine servicing to emergency repairs. We ensure your operations stay uninterrupted.
                        </p>
                        <div>
                            <p className="custm_p text-muted "><FontAwesomeIcon icon={faPersonDigging} className="me-2 tickIcon"></FontAwesomeIcon>Scheduled maintenance programs</p>

                            <p className="custm_p text-muted "><FontAwesomeIcon icon={faPersonDigging} className="me-2 tickIcon"></FontAwesomeIcon>Emergency repair services</p>

                            <p className="custm_p text-muted "><FontAwesomeIcon icon={faPersonDigging} className="me-2 tickIcon"></FontAwesomeIcon>Equipment health checks and troubleshooting</p>
                        </div>
                    </div>
                </div>
                <div className="d-md-flex gap-3 justify-content-between">
                    <div className="curveBox curvLefBttm mb-3 p-4 col-12 col-md-6">
                        <h3>3. Seamless Product Integration</h3>
                        <p className="custm_p text-muted">
                            <span className="text_highlight">From Delivery to Installation -</span>
                            <br />
                            We don&apos;t just deliver products—we ensure they work perfectly within your setup. Our team handles integration, configuration, and testing for a smooth start.
                        </p>
                        <div>
                            <p className="custm_p text-muted "><FontAwesomeIcon icon={faPersonDigging} className="me-2 tickIcon"></FontAwesomeIcon>On-site equipment installation</p>

                            <p className="custm_p text-muted "><FontAwesomeIcon icon={faPersonDigging} className="me-2 tickIcon"></FontAwesomeIcon>System calibration and performance checks</p>

                            <p className="custm_p text-muted "><FontAwesomeIcon icon={faPersonDigging} className="me-2 tickIcon"></FontAwesomeIcon>Fast onboarding and user guidance</p>
                        </div>
                    </div>
                    <div className="curveBox curvRighBttm mb-3 p-4 col-12 col-md-6">
                        <h3>4. Expert Training & Support</h3>
                        <p className="custm_p text-muted">
                            <span className="text_highlight">Knowledge That Empowers -</span>
                            <br />
                            Our training programs help your team make the most of your equipment. We provide step-by-step guidance and hands-on workshops to build confidence and skill.
                        </p>
                        <div>
                            <p className="custm_p text-muted "><FontAwesomeIcon icon={faPersonDigging} className="me-2 tickIcon"></FontAwesomeIcon>On-site and virtual training options</p>

                            <p className="custm_p text-muted "><FontAwesomeIcon icon={faPersonDigging} className="me-2 tickIcon"></FontAwesomeIcon>User manuals and video resources</p>

                            <p className="custm_p text-muted "><FontAwesomeIcon icon={faPersonDigging} className="me-2 tickIcon"></FontAwesomeIcon>Ongoing support and consultations</p>
                        </div>
                    </div>
                </div>
                <div>
                    <WhyChooseUs />
                </div>
            </div>
        </div>
    )
}

export default AllServices