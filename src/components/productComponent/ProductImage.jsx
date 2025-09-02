import PropTypes from "prop-types";



const ProductImage = ({ img, productName }) => {
  return (
    <img src={`/${img}`} alt={productName} style={{ maxWidth: "400px" }} />
  )
}

export default ProductImage


ProductImage.propTypes ={
img: PropTypes.string.isRequired,
productName: PropTypes.string.isRequired
};