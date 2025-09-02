import { Link, useParams } from "react-router-dom";
import { faArrowAltCircleDown, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ProductDetails from "../../data/ProductDetails";
import ProductImage from "./ProductImage";
import ProductShortDec from "./ProductShortDec";
import ProductHighlight from "./ProductHighlight";
import ProdShareIcons from "./ProdShareIcons";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProductSpecifications from "./ProductSpecifications";

const ProductPage = () => {
    const { slug } = useParams();
    const product = ProductDetails.find((p) => p.slug === slug);

    if (!product) {
        return <h2 className="text-center my-5">Product not found</h2>;
    }

    return (
        <div className="container ">
            <div className="row">
                <div style={{ height: '60px' }}></div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 my-5">
                    {/* product img  */}
                    <ProductImage img={product.img} productName={product.prodName} />
                </div>
                <div className="col-12 col-md-7 my-5">
                    {/* product details  */}
                    <ProductShortDec prodFullName={product.prodName} productDesc={product.prodDesc} />
                    {/* product highlights  */}
                    <ProductHighlight highlights={product.keyHighlights} />
                    {/* product btns  */}
                    <div className="d-flex gap-2">
                        <Link to="/contact" target="_blank" className="proBtn1 py-1 px-2 rounded text-decoration-none" style={{ border: '1px solid #003f7d', color: '#003f7d' }}>Get a quote <FontAwesomeIcon icon={faArrowAltCircleRight} className='ms-2' /></Link>
                        <a href="pdf/Catalogue-pdf.pdf" target="_blank" rel="noopener noreferrer" className="proBtn2 text-white py-1 px-2 border border-1 rounded text-decoration-none" style={{ background: '#003f7d' }}>Catalogue <FontAwesomeIcon icon={faArrowAltCircleDown} className='ms-2' /></a>
                    </div>
                    {/* share icons  */}
                    <ProdShareIcons
                        wplink={`https://api.whatsapp.com/send?text=${encodeURIComponent(window.location.origin + '/product/' + product.slug)}`}
                        fbLink={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin + '/product/' + product.slug)}`}
                        mailLink={`mailto:?subject=Check out this product&body=${encodeURIComponent('Hey, I found this product: ' + window.location.origin + '/product/' + product.slug)}`} />
                </div>
            </div>
            <div className="row">
                {/* overview & specification tab  */}

                <div className="specifTabs">
                    <Tabs>
                        <TabList>
                            <Tab>Specifications</Tab>
                            <Tab>Review</Tab>
                        </TabList>

                        <TabPanel>
                            <ProductSpecifications specifications={product.specifications} />
                        </TabPanel>
                        <TabPanel>
                            <div className="row">
                                <div className="col-12 col-md-3">
                                    <img src="images/Review_scan_ARhcs.jpg" alt="reviewscanimg" />
                                </div>
                                <div className="col-12 col-md-9">
                                    <p className="text-muted custm_P">
                                        Hello!

                                        <br/>We hope you&apos;re happy with our services.
                                        Your feedback is very important to us, and we&apos;d greatly appreciate it if you could leave a review on our Google page. It only takes a minute and helps us serve you better!

                                        <br/><strong>SCAN IT to leave a review</strong>

                                        <br/>Thank you for your support! 🌸
                                        
                                    </p>
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
