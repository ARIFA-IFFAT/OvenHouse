//  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import 'aos/dist/aos.css';
import AOS from "aos";
import { useEffect } from "react";
import ContactDetails from "../../data/ContactDetails";


const ContactInfo = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 }); //initialize AOS 
    }
        , []);

    return (
        <div className="container mb-5">
            <div className="d-md-flex justify-content-around gap-3">
                {ContactDetails.map(
                    (item, index) => (
                        <div key={item.id}
                            data-aos="fade-right"
                            data-aos-delay={index * 200}//delay
                            style={{ textAlign: "center" }}
                            className="infoBox"
                        >
                            <div className="cnstDetails p-2 p-md-3" >
                                {/* <FontAwesomeIcon icon={item.icon} className="const_icons mb-3 p-3 rounded-circle "></FontAwesomeIcon> */}
                                <img src={item.gifUrl} className="const_icons mb-3 rounded-circle" style={{width: '75px'}}/>
                                
                                <h3 className="custm_h3 mt-5">{item.title}</h3>
                                <p className="custm_p">{item.content}</p>
                            </div>
                        </div>

                    )
                )}
            </div>

        </div>
    );
}
export default ContactInfo;