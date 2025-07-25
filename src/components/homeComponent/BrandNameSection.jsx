import PrimaryButton from "../customButtons/PrimaryButton"
import SecondaryButton from "../customButtons/SecondaryButton"
import AnimatedText from "./AnimatedText"
// import CircularProgressBar from "./CircularProgressBar"


const BrandNameSection = () => {
    return (
        <div className="brndNmBG">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-7">
                        <div className="brndNameCont py-5 text-center">
                            <img src="images/ARHCS_logo_transparent.png" alt="logo" className="whitebsLogo py-3 " style={{ width: "100px" }} />
                            <div className="brndNm">
                            {/* <h1 className="cust_h1_heading blueColorText">THERMO-MECH</h1> */}
                                <AnimatedText text="THERMO-MECH" />
                            </div>
                            <p className="custm_p text-muted fw-semibold fs-5">Our signature brand, delivering innovation, reliability, and excellence in every product.</p>
                            <div className="mt-5 d-flex gap-3 justify-content-center">
                                <SecondaryButton buttonName="Talk to us" btnLink="contact" />
                                <PrimaryButton buttonName="Explore" btnLink="company" />
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        <img src="/images/capsule_product.png" className="text-center w-100" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default BrandNameSection