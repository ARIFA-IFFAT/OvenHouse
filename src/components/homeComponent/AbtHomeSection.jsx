import SecondaryButton from "../customButtons/SecondaryButton"

const AbtHomeSection = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12 col-md-6">
                    <h1 className="cust_h1_heading mb-3"><span className="blueColorText">A Legacy of </span><span className="coloredText">Excellence</span></h1>
                </div>
                <div className="col-12 col-md-6">
                    <p className="text-muted custm_p">At ARHCS, we specialize in crafting high-quality laboratory and kitchen equipment. Guided by innovation and precision, we aim to empower industries with reliable tools and exceptional service.</p>
                    <p className="text-muted custm_p">We&apos;re here to provide the solutions you need—whether it&apos;s laboratory equipment, commercial kitchen tools, or custom manufacturing. Need assistance? Our team is ready to help.</p>

                    <div className="my-5">
                        <SecondaryButton buttonName="Contact us" btnLink="contact"/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AbtHomeSection