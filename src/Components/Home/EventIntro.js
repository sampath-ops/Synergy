import TechnicalData from "../Events/technicalData";
import EventIntroTemplate from "./EventIntoTemplate";
import NonTechnicalData from "../Events/nonTechEventsData";
const EventIntro = () => {

    const techHead = "Technical";
    const nonTechHead = "Non Technical"

    return (  
        <>
            <EventIntroTemplate title={techHead} datum={TechnicalData}/>
            <EventIntroTemplate title={nonTechHead} datum={NonTechnicalData}/>        
        </>
    );
}
 
export default EventIntro;