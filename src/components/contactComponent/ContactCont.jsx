
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
            <div className='bannerImg'>
                <div className="bnnrSpc"></div>
                    <h1 className="cust_h1_heading text-center"><span className='blueColorText'>Contact Us</span></h1>
                    <p className='custm_p text-center text-muted mb-3'>Let&apos;s Connect — We&apos;re Here to Help You Succeed.</p>
                <div className="d-flex gap-2 justify-content-center">
                  <div className="blueline"></div>
                  <div className="yellowline"></div>
                </div>
                <div className="bnnrSpc"></div>           
            </div>

            <div className="container">
                <div data-aos='fade-up'>
                    <h2 className="cust_h2_heading text-center"><span className='blueColorText'>Where To </span><span className="coloredText">Find Us</span></h2>
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
                        <h2 className="text-center mb-2 text-dark cust_h2_heading" ><span className="blueColorText">Connect</span> <span className="coloredText">with Us</span></h2>
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