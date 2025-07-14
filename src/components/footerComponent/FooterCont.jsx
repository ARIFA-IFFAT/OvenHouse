import Footer_col1 from "./Footer_col1.jsx";
import Footer_col2 from "./Footer_col2.jsx";
import Footer_col3 from "./Footer_col3.jsx";
import Footer_col4 from "./Footer_col4.jsx";

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
        </footer>
    );
}
export default FooterCont;