import { useParams } from "react-router-dom";
import ProductDetails from "../../data/ProductDetails";

const ProductPage = () => {
    const { slug } = useParams();
    const product = ProductDetails.find((p) => p.slug === slug);

    if (!product) {
        return <h2 className="text-center my-5">Product not found</h2>;
    }

    return (
        <div className="container ">
            <div className="row">
                <div className="col-12 col-md-6 my-5">
                    <img src={`/${product.img}`} alt={product.prodName} style={{ maxWidth: "400px" }} />
                </div>
                <div className="col-12 col-md-6 my-5">
                    <h2>{product.prodName}</h2>
            <p className="mt-3">{product.prodDesc}</p>
                
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
