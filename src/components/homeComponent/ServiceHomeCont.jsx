import TernaryButton from "../customButtons/TernaryButton"


const ServiceHomeCont = () => {
    return (
        <>
            <div className="row justify-content-evenly ">
                <div className="col-12 col-md-7 rounded-4 srvHmContBox shcBckImg_1 ">
                    <div className="srvHmContBoxOvrley"></div>
                    <div className="srvHmContnt">
                        <h3>Equipment Solutions</h3>
                        <p className="text-white custm_p">We design and manufacture high-quality laboratory and kitchen equipment tailored to your unique needs. Whether you require precision instruments for research or efficient kitchen tools for commercial use, our team is dedicated to delivering innovative, reliable, and durable solutions.</p>
                        <TernaryButton buttonName="Learn more" btnLink="services" />
                    </div>

                </div>
                <div className="col-12 col-md-4 rounded-4 srvHmContBox shcBckImg_2 ">
                    <div className="srvHmContBoxOvrley"></div>
                    <div className="srvHmContnt">
                        <h3>Hassle-Free Maintenance</h3>
                        <p className="text-white custm_p">From routine checks to troubleshooting, we keep your equipment running smoothly.</p>
                        <TernaryButton buttonName="Learn more" btnLink="services" />

                    </div>
                </div>
            </div>
            <div className="row justify-content-evenly">
                <div className="col-12 col-md-4 rounded-4 srvHmContBox shcBckImg_3">
                    <div className="srvHmContBoxOvrley"></div>
                    <div className="srvHmContnt">
                        <h3>Seamless Product Integration</h3>
                        <p className="text-white custm_p">Seamlessly integrate our products with guided installation and quick onboarding.</p>
                        <TernaryButton buttonName="Learn more" btnLink="services" />
                    </div>
                </div>
                <div className="col-12 col-md-7 rounded-4 srvHmContBox shcBckImg_4">
                    <div className="srvHmContBoxOvrley"></div>
                    <div className="srvHmContnt">
                        <h3>Expert Training</h3>
                        <p className="text-white custm_p">Ensure you get the best out of your laboratory and kitchen equipment with our expert-led training. Our step-by-step guidance and hands-on approach help you master your tools efficiently and confidently.</p>
                        <TernaryButton buttonName="Learn more" btnLink="services" />

                    </div>

                </div>
            </div>
        </>
    )
}
export default ServiceHomeCont