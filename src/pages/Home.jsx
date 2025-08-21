
import { Helmet } from "react-helmet-async";
import HomeCont from "../components/homeComponent/HomeCont";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>About Us | Oven House – Thermomech | ARHCS Bhubaneswar</title>
                <meta name="description" content="Oven House (ARHCS), under the Thermomech brand, is a leading manufacturer of laboratory instruments, commercial kitchen equipment, hot air ovens, incubators, curing tanks, and more in Bhubaneswar, Odisha." />
            </Helmet>
            <HomeCont />
        </>
    );
}
export default Home;