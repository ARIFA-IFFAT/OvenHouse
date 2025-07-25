import AbtHomeSection from "./AbtHomeSection"
import BrandNameSection from "./BrandNameSection"
import Carousel from "./Carousel"
import ContactHomeSection from "./ContactHomeSection"
import HeroSection from "./HeroSection"
import ProductSection from "./ProductSection"
import ServiceHomeSection from "./ServiceHomeSection"
import ShowMap from "./ShowMap"
import IndustrySection from "./IndustrySection"
import Testimonials from "./Testimonials"
import RecentProjectSection from "./RecentProjectSection"
import FaqSection from "./FaqSection"

const HomeCont = () => {
    return (
        <>
            <div>
                <HeroSection />
            </div>
            <div>
                <AbtHomeSection />
            </div>
            <div id="clientLogo">
                <Carousel />
            </div>
            <div>
                <ServiceHomeSection/>
            </div>
            <div>
                <BrandNameSection/>
            </div>
            <div>
                <ProductSection/>
            </div>
            <div>
                <IndustrySection/>
            </div>
            <div>
                <RecentProjectSection/>
            </div>
            <div>
                <ShowMap/>
            </div>
            <div>
                <ContactHomeSection/>
            </div>
            <div>
                <Testimonials/>
            </div>
            <div>
                <FaqSection/>
            </div>
           
        </>
    )
}

export default HomeCont