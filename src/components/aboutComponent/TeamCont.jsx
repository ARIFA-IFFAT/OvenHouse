import TeamImage from "./TeamImage";
import AOS from 'aos';
import 'aos/dist/aos.css';


const TeamCont = () => {

    AOS.init({duration: '2000'});

    return (
            <div className="teamBG">
                <div className="container py-5 m-auto">
                    <div className="text-center" data-aos='fade-up' >
                        <h2 className="cust_h2_heading text-white">Meet Our Team</h2>
                        <p className="custm_P text-white">
                            At the heart of our success is a dedicated team of skilled professionals who bring expertise, innovation, and passion to everything we do. Each member of our team plays a vital role in ensuring the highest quality of our products and exceptional service to our clients. Together, we work towards a shared vision of excellence and customer satisfaction, committed to delivering solutions you can trust.
                        </p>
                    </div>
                    <div className="my-5" data-aos="fade-up">
                    <TeamImage/>
                    </div>
                </div>
            </div>
    );
}
export default TeamCont;