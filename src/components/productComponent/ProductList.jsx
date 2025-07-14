
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import TernaryButton from "../customButtons/TernaryButton";

const ProductList = () => {

      useEffect(() => {
       AOS.init({duration: 1500});
        
      }, [])

    const productDetails = [
        { id: 1, prodName: 'TM-5 : BOD INCUBATOR', img: 'images/product1.png', 
          prodDesc: 'A BOD Incubator is specialized laboratory equipment used to maintain controlled conditions like temperature and humidity. It is primarily utilized in microbiology, research labs, and industries for testing the oxygen demand of samples over a specific period.' },
        { id: 2, prodName: 'TM-10 :  FUME HOOD', img: 'images/product2.png', prodDesc: 'A fume hood is a ventilated enclosure in which gases, vapors and fumes are captured and removed from the work area. An exhaust fan situated on the top of the laboratory building pulls air and airborne contaminants through connected ductwork and exhausts them to the atmosphere.' },
        
      
      ];


  return (
    <div className="row">
          {productDetails.map((product,index) => (

            <div key={product.id} className="col-12  mb-5 prod_col"  >
              <div className="d-md-flex align-flex-start prodBox" data-aos='fade-up' data-aos-duration={index*250}>
                <img src={product.img} className="prod_img" />
                <div className="eachProdBG p-3 text-white">
                  <h3 className="mb-4">{product.prodName}</h3>
                  <p>{product.prodDesc}</p>
                  <TernaryButton btnLink="#" buttonName="Get a Quote"/>
                  {/* <a href="pdf/Catalogue-pdf.pdf" target="_blank" className="text-white py-1 px-2 border border-1 rounded my-5 text-decoration-none">Catalogue <FontAwesomeIcon icon={faArrowAltCircleDown} className='ms-2'/></a> */}
                </div>
                <div>                
                <img className="floatLogo" src="images/logo_rndBordr.png" alt="CoLogo" style={{width: '70px'}} />
              </div>
              </div>
              
            </div>
          ))}
        </div>
  )
}

export default ProductList