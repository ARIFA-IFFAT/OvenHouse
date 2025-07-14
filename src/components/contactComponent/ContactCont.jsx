
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import LocationGoogle from "./LocationGoogle";
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactCont = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });

    }, [])

    return (
        <>
            {/* <div className="" style={{ position: 'relative', width: '100%' }}>
                <video autoPlay muted loop className="const_bg_video w-100">
                    <source src="/images/Contact us.mp4" type="video/mp4" />
                </video>
                <div className="const_content container d-grid">
                    <div className="row justify-content-between">
                        <div className="col-6 col-md-4">

                            <TopContactForm />
                        </div>
                    </div>
                </div>

            </div> */}

            <div className="contact_bg_img">
                <div className="container" >
                    <div className="height_in_banner"></div>
                    <h1 className="text-center text-white" style={{ fontSize: '50px' }}>Contact us</h1>
                    <div className="height_in_banner"></div>

                </div>
            </div>

            {/* Location */}
            <div className="container p-5">
                <div data-aos='fade-up'>
                    <h1 className="cust_h1_heading text-center"><span className='blueColorText'>Where To </span><span className="coloredText">Find Us</span></h1>
                    <p className='custm_p text-center text-muted mb-5'>Please call/visit on working hours.</p>

                </div>
                <div>
                    <ContactInfo />
                </div>
            </div>
            <div id="mapLocation" className="largeMap">
                <LocationGoogle />
            </div>
            <div className="cntFormBG">
                <div className='container py-5 m-auto'>
                    <div data-aos='fade-up'>
                        <h1 className="text-center mb-2 text-dark cust_h1_heading" ><span className="blueColorText">Connect</span> <span className="coloredText">with us</span></h1>
                        <p className='custm_p text-center text-muted mb-5'>Fill this form, soon we will get back to you.</p>
                    </div>
                    <div className="row">
                        <div className='col-12 col-md-6 cont_left'>
                            <ContactForm />
                        </div>
                        <div className='col-12 col-md-6 cont_right'>
                            <div className='sqrBox'>
                                <div className="socl_btns">
                                    <Link to="#" className='sqrBox_link sqrBox_link1 '>
                                        <FontAwesomeIcon className='sqrBox_icon' icon={faPhone}></FontAwesomeIcon>
                                        9876543210
                                    </Link>
                                </div>
                                <div className="socl_btns">
                                    <Link href="#" className='sqrBox_link sqrBox_link2'>
                                        <FontAwesomeIcon className='sqrBox_icon' icon={faEnvelopeOpen}></FontAwesomeIcon>
                                        info@arhcs-ovenhouse.com
                                    </Link>
                                </div>
                                <div className="socl_btns">
                                    <Link href="#" className='sqrBox_link sqrBox_link3'>
                                        <FontAwesomeIcon className='sqrBox_icon' icon={faClock}></FontAwesomeIcon>
                                        9 AM - 8 PM
                                    </Link>
                                </div>
                                <div className="socl_btns mapBtn sqrBox_link sqrBox_link4" >
                                    <LocationGoogle />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactCont;