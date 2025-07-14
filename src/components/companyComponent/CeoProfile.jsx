import SocialMediaIcons from "../socialmediaComponent/SocialMediaIcons"

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CeoProfile = () => {

    useEffect((() => {
        AOS.init({ duration: 1000 })
    }), [])

    return (
        <>
            <div className="profileBox leftgoldBorder">
                <div className="profileCrd ">
                    <div id="profile">
                        <img src="images/profilepic.png" className="mb-4 rounded-circle profile_" alt="Abdul Rajack" />
                    </div>
                    <div className="profile_cont">

                        <h3 className="">Abdul Rajack</h3>
                        <p className="custm_p text-muted">CEO, ARHCS, Bhubaneswar, Odisha</p>
                        <div className="prof_icon">
                        <SocialMediaIcons />
                    </div>
                    </div>
                    

                </div>
            </div>


        </>
    )
}

export default CeoProfile