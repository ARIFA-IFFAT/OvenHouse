import { useEffect } from "react";
import AOS from "aos";

const WhyChooseUs = () => {

    useEffect(() => {
      AOS.init({durstion: 1000});
    }, [])
    

    const choosingPoint1 = [
        { id: 1, icon:'icons/icons8-gem-50.png', title: 'High-Quality Products', desc: 'We manufacture durable and reliable products using premium materials and advanced technology.' },
        { id: 2, icon:'icons/icons8-tools-50.png', title: 'Custom Solutions', desc: 'We tailor our products to meet your specific requirements, ensuring maximum satisfaction.' },
        { id: 3, icon:'icons/icons8-user-50.png', title: 'Expertise and Experience', desc: 'With years of industry experience, our skilled team ensures precision and excellence in every product.' },

    ];
    const choosingPoint2 = [
        {id: 1, icon:'icons/icons8-tags-50.png', title: 'Affordable Pricing', desc: 'We offer competitive pricing without compromising on quality, making us the best value for your investment.'},
        {id: 2, icon:'icons/icons8-handshake-50.png', title: 'Customer-Centric Approach', desc: 'Our priority is customer satisfaction, providing exceptional service and prompt support.'},
        {id: 3, icon:'icons/icons8-truck-50.png', title: 'On-Time Delivery', desc: 'We understand the importance of time and ensure your orders are delivered as promised.'},

    ];

    return (
        
            <div className="container my-5">
                <div data-aos="fade-up">
                    <h2 className="text-center blueColorText cust_h2_heading">Why <span className="coloredText">Choose Us</span></h2>
                    <p className="mb-5 text-center custm_p text-muted">Experience unmatched quality, innovation, and customer-centric solutions designed to exceed your expectations.</p>
                </div>
                <div className="d-md-flex gap-1 justify-content-between align-items-center">
                    <div data-aos="fade-right" data-aos-delay= {500}>
                        {choosingPoint1.map((points) => (
                            <div key={points.id} className="d-flex align-items-start gap-3 wsu_box mb-3">
                                <img src={points.icon} alt="" />
                                <div>
                                    <h3 className="custm_h3">{points.title}</h3>
                                    <p className="custm_p text-muted">{points.desc}</p>
                                </div>

                            </div>

                        ))}
                    </div>
                    <div data-aos="zoom-in" data-aos-delay= {700}>
                        <img src="images/why-choose-us.png" alt="why-choose-us" />
                    </div>
                    <div data-aos='fade-left' data-aos-delay={500}>
                        {choosingPoint2.map((points) => (
                            <div key={points.id} className="d-flex align-items-start gap-3 wsu_box mb-3">
                                <img src={points.icon} alt="" />
                                <div>
                                    <h3 className="custm_h3">{points.title}</h3>
                                    <p className="custm_p text-muted">{points.desc}</p>
                                </div>

                            </div>

                        ))}
                    </div>
                </div>

            </div>
        
    )
}

export default WhyChooseUs