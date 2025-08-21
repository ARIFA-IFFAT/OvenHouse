import { Helmet } from "react-helmet-async";
import ContactCont from "../components/contactComponent/ContactCont";


const Contact = () =>{
    return(
        <>
        <Helmet>
        <title>Contact Us | Oven House – Thermomech | ARHCS Bhubaneswar</title>
        <meta name="description" content="Get in touch with Oven House (Thermomech), located at Kesura, Puri Road, Bhubaneswar. Reach us for product inquiries, support, and partnership opportunities." />
      </Helmet>
        <ContactCont/>
        </>
        
    );
};
export default Contact;