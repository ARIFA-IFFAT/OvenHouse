import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer_col1 from "./Footer_col1.jsx";
import Footer_col2 from "./Footer_col2.jsx";
import Footer_col3 from "./Footer_col3.jsx";
import Footer_col4 from "./Footer_col4.jsx";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const FooterCont = () => {
    return (
        <footer className="productSec ">
            <div id="site_footer" className="container py-5">
                <div className="row">
                    <div className="col-md-3"><Footer_col1/></div>
                    <div className="col-md-3"><Footer_col2/></div>
                    <div className="col-md-3"><Footer_col3/></div>
                    <div className="col-md-3"><Footer_col4/></div>
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