import Slider from 'react-slick';
import propTypes from 'prop-types';


const AbtCarousel = ({ images }) => {

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
};

   

    return (
            <Slider {...settings}>
                {images.map((image) => (
                    <div key={image.id}>
                        <img src={image.src} alt={image.alt} style={{ width: '100%', height: 'auto' }} />
                    </div>
                ))                    
                }
            </Slider>
    );
};

AbtCarousel.propTypes = {
    images: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            src: propTypes.string.isRequired,
            alt: propTypes.string.isRequired,
        })
    ).isRequired,
};


export default AbtCarousel;