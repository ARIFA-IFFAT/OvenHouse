import { Accordion, AccordionItem } from "@szhsin/react-accordion"
import LocationGoogle from "../contactComponent/LocationGoogle"


const ShowMap = () => {
  return (
    <div className="mt-5" id="showMap">
      <Accordion>
        <AccordionItem header="Click to View Our Location!" >
          <div className="container">
            <LocationGoogle />
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default ShowMap