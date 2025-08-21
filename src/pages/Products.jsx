import { Helmet } from "react-helmet-async";
import ProductCont from "../components/productComponent/ProductCont";


const Products = () =>{
    return(
        <>
        <Helmet>
        <title>Products | Oven House – Thermomech | Lab & Kitchen Equipment Manufacturer</title>
        <meta name="description" content="Browse our wide range of products including hot air ovens, incubators, hot plates, curing tanks, and commercial kitchen equipment. Built with precision and durability." />
      </Helmet>
        <ProductCont/>
        </>
        
    );
};
export default Products;