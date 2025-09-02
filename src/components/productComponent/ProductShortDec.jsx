import PropTypes from "prop-types";

const ProductShortDec = ({prodFullName, productDesc}) => {
    return (
        <>
            <h2>{prodFullName}</h2>
            <p className="mt-3 text-muted custm_p">{productDesc}</p>
        </>
    )
}

export default ProductShortDec

ProductShortDec.propTypes = {
    prodFullName: PropTypes.string.isRequired,
    productDesc: PropTypes.string.isRequired
};