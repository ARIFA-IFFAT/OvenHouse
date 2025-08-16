import { faAnglesRight,  } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect } from "react"

import AOS from "aos";
import "aos/dist/aos.css";

const OurClientsLogo = () => {

useEffect((()=>{
  AOS.init({duration: 1000});
}),[])



  const clientImg = [
    { id: 1, src: "client-logo/aecs-logo.png" },
    { id: 2, src: "client-logo/KIIT-logo.png" },
    { id: 3, src: "client-logo/MGM-logo.png" },
    { id: 4, src: "client-logo/msk-logo.png" },
    { id: 5, src: "client-logo/psf-logo.png" },
    { id: 6, src: "client-logo/tcrc-logo.png" },
    { id: 7, src: "client-logo/vasu-logo.png" },
    { id: 8, src: "client-logo/smc-logo.png" },

  ]

  return (

    <div className="" id="happyClient">
      <div className="row">
        <div className="col-12 col-md-6" data-aos="fade-right">
          <h2 className="cust_h2_heading"><span className="blueColorText">Happy</span> <span className="coloredText">clients</span></h2>
          <p className="custm_p text-muted">At the heart of our success lies the trust and satisfaction of our clients. We take pride in building lasting relationships by delivering beyond expectations and turning visions into reality. Your happiness drives our growth, and every smile we create inspires us to go further. With every partnership, we aim to empower dreams and craft solutions that leave a lasting impression.</p>          
          <div className="google_review_div mt-4"><a href="https://maps.app.goo.gl/F4dF5zmaABBrmiubA" target="_blank" className="google_review_link">
          <img className="google_review" src="/images/google-review.png" alt="googleRate" /><FontAwesomeIcon className="hidden_icon" icon={faAnglesRight} ></FontAwesomeIcon>
          </a></div>
        </div>
        <div className="col-12 col-md-6" data-aos="fade-left">
          <div className="clients-section">
            <div className="">

              <div className="clients-container ">
                <ul className="clients clients-border">
                  {clientImg.map((logo, index) => (
                    <li className="logo_Item" key={index} >
                      {/* <p>{logo.id}</p> */}
                      <img src={logo.src} className="dancing_logo"/>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>


  )
}

export default OurClientsLogo