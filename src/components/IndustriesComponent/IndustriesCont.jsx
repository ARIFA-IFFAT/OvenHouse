import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const IndustriesCont = () => {


const location = useLocation();

useEffect(()=>{
  if(location.hash){
    const id = location.hash.replace("#", "");
    const element = document.getElementById(id);
    if(element){
      element.scrollIntoView({behavior: 'smooth'});
    }
  }
}, [location]);


  return (
    <>
       <div className='bannerImg'>
                <div className="bnnrSpc"></div>
                    <h1 className="cust_h1_heading text-center"><span className='blueColorText'>Innovating Across Industries</span></h1>
                    <p className='custm_p text-center text-muted mb-3'>Technology that adapts to your needs.</p>
                <div className="d-flex gap-2 justify-content-center">
                  <div className="blueline"></div>
                  <div className="yellowline"></div>
                </div>
                <div className="bnnrSpc"></div>           
            </div>

    <div className="container ">
      <div className="mb-5">
        <h2 className="cust_h2_heading mb-3 text-center"><span className="blueColorText">Industries </span><span className="coloredText">We Serve</span></h2>
        <p className="text-muted text-center custm_p">Tailored solutions for diverse sectors — built for performance, precision, and durability.</p>
      </div>

      {/* Pharmaceutical */}
      <section className="row my-5" id="Pharma">
        <div className="col-12 col-md-6">
          <img src="/images/Pharmaceutical-img.png" alt="" className="w-100 comp_img rounded-4" />
        </div>
        <div className="col-12 col-md-6">
          <h3 className="blueColorText ">Pharmaceutical Industry<img src="/icons/long-right-arrow.svg" alt="" style={{ width: '50px' }} /></h3>
          <p>We supply precision-controlled equipment like ovens, incubators, and chambers used in formulation, testing, and production in the pharmaceutical industry. Our solutions ensure accurate temperature control, uniform performance, and long-term reliability—supporting quality assurance, research efficiency, and compliance with GMP and other regulatory standards.</p>
          <div className="">
            <p className="points_btn d-flex gap-2 align-items-center mb-3 py-2 px-3 fw-bold rounded-5" style={{ width: 'max-content' }}>
              <img src="/icons/medicine-100.png" alt="" style={{ width: '30px' }} />Stability testing
            </p>
            <p className="points_btn d-flex gap-2 align-items-center mb-3 py-2 px-3 fw-bold rounded-5" style={{ width: 'max-content' }}>
              <img src="/icons/medicine-100.png" alt="" style={{ width: '30px' }} />Sterilization solutions</p>
            <p className="points_btn d-flex gap-2 align-items-center mb-3 py-2 px-3 fw-bold rounded-5" style={{ width: 'max-content' }}>
              <img src="/icons/medicine-100.png" alt="" style={{ width: '30px' }} />Suitable for tablet coating, drying, and chemical reaction processes</p>
            <p className="points_btn d-flex gap-2 align-items-center mb-3 py-2 px-3 fw-bold rounded-5" style={{ width: 'max-content' }}>
              <img src="/icons/medicine-100.png" alt="" style={{ width: '30px' }} />GMP/GLP compliance</p>
          </div>
          <div className="use_case">
            <p className="fs-5 text-danger fw-bolder">🡆 Use Cases: Drying tablets, sterilization, chemical stability testing.</p>
          </div>
        </div>
      </section>


      {/* Research and Development */}

      <section className="row my-5" id="R_D">
        <div className="col-12 col-md-6">
          <h3 className="blueColorText ">Research and Development Industry<img src="/icons/long-right-arrow.svg" alt="" style={{ width: '50px' }} /></h3>
          <p>Our equipment helps researchers and innovators test new materials, compounds, and processes in safe, consistent environments. Ideal for biotech, academic, and industrial R&D setups, with support for long-term experiments and sensitive applications.</p>
          <div className="">
            <p className="points_btn d-flex gap-2 align-items-center mb-3 py-2 px-3 fw-bold rounded-5" style={{ width: 'max-content' }}>
              <img src="/icons/analyze-100.png" alt="" style={{ width: '30px' }} />High-accuracy thermal systems for testing and simulation
            </p>
            <p className="points_btn d-flex gap-2 align-items-center mb-3 py-2 px-3 fw-bold rounded-5" style={{ width: 'max-content' }}>
              <img src="/icons/analyze-100.png" alt="" style={{ width: '30px' }} />Ideal for long-duration experimentation
            </p>
            <p className="points_btn d-flex gap-2 align-items-center mb-3 py-2 px-3 fw-bold rounded-5" style={{ width: 'max-content' }}>
              <img src="/icons/analyze-100.png" alt="" style={{ width: '30px' }} />Low maintenance & high durability
            </p>
            <p className="points_btn d-flex gap-2 align-items-center mb-3 py-2 px-3 fw-bold rounded-5" style={{ width: 'max-content' }}>
              <img src="/icons/analyze-100.png" alt="" style={{ width: '30px' }} />Supports prototyping and innovation workflows
            </p>
          </div>
          <div className="use_case">
            <p className="fs-5 text-danger fw-bolder">🡆 Use Cases: Prototype testing, material studies, temperature-controlled experiments.</p>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <img src="/images/Research and Development-img.png" alt="" className="w-100 comp_img rounded-4" />
        </div>
      </section>


      {/* Chemical Manufacturing */}

      <section className="row my-5" id="Chemical">
        <div className="col-12 col-md-6">
          <img src="/images/Chemical Manufacturing-img.png" alt="" className="w-100 comp_img rounded-4" />
        </div>
        <div className="col-12 col-md-6">
          <h3 className="blueColorText ">Chemical Manufacturing Industry<img src="/icons/long-right-arrow.svg" alt="" style={{ width: '50px' }} /></h3>
          <p>We provide durable, heat-resistant equipment for various chemical production and testing needs. Our products are capable of handling harsh compounds and are built for continuous industrial use, ensuring safety, performance, and process reliability in demanding environments.</p>
          <div className="">
            <p className="points_btn d-flex gap-2 align-items-center mb-3 py-2 px-3 fw-bold rounded-5" style={{ width: 'max-content' }}>
              <img src="/icons/chemical-100.png" alt="" style={{ width: '30px' }} />Resistant to corrosive chemicals and vapors
            </p>
            <p className="points_btn d-flex gap-2 align-items-center mb-3 py-2 px-3 fw-bold rounded-5" style={{ width: 'max-content' }}>
              <img src="/icons/chemical-100.png" alt="" style={{ width: '30px' }} />High-temperature tolerance
            </p>
            <p className="points_btn d-flex gap-2 align-items-center mb-3 py-2 px-3 fw-bold rounded-5" style={{ width: 'max-content' }}>
              <img src="/icons/chemical-100.png" alt="" style={{ width: '30px' }} />Suitable for synthesis, evaporation, and drying processes
            </p>
            <p className="points_btn d-flex gap-2 align-items-center mb-3 py-2 px-3 fw-bold rounded-5" style={{ width: 'max-content' }}>
              <img src="/icons/chemical-100.png" alt="" style={{ width: '30px' }} />Easy to clean & maintain for industrial labs
            </p>
          </div>
          <div className="use_case">
            <p className="fs-5 text-danger fw-bolder">🡆 Use Cases: Sample synthesis, compound evaporation, heat curing.</p>
          </div>
        </div>
      </section>


      {/* Quality Control */}

      <section className="row my-5" id="Q_C">
        <div className="col-12 col-md-6">
          <h3 className="blueColorText ">Quality Control Industry<img src="/icons/long-right-arrow.svg" alt="" style={{ width: '50px' }} /></h3>
          <p>QC labs rely on accuracy, repeatability, and standardization. Our equipment is calibrated for tight tolerances and is suitable for batch testing, safety validation, and regulatory quality checks. Designed to meet stringent compliance needs, our tools ensure consistent performance and reliable results across multiple testing cycles.</p>
          <div className="">
            <p className="points_btn d-flex gap-2 align-items-center mb-3 py-2 px-3 fw-bold rounded-5" style={{ width: 'max-content' }}>
              <img src="/icons/best-seller-100.png" alt="" style={{ width: '30px' }} />Fast and consistent performance
            </p>
            <p className="points_btn d-flex gap-2 align-items-center mb-3 py-2 px-3 fw-bold rounded-5" style={{ width: 'max-content' }}>
              <img src="/icons/best-seller-100.png" alt="" style={{ width: '30px' }} />Helps meet ISO and regulatory requirements
            </p>
            <p className="points_btn d-flex gap-2 align-items-center mb-3 py-2 px-3 fw-bold rounded-5" style={{ width: 'max-content' }}>
              <img src="/icons/best-seller-100.png" alt="" style={{ width: '30px' }} />Supports physical, chemical, and microbial analysis
            </p>
            <p className="points_btn d-flex gap-2 align-items-center mb-3 py-2 px-3 fw-bold rounded-5" style={{ width: 'max-content' }}>
              <img src="/icons/best-seller-100.png" alt="" style={{ width: '30px' }} />Integrates well with lab automation systems
            </p>
          </div>
          <div className="use_case">
            <p className="fs-5 text-danger fw-bolder">🡆 Use Cases: Batch inspection, ISO compliance testing, physical and chemical analysis.</p>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <img src="/images/Quality Control Labs-img.png" alt="" className="w-100 comp_img rounded-4" />
        </div>
      </section>


{/* Food and Beverage */}

      <section className="row my-5" id="Food">
        <div className="col-12 col-md-6">
          <img src="/images/Food and Beverage-img.png" alt="" className="w-100 comp_img rounded-4" />
        </div>
        <div className="col-12 col-md-6">
          <h3 className="blueColorText ">Food and Beverage Industry<img src="/icons/long-right-arrow.svg" alt="" style={{ width: '50px' }} /></h3>
          <p>Food safety and quality depend on rigorous testing. We offer ovens, incubators, and dryers tailored for microbiology labs and food R&D units to ensure product safety, regulatory compliance, and consistency. Our equipment supports shelf-life studies, contamination control, and thermal processing under standardized conditions.</p>
          <div className="">
            <p className="points_btn d-flex gap-2 align-items-center mb-3 py-2 px-3 fw-bold rounded-5" style={{ width: 'max-content' }}>
              <img src="/icons/flax-seeds-100.png" alt="" style={{ width: '30px' }} />Uniform heating for drying and sterilization
            </p>
            <p className="points_btn d-flex gap-2 align-items-center mb-3 py-2 px-3 fw-bold rounded-5" style={{ width: 'max-content' }}>
              <img src="/icons/flax-seeds-100.png" alt="" style={{ width: '30px' }} />Microbial growth chambers for food safety analysis
              </p>
            <p className="points_btn d-flex gap-2 align-items-center mb-3 py-2 px-3 fw-bold rounded-5" style={{ width: 'max-content' }}>
              <img src="/icons/flax-seeds-100.png" alt="" style={{ width: '30px' }} />Used in shelf-life & ingredient stability testing
              </p>
            <p className="points_btn d-flex gap-2 align-items-center mb-3 py-2 px-3 fw-bold rounded-5" style={{ width: 'max-content' }}>
              <img src="/icons/flax-seeds-100.png" alt="" style={{ width: '30px' }} />Easy-to-clean, food-safe interiors</p>
          </div>
          <div className="use_case">
            <p className="fs-5 text-danger fw-bolder">🡆 Use Cases: Shelf-life studies, microbial testing, product quality validation.</p>
          </div>
        </div>
      </section>


    </div>
</>
  )
}

export default IndustriesCont