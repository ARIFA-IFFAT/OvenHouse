

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const StagesOfDev = () => {

    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    const devStagesDetails = [
        {
            id: "01", title: "Plan & Design",
            logo: "/icons/icons8-design-100.png",
            desc: "Detailed designs and specifications are created, focusing on functionality, safety, and durability. Engineers select materials, design components, and develop prototypes for heating elements, insulation, and control systems."
        },
        {
            id: "02", title: "Source Materials",
            logo: "icons/icons8-procurement-100.png",
            desc: "This stage involves sourcing high-quality raw materials and components such as metal sheets, electronic components, insulation materials, and control panels. Timely procurement ensures production runs smoothly without delays."
        },
        {
            id: "03", title: "Build & Assemble",
            logo: "icons/icons8-fabrication-100.png",
            desc: "Raw materials are processed into components through cutting, welding, molding, and shaping. Heating elements and systems are assembled, followed by integrating all parts into the final product, like hot air ovens or BOD incubators."
        },
        {
            id: "04", title: "Test & Deliver",
            logo: "icons/icons8-packaging-100.png",
            desc: "After assembly, products undergo rigorous testing for performance, safety, and quality, including temperature regulation and durability checks. Once approved, they are finished with painting or coating and carefully packaged for shipment."
        },
    ]
    return (
        <>
            <div className='container' id='productionStage' data-aos="fade-up">
                <h2 className="cust_h2_heading">Production Stages</h2>
                <p className="text-white custm_p mb-5">From concept to completion, we ensure precision, quality, and efficiency at every step of the manufacturing process.</p>
            </div>
            <div className="container d-md-flex gap-5 mb-5">
                {devStagesDetails.map((stage, index) => (
                    <div key={stage.id} className="p-3 stage_box" data-aos="fade-up" data-aos-delay={index * 200}>
                        <div className='topCont'>
                            <img src={stage.logo} alt="stageIcon" className="stageIcon" style={{width: '50px'}} />
                            <h3 className='py-3 coloredText mt-3'>{stage.title}</h3>
                            <p className='custm_p'>{stage.desc}</p>                            
                        </div>

                    </div>
                ))}
            </div>
        </>
    )
}

export default StagesOfDev