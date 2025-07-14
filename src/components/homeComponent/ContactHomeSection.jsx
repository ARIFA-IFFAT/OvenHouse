import ContactForm from "../contactComponent/ContactForm"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ContactDetails from '../../data/ContactDetails'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactHomeSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (

        <div id="homeContFormSec" className="my-5 ">
            <div className="container py-5" >
                <h1 className="cust_h1_heading mb-3 text-center"><span className="text-white">How Can we Help?</span></h1>
                <p className="text-white custm_p text-center">Got a question or need assistance? Our team is ready to provide the perfect solution—let&apos;s talk!</p>
            </div>
            <div className="container pb-5">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div>
                            {ContactDetails.map((item) => (
                                <div key={item.id}>
                                    <div className="vertBox d-flex justify-content-between align-items-start mb-4 ">
                                        {/* <FontAwesomeIcon icon={item.icon} className="vertBox_icon mb-3 p-3 rounded-circle "></FontAwesomeIcon> */}
                                        <img alt="moveImg" src={item.gifUrl} className="vertBox_icon mb-3 rounded-circle" style={{ width: '75px' }} />
                                        <div>
                                            <h3 className="custm_h3 blueColorText">{item.title}</h3>
                                            <p className="custm_p m-0 faded_p">{item.content}</p>
                                        </div>
                                        <div>
                                            <p className="bigNumber">{item.id}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-6 col-12" data-aos='fade-left'>
                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ContactHomeSection