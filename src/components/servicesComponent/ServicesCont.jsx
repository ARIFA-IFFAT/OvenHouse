import { useEffect } from "react";
import AllServices from "./AllServices"; 
import SecondaryButton from "../customButtons/SecondaryButton"

import Aos from "aos";

const ServicesCont = () => {

useEffect(()=>{
  Aos.init({duration: 1000});
});

  return (
    <>
       <div className='bannerImg'>
                <div className="bnnrSpc"></div>
                    <h2 className="cust_h2_heading text-center"><span className='blueColorText'>Our Services</span></h2>
                    <p className='custm_p text-center text-muted mb-3'>Precision-driven solutions to power your progress.</p>
                <div className="d-flex gap-2 justify-content-center">
                  <div className="blueline"></div>
                  <div className="yellowline"></div>
                </div>
                <div className="bnnrSpc"></div>           
            </div>
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-6" data-aos="fade-up">
          <h1 className="cust_h1_heading mb-3"><span className="blueColorText">Our Support </span><span className="coloredText">& Services</span></h1>
        </div>
        <div className="col-12 col-md-6">
          <p className="text-muted custm_p">We specialize in designing and manufacturing high-quality laboratory and kitchen equipment tailored to your needs. From seamless product integration and expert training to reliable maintenance and support.</p>
          <p className="text-muted custm_p">We offer end-to-end solutions that ensure performance, safety, and long-term efficiency.</p>
        <div className="my-5">
                        <SecondaryButton buttonName="Contact us" btnLink="contact"/>
                    </div>
        </div>        
      </div>
      <div className="row">
        <AllServices/>
      </div>
    </div>
    </>
  )
}

export default ServicesCont