import { Helmet } from "react-helmet-async"
import ServicesCont from "../components/servicesComponent/ServicesCont"


const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services | Oven House – Thermomech | Lab & Kitchen Equipment Support</title>
        <meta name="description" content="We offer installation, maintenance, and after-sales support for laboratory instruments and kitchen equipment. Oven House ensures reliability and long-term performance." />
      </Helmet>
      <ServicesCont />
    </>

  )
}

export default Services