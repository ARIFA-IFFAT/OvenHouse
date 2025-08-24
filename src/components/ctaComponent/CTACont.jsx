
import PrimaryButton from "../customButtons/PrimaryButton";


const CTACont = () => {
    return (
        <div className="my-5 container" id="ctaSection">
                <div className="ctaBackgrnd ">
                    <div className="container text-center py-5">
                        <h2 className="cust_h2_heading"><span className="blueColorText">Building the Future of </span> <span className="coloredText">Laboratory & Industrial Solutions </span></h2>
                        <p className="text-muted custm_p">High-performance ovens, incubators, and equipment—crafted with precision, trusted by industries worldwide.</p>
                        <div className=" my-4">
                        <PrimaryButton buttonName="Contact Us Now" btnLink="contact" />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default CTACont