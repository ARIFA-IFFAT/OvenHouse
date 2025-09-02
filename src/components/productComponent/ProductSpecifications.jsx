import PropTypes from "prop-types";


const ProductSpecifications = ({specifications}) => {
  return (
    <div className="specfictn">
            <ul>
                {specifications.map((item, index) => (
                    <li key={index} className="text-muted custm_p">{item}</li>
                ))}
            </ul>
        </div>
  )
}

export default ProductSpecifications

ProductSpecifications.propTypes = {
    specifications: PropTypes.arrayOf(PropTypes.string).isRequired
};