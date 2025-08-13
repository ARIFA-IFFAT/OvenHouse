import BrandName from "./BrandName";
import CompanyOverview from "./CompanyOverview";
import HistoryMilestone from "./HistoryMilestone";
import OurClientsLogo from "./OurClientsLogo";
import ScrollWatcher from "./ScrollWatcher";
import CompanyRatings from "./CompanyRatings"

const AboutOurCompany = () => {
  return (
    <>
    <div className='bannerImg'>
                <div className="bnnrSpc"></div>
                    <h1 className="cust_h1_heading text-center"><span className='blueColorText'>Thermomech - <br></br>the Future of Labs</span></h1>
                    <p className='custm_p text-center text-muted mb-3'>From laboratories to industries, delivering reliable, innovative solutions for your toughest challenges.</p>
                <div className="d-flex gap-2 justify-content-center">
                  <div className="blueline"></div>
                  <div className="yellowline"></div>
                </div>
                <div className="bnnrSpc"></div>           
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