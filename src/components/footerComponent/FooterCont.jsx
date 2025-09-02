import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterCol1 from "./FooterCol1.jsx";
import FooterCol2 from "./FooterCol2.jsx";
import FooterCol3 from "./FooterCol3.jsx";
import FooterCol4 from "./FooterCol4.jsx";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const FooterCont = () => {
    return (
        <footer className="productSec ">
            <div id="site_footer" className="container py-5">
                <div className="row">
                    <div className="col-md-3"><FooterCol1/></div>
                    <div className="col-md-3"><FooterCol2/></div>
                    <div className="col-md-3"><FooterCol3/></div>
                    <div className="col-md-3"><FooterCol4/></div>
                </div>
                
            </div>
            <div className="container text-center border-top">
                <div className="d-md-flex align-items-center justify-content-between my-3 ">
                        <div className="copy_right_sec">
                            <p className="custm_p text-muted ">© 2025 ARHCS | Oven House | Thermomech. All Rights Reserved.</p>
                            
                        </div>                      
                        
                        <div className="callUsNow">
                            <a href="tel:09439856860" target="_blank"><h3 className="custm_h3 blueColorText"><FontAwesomeIcon icon={faPhone}/> Call Us Now 094398 56860</h3></a>
                        </div>
                    
                </div>
            </div>
        </footer>
    );
}
export default FooterCont;