import ServiceHomeCont from "./ServiceHomeCont"


const ServiceHomeSection = () => {
    return (
        <div className="my-5">
            <div className="mb-5 container">
                <h2 className="cust_h2_heading mb-3 text-center"><span className="blueColorText">High-Quality Solutions </span><br></br><span className="coloredText">for Labs & Kitchens</span></h2>
            <p className="text-muted text-center custm_p">We do more than build equipment — we deliver complete solutions, seamless support, and hands-on expertise.</p>
            </div>
            <div className="container mt-5">
                <ServiceHomeCont />
            </div>
        </div>
    )
}

export default ServiceHomeSection