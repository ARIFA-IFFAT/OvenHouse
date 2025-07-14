import BrandName from "./BrandName";
import CompanyOverview from "./CompanyOverview";
import HistoryMilestone from "./HistoryMilestone";
import OurClientsLogo from "./OurClientsLogo";
import ScrollWatcher from "./ScrollWatcher";
import CompanyRatings from "./CompanyRatings"

const AboutOurCompany = () => {
  return (
    <>
      <div className="about_cust_bg">
        <div className="container">
          <div className="height_in_banner"></div>
          <p className="text-white text-center mb-0 ">Innovation and quality you can trust</p>
          <h1 className="text-center text-white bannerHeading" style={{ fontSize: '50px' }}>ARHCS</h1>
          <div className="height_in_banner"></div>
        </div>
      </div>
      <ScrollWatcher />      
      <div className="container my-5">
        <CompanyOverview />
      </div>
      <div className="cntFormBG py-5">
        <div className="container">
          <CompanyRatings />
        </div>
      </div>
      <div className="container my-5">
        <BrandName />
      </div>
      <div className="container my-5 " >
        <HistoryMilestone />
      </div>
      <div className="container my-5">
        <OurClientsLogo />
      </div>


    </>
  )
}

export default AboutOurCompany