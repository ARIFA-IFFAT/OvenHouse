
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
      {ProductDetails.map((product) => (

        <div key={product.id} className="col-12 col-md-3  mb-5 prod_col"  >
          <div className="text-center prodBox" data-aos='fade-up'>
            <Link to={`/product/${product.slug}`}>            
              <img src={product.img} alt="" className="prod_img" style={{ width: '100%' }} />
            </Link>
            <div className="eachProdBG my-3 ">
              <Link to={`/product/${product.slug}`}>
                <h6 className="mb-3">{product.prodName}</h6>
              </Link>
              <p>{product.prodDesc}</p>
              <div className="my-2">
              <Link to="/contact" target="_blank" className="proBtn1 py-1 px-2 rounded text-decoration-none" style={{width: '100%', display: 'inline-block', border: '1px solid #003f7d', color: '#003f7d'}}>Get a quote <FontAwesomeIcon icon={faArrowAltCircleDown} className='ms-2' /></Link>
              </div>
              <div className="">
              <a href="pdf/Catalogue-pdf.pdf" target="_blank" rel="noopener noreferrer" className="proBtn2 text-white py-1 px-2 border border-1 rounded text-decoration-none" style={{width: '100%', display: 'inline-block', background: '#003f7d'}}>Catalogue <FontAwesomeIcon icon={faArrowAltCircleDown} className='ms-2' /></a>
              </div>
            </div>

          </div>

        </div>
      ))}
    </div>
  )
}

export default ProductList