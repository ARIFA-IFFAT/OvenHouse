import { faGears, faHelmetSafety, faLightbulb, faSuitcase } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";


const CompanyRatings = () => {

    useEffect((()=>{
        AOS.init({duration: 1000});
    }),[])

    const ratingDetails = [
        { id: 1, val: "15+", term: "Work Experience", ratingIcon: faSuitcase },
        { id: 2, val: "55K+", term: "Projects Per Year", ratingIcon: faGears },
        { id: 3, val: "60+", term: "Projects Per Month", ratingIcon: faLightbulb },
        { id: 4, val: "100+", term: "Happy Clients", ratingIcon: faHelmetSafety },
    ];

    return (
            <div className="d-md-flex justify-content-around gap-3">
                {ratingDetails.map((rating, index) => (
                    <div key={index} className="infoBox d-flex justify-content-center align-items-center p-5 p-md-2 w-75 w-md-full " data-aos="fade-right" data-aos-delay={index*200}>
                        <div className="ratingDetH">
                            <h3 className="blueColorText ">{rating.val}</h3>
                            <p className="coloredText ">{rating.term}</p>
                        </div>
                        <FontAwesomeIcon icon={rating.ratingIcon} className="cmpIcons"></FontAwesomeIcon>
                    </div>
                ))}

            </div>
       
    )
}

export default CompanyRatings