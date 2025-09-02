import PropTypes from "prop-types";


const ProductHighlight = ({ highlights }) => {
    return (
        <div className="highlite">
            <p className="text-dark custm_p">Key Highlights:</p>
            <ul>
                {highlights.map((item, index) => (
                    <li key={index} className="text-muted custm_p">{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ProductHighlight

ProductHighlight.propTypes = {
    highlights: PropTypes.arrayOf(PropTypes.string).isRequired
};