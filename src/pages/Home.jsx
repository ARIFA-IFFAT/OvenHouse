
import { Helmet } from "react-helmet-async";
import HomeCont from "../components/homeComponent/HomeCont";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Thermomech | Laboratory Instruments & Commercial Kitchen Equipment</title>
                <meta name="description" content="Manufacturer of hot air ovens, BOD incubators, hot plates, curing tanks, and lab instruments. Thermomech delivers reliable, high-quality equipment for industries." />
            </Helmet>
            <HomeCont />
        </>
    );
}
export default Home;