import SocialMediaIcons from "../socialmediaComponent/SocialMediaIcons"


const Footer_col1 = () => {
    return (
        <div id="quickBrand" className="mb-5 mb-md-0">

            <img src="images/ARHCS_logo_transparent.png" alt="logo" className="whitebsLogo" style={{ width: "100px" }} />
            <h3>THERMO MECH</h3>
            <p className="custm_p text-muted ">Your Trusted Partner in Precision Manufacturing</p>
            <div className="socialLinks">
                <SocialMediaIcons />
            </div>
        </div>
    )
}

export default Footer_col1