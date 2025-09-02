
import { useEffect, useState } from "react";

import PrimaryButton from "../customButtons/PrimaryButton";


const HeroSection = () => {

const heroHeadings = [
    "Manufacturing Excellence in Laboratory Equipment",
    "Reliable Commercial Kitchen Innovation",
    "Delivering Tailored Solutions for Your Needs",
]


const [currentHeading, setCurrentHeading] = useState(0);



useEffect(()=>{
    const interval = setInterval(()=>{
        setCurrentHeading((prev) => (prev+1) % heroHeadings.length);
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
                <div className="d-flex gap-3 justify-content-center align-items-center">
                    <PrimaryButton buttonName="Explore Our Products" btnLink="products"/>
                </div>
            </div>

        </div>
    )
}
export default HeroSection;