
import { useEffect, useState } from "react";

import PrimaryButton from "../customButtons/PrimaryButton";
import SecondaryButton from "../customButtons/SecondaryButton";


const HeroSection = () => {

const heroHeadings = [
    "Manufacturing Excellence in Laboratory Equipment",
    "Reliable Commercial Kitchen Innovation",
    "Delivering Tailored Solutions for Your Needs",
]
// const heroParagraphs = [
//     "Precision-engineered tools designed to elevate your lab's performance",
//     "Empowering kitchens with cutting-edge solutions that last",
//     "Customized products crafted to match your unique requirements",
// ]

const [currentHeading, setCurrentHeading] = useState(0);
// const [currentPara, setCurrentPara] = useState(0);


useEffect(()=>{
    const interval = setInterval(()=>{
        setCurrentHeading((prev) => (prev+1) % heroHeadings.length);
        // setCurrentPara((prev) => (prev+1) % heroParagraphs.length);
    }, 5000);
    return ()=> clearInterval(interval);
    
} , []);


    return (
        <div className="hero_section">
            <video autoPlay muted loop className="video_background">
                <source src="/images/VID-20241102-WA0001.mp4" type="video/mp4" />
            </video>
            <div className="hero_overlay"></div>
            <div className="hero_cont">
                <h1 className="hero_heading mb-5">{heroHeadings[currentHeading]}</h1>
                {/* <p className="hero_para mb-5">{heroParagraphs[currentPara]}</p> */}
                <div className="d-flex gap-3 justify-content-center align-items-center">
                    <SecondaryButton buttonName="Explore products" btnLink="products"/>
                    <PrimaryButton buttonName= "About us" btnLink="about" />
                </div>
            </div>

        </div>
    )
}
export default HeroSection;