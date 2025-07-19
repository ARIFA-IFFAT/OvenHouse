import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const projectData = [
  {
    title: "Zinio Office",
    image: "/images/project1.png",
  },
  {
    title: "Tourism Malaysia",
    image: "/images/project2.png",
  },
  {
    title: "Truman",
    image: "/images/project3.png",
  },
  {
    title: "TechHub",
    image: "/images/project4.png",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const ProjectSlider = () => {
  return (
    <div className="proj_slider my-5">
      
      <div className="container">
        <Carousel
          responsive={responsive}
          infinite
          // autoPlay
          swipeable
          draggable
          showDots
          arrows = {false}
          dotListClass="custom-dot-list-style text-center"
          itemClass="carousel-item-padding-40-px px-2"
        >
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-sm rounded-4 overflow-hidden"
              // style={{ height: "350px" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-100"
                style={{ height: "320px", objectFit: "cover" }}
              />
              <div className="p-3">
                <h5 className="text-center">{project.title}</h5>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProjectSlider;
