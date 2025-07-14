import { Link } from "react-router-dom"
import SecondaryButton from "../customButtons/SecondaryButton"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ProductSection = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
}, []);

  return (
    <div className="productSec py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-5 mb-md-0">
            <div className="prod_video text-center p-4 rounded-4 border border-3 border-white shadow" data-aos='fade-right'>
              <video autoPlay muted loop className="rounded">
                <source src="/videos/products_video.mp4" type="video/mp4" ></source>
              </video>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-5 mb-md-0">
            <h1 className="cust_h1_heading mb-3"><span className="blueColorText">Discover. Excellence. </span><span className="coloredText">Innovate.</span></h1>
            <p className="text-muted fs-5 fw-semibold">Innovation & Quality You Can Trust</p>
            <p className="text-muted custm_p">Ready to elevate your business with top-quality equipment? Let&apos;s create something great together — <Link to="/contact" >Connect with Us Today!</Link></p>
            <div className="prodBtnRow" >
              <div className="d-flex gap-3 align-items-center justify-space-between">
                <div className="points_btn d-flex gap-2 align-items-center mb-3 py-2 px-3  rounded-5" style={{ width: 'max-content' }}>
                  <img src="/images/point.png" className="" style={{ width: '20px' }} />
                  <p className="m-0">BOD INCUBATOR</p>
                </div>
                <div className="points_btn d-flex gap-2 align-items-center mb-3 py-2 px-3  rounded-5" style={{ width: 'max-content' }}>
                  <img src="/images/point.png" className="" style={{ width: '20px' }} />
                  <p className="m-0">HOT AIR OVEN</p>
                </div>
              </div>
              <div className="d-flex gap-3 align-items-center justify-space-between">
                <div className="points_btn d-flex gap-2 align-items-center mb-3 py-2 px-3  rounded-5" style={{ width: 'max-content' }}>
                  <img src="/images/point.png" className="" style={{ width: '20px' }} />
                  <p className="m-0">FUME HOOD</p>
                </div>
                <div className="points_btn d-flex gap-2 align-items-center mb-3 py-2 px-3  rounded-5" style={{ width: 'max-content' }}>
                  <img src="/images/point.png" className="" style={{ width: '20px' }} />
                  <p className="m-0">MUFFLE FURNACE</p>
                </div>
              </div>
            </div>

            <div className="prod_btn d-flex gap-3 mt-4">
              <SecondaryButton btnLink="products" buttonName="Explore All Products" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductSection