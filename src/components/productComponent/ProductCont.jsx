

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import ProductList from "./ProductList";


const ProductCont = () => {

  useEffect(() => {
   AOS.init({duration: 1500});
    
  }, [])
  

 
  return (
    <>
      <div className="prod_cust_bg">
        <div className="container">
          <div className="height_in_banner"></div>
          <h1 className="text-center text-white" style={{ fontSize: '50px' }}>Our products</h1>
          <div className="height_in_banner"></div>
        </div>
      </div>
      <div className="my-5 container">
        <h1 className="mb-3 text-center cust_h1_heading" data-aos="fade-up" ><span className="coloredText">Innovation</span> <span className="blueColorText">and </span><span className="coloredText">quality </span><br></br><span className="blueColorText">you can rely on</span></h1>
        <p className="text-muted custm_p text-center" >Explore our diverse range of high-quality laboratory instruments and commercial kitchen equipment, designed to deliver unmatched performance, durability, and innovation. Whether you need reliable tools for critical research or efficient solutions for your kitchen, our products are tailored to meet your specific requirements. Experience the perfect blend of technology and craftsmanship with our trusted offerings.</p>
      </div>

      <div className="container product_list" >
        <ProductList/>
      </div>
    </>
  )
}

export default ProductCont
