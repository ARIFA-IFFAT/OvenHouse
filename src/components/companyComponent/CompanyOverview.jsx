import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CeoProfile from "./CeoProfile";

const CompanyOverview = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  });
  return (
      <div className="row" >
        <div className="col-12 col-md-6" data-aos="fade-right">
          <CeoProfile />
        </div>
        <div className="col-12 col-md-6" data-aos="fade-left" >
          <h1 className="cust_h1_heading "><span className="blueColorText">Over</span><span className="coloredText">view</span></h1>
          <p className="custm_p text-muted">Welcome to <span className="text_highlight">ARHCS</span>, your trusted partner in high-quality manufacturing and sales. At our dedicated factory, Oven House, we specialize in designing and producing cutting-edge laboratory equipment and commercial kitchen solutions. Our products, proudly displayed on this website, reflect our commitment to innovation, precision, and durability. Whether you&apos;re looking for reliable instruments for research or efficient tools for your kitchen, ARHCS ensures excellence in every product we create.</p>
          
        </div>
      </div>
      
  )
}

export default CompanyOverview