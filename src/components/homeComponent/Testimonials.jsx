import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { motion } from 'framer-motion';
import { useState } from 'react';


const testimonialArray = [
  {
    name: "Ravi Kumar",
    position: "Lab Manager",
    message: `We've been using Thermomech equipment for over a year now. The hot air ovens are incredibly reliable and consistent, and the overall build quality has exceeded our expectations. What impressed us most was their fast customer support during setup and routine maintenance.`,
    image: '/images/testiMG1.png',
  },
  {
    name: "Ayesha Malik",
    position: "Executive Chef, Gourmet Kitchen",
    message: `Oven House ovens are perfect for our fast-paced kitchen. They’re easy to clean, provide even heating, and handle bulk cooking like a pro. The team guided us well during installation and even followed up later to ensure everything was working perfectly.`,
    image: '/images/testiMG4.png',
  },
  {
    name: "Dr. Rakesh Mehta",
    position: "Pharmaceutical Lab Director",
    message: `We have been sourcing curing tanks and BOD incubators from Oven House for our pharmaceutical R&D. Their equipment is precise and reliable. It's rare to find a vendor that blends product quality with responsive service like they do.`,
    image: '/images/testiMG5.png',
  },
  {
    name: "Neha Verma",
    position: "QC Specialist, BioLabs",
    message: `I’ve worked with many lab suppliers, but Oven House stands out. Their instruments are not only technically sound but also durable. We especially appreciate how they’ve customized some equipment to match our lab's exact needs.`,
    image: '/images/testiMG6.png',
  },
  {
    name: "Amit Tiwari",
    position: "Head Chef, Spice Route",
    message: `We chose Oven House for our commercial kitchen because their products are built for performance. From baking to roasting, everything is seamless. Plus, they’re responsive whenever we need technical guidance.`,
    image: '/images/testiMG3.png',
  },
  {
    name: "Priya Desai",
    position: "Owner, HomeBake Studio",
    message: `As a small business, investing in quality ovens was crucial. Oven House delivered exactly what we needed. Their products are efficient, energy-saving, and perfect for batch baking. Couldn’t be happier with the results!`,
    image: '/images/testiMG2.png',
  },
];

const Testimonials = () => {


  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    beforeChange: (oldIndex, newIndex) => {
      setActiveSlide(newIndex);
    },

    customPaging: function (i) {
      return (
        <img
          src={testimonialArray[i].image}
          alt={`client-${i}`}
          style={{
            width: "50px",
            height: "50px",
            objectFit: "cover",
            borderRadius: "50%",
            border: "2px solid #007bff",
            padding: "2px",
          }}
        />
      );
    },

    appendDots: dots => (
      <div style={{ marginTop: "20px" }}>
        <ul className="d-flex justify-content-center gap-2 list-unstyled">
          {dots}
        </ul>
      </div>
    ),
  };

  return (
    <div className="container text-center my-5" id="testom">
      <div>
        <h1 className="cust_h1_heading">
          <span className="blueColorText">What our </span>
          <span className="coloredText">Clients Say</span>
        </h1>
        <p className="custm_p text-muted">
          Client feedback that reflects our commitment to quality and service.
        </p>
      </div>

      <Slider {...settings}>
        {testimonialArray.map((testimonial, index) => (
          <div key={index}>
            <motion.div className="card mx-auto w-75"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={
                activeSlide === index ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0 }
              }
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="card-body text-center">
                <img
                  src={testimonial.image}
                  alt="testimIMG"
                  className="m-auto rounded-circle mb-4"
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
                <p className="card-text">{testimonial.message}</p>
                <h5 className="card-title">{testimonial.name}</h5>
                <p className="card-subtitle text-muted">{testimonial.position}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
