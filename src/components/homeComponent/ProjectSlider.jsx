

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const projectData = [
  {
    title: "Zinio Office",
    image: "/images/zinio.jpg",
  },
  {
    title: "Tourism Malaysia",
    image: "/images/tourism.jpg",
  },
  {
    title: "Truman",
    image: "/images/truman.jpg",
  },
  {
    title: "TechHub",
    image: "/images/techhub.jpg",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const ProjectSlider = () => {
  return (
    <div className="project-slider px-4 py-5 bg-light text-center">
      <h2 className="mb-4">A Selection of Signature Projects</h2>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        swipeable
        draggable
        showDots
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {projectData.map((project, index) => (
          <div key={index} className="card border-0 shadow-sm">
            <img
              src={project.image}
              alt={project.title}
              className="card-img-top"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProjectSlider;
