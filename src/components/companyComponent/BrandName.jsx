import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const BrandName = () => {
   useEffect(()=>{
      AOS.init({duration:1000})
    });
  return (
    <div className="row">
      <div className="col-12 col-md-6" data-aos="fade-right" data-aos-delay={200}>
        <div className="">
          <h1 className="cust_h1_heading"><span className="blueColorText">Our Brand: </span> <span className="coloredText">Thermomech</span></h1>
          <p className="custm_p text-muted"><span className="text_highlight">Thermomech</span> represents the hallmark of quality and innovation in laboratory and kitchen equipment. As a trusted brand under ARHCS, Thermomech is synonymous with advanced technology, precision engineering, and reliability.</p>
          <p className="custm_p text-muted">Our products under the Thermomech brand are designed to meet the diverse needs of professionals, combining functionality with durability. With a focus on customer satisfaction, Thermomech continues to lead the way in setting industry standards and redefining excellence.</p>
        </div>
      </div>
      <div className="col-12 col-md-6" data-aos="fade-left" data-aos-delay={200}>
      <div className="rightgoldBorder">
        <img className="comp_img rounded-4" src="images/thermomech-brand.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default BrandName