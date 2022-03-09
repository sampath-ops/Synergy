import NavBar from "../Navbar/navbar";
import EventsGridLayout from "./EventsGridLayout";
import "./events.css";
import techEvents from "./technicalData";
import nonTechEvents from "./nonTechEventsData"; 
const Events = () => {
    return ( 
        <NavBar className="second_nav">
            <div className="events_container">
             <h2>Technical Events</h2>
             <EventsGridLayout EventArray={techEvents}/>
             <h2>Non Technical Events</h2>
             <EventsGridLayout EventArray={nonTechEvents}/>
            </div>
        </NavBar>
     );
}
 
export default Events;