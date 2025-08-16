import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HistoryMilestone = () => {
  useEffect(()=>{
    AOS.init({duration:1000})
  });
  return (
    <div className="row" id="historyMilestone">
      <div className="col-12 col-md-6" data-aos="fade-right" data-aos-delay={200}>
        <div className="leftgoldBorder">
          <img className="comp_img rounded-3" src="images/companyPhoto.jpg" alt="" />
        </div>
      </div>
      <div className="col-12 col-md-6" data-aos="fade-left" data-aos-delay={200}>
        <div className="">
          <h2 className="cust_h2_heading"><span className="blueColorText">Our Journey & <br></br></span> <span className="coloredText">Excellence</span></h2>
          <p className="custm_p text-muted">At <span className="text_highlight">ARHCS</span>, our story is one of innovation, commitment, and growth. Since our inception in 2017, we have been dedicated to delivering high-quality laboratory instruments and commercial kitchen equipment. Over the years, we have achieved significant milestones, from pioneering advanced product designs to establishing our state-of-the-art manufacturing facility, Oven House. Our success is driven by unwavering core values: innovation, quality, customer satisfaction, and sustainability. These principles guide every aspect of our operations, ensuring we meet and exceed industry standards.</p>
          <p className="custm_p text-muted">The <span className="text_highlight">Oven House</span> factory is the heart of our manufacturing excellence. Equipped with advanced machinery and a skilled workforce, it enables us to transform raw materials into reliable, high-performing products. Each step, from sourcing and fabrication to rigorous testing, reflects our commitment to delivering the best. With a strong legacy and cutting-edge production capabilities, ARHCS continues to set new benchmarks for quality and performance in the industry.</p>

        </div>
      </div>
      
    </div>
  )
}

export default HistoryMilestone