import { Helmet } from "react-helmet-async"
import IndustriesCont from "../components/IndustriesComponent/IndustriesCont"

const Industries = () => {
  return (
    <>
    <Helmet>
        <title>Industries We Serve | Oven House – Thermomech | ARHCS Bhubaneswar</title>
        <meta name="description" content="Oven House caters to diverse industries including microbiology labs, food R&D units, hospitals, and commercial kitchens. Trusted by clients across Odisha and beyond." />
      </Helmet>
    <IndustriesCont/>
    </>
  )
}

export default Industries