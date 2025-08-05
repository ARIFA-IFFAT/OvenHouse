
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import ProductDetails from "../../data/ProductDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ProductList = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 });

  }, [])




  return (
    <div className="row">
      {ProductDetails.map((product, index) => (

        <div key={product.id} className="col-12 col-md-3  mb-5 prod_col"  >
          <div className="text-center prodBox" data-aos='fade-up' data-aos-duration={index * 250}>
            <img src={product.img} alt="" className="prod_img" style={{ width: '100%' }} />
            <div className="eachProdBG my-3 ">
              <h6 className="mb-3">{product.prodName}</h6>
              <p>{product.prodDesc}</p>
              <div className="my-3">
              <Link to="/contact" target="_blank" className=" py-1 px-2 border border-1 rounded text-decoration-none" style={{width: '100%', display: 'inline-block'}}>Get a quote <FontAwesomeIcon icon={faArrowAltCircleDown} className='ms-2' /></Link>
              </div>
              <div className="">
              <a href="pdf/Catalogue-pdf.pdf" target="_blank" rel="noopener noreferrer" className="text-white bg-dark py-1 px-2 border border-1 rounded text-decoration-none" style={{width: '100%', display: 'inline-block'}}>Catalogue <FontAwesomeIcon icon={faArrowAltCircleDown} className='ms-2' /></a>
              </div>
            </div>

          </div>

        </div>
      ))}
    </div>
  )
}

export default ProductList