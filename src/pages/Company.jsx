import { Helmet } from "react-helmet-async"
import CompanyCont from "../components/companyComponent/CompanyCont"


const Company = () => {
  return (
    <>
      <Helmet>
        <title>Our Company | Oven House – Thermomech Brand | ARHCS Bhubaneswar</title>
        <meta name="description" content="Oven House, operating under ARHCS with the Thermomech brand, manufactures innovative lab and kitchen instruments in Bhubaneswar. Explore our journey and core values." />
      </Helmet>
      <CompanyCont />
    </>


  )
}

export default Company