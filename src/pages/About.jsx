import { Helmet } from "react-helmet-async";
import AboutCont from "../components/aboutComponent/AboutCont";


const About = () => {
    return (
        <>
            <Helmet>
                <title>About Us | Oven House – Thermomech | ARHCS Bhubaneswar</title>
                <meta name="description" content="Learn about Oven House (ARHCS), manufacturer of high-quality laboratory and commercial kitchen equipment in Bhubaneswar. Discover our vision, mission, and commitment to quality." />
            </Helmet>
            <AboutCont />
        </>

    );
};
export default About;