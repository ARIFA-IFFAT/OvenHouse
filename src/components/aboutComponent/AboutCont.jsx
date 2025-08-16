import AbtCarousel from "./AbtCarousel";
import TeamCont from "./TeamCont";
import WhyChooseUs from "./WhyChooseUs";
import StagesOfDev from "./StagesOfDev";

import AOS from 'aos';
import 'aos/dist/aos.css';


import { useEffect } from "react";
import SecondaryButton from "../customButtons/SecondaryButton";




const AboutCont = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const images_1 = [
        {
            id: 1,
            src: '/images/IMG-1.png',
            alt: 'image 1'
        },
        {
            id: 2,
            src: '/images/IMG-2.png',
            alt: 'image 2'
        },
        {
            id: 3,
            src: '/images/IMG-3.png',
            alt: 'image 3'
        },

    ];
    const images_2 = [
        {
            id: 1,
            src: '/images/IMG-11.png',
            alt: 'iamge 1'
        },
        {
            id: 2,
            src: '/images/IMG-22.png',
            alt: 'image 2'
        },
        {
            id: 3,
            src: '/images/IMG-33.png',
            alt: 'image 3'
        },
    ];

    return (
        <>
        <div className='bannerImg'>
                <div className="bnnrSpc"></div>
                    <h1 className="cust_h1_heading text-center"><span className='blueColorText'>Oven House</span></h1>
                    <p className='custm_p text-center text-muted mb-3'>Manufacturing excellence in ovens, incubators, and lab equipment since day one.</p>                
                <div className="d-flex gap-2 justify-content-center">
                  <div className="blueline"></div>
                  <div className="yellowline"></div>
                </div>
                <div className="bnnrSpc"></div>           
            </div>
            <div className="my-5" id="aboutSec">
                <div className="container ">
                    <div className="row py-3">
                        <div className="col-12 col-md-6 mb-5" data-aos="fade-right">
                            <h2 className="cust_h2_heading mb-3"><span className="blueColorText">Who </span><span className="coloredText">we are </span></h2>
                            <p className="text-muted custm_p">
                                We are a trusted manufacturer of high-quality <span className="text_highlight">laboratory instruments and commercial kitchen equipment</span>, catering to a diverse range of industries. With years of expertise and a strong commitment to excellence, we have established ourselves as a reliable partner for businesses, institutions, and professionals who demand precision, performance, and durability.
                            </p>
                            <p className="text-muted custm_p">
                                Our product range includes cutting-edge solutions designed to meet the specific needs of laboratories, research facilities, hospitals, pharmaceutical companies, restaurants, and hospitality industries. Whether you&apos;re looking for advanced laboratory equipment for critical research or durable kitchen appliances for high-demand environments, we’ve got you covered.
                            </p>
                            <div className="mt-5">

                                <SecondaryButton btnLink="#teamSec" buttonName="Meet our team" />
                            </div>

                        </div>
                        <div className="col-12 col-md-6 abt_slider_box" data-aos='fade-left'>
                            <AbtCarousel images={images_1} />
                        </div>
                    </div>

                </div>
            </div>

            <div className="my-5" id="aboutSec">
                <div className="container ">
                    <div className="row py-3">
                        <div className="col-12 col-md-6 mb-5 abt_slider_box" data-aos='fade-right'>
                            <AbtCarousel images={images_2} />
                        </div>
                        <div className="col-12 col-md-6 mb-5" data-aos="fade-left">
                            <h2 className="mb-3 cust_h2_heading "><span className="blueColorText">Our</span> <span className="coloredText">Mission & Vision </span></h2>
                            <p className="text-muted custm_p">
                                <span className="text_highlight">Our mission</span>, Empowering laboratories and commercial kitchens with world-class, innovative, and reliable solutions. We prioritize quality, efficiency, and sustainability to enhance performance and exceed client expectations.
                            </p>
                            <p className="text-muted custm_p">
                                <span className="text_highlight">Our vision</span>, To be a global leader in laboratory and kitchen equipment, setting new standards in quality, innovation, and sustainability while making a lasting impact on businesses and communities.
                            </p>
                            <div className="mt-5">
                                <SecondaryButton btnLink="#whyUS" buttonName="Why choose us" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div id="stages" className="backgroundBlack py-5 text-white text-center">
                <StagesOfDev />
            </div>
            <div id="whyUS">
                <WhyChooseUs />
            </div>
            <div className="mb-5" id="teamSec">
                <TeamCont />
            </div>
        </>
    )
}
export default AboutCont;