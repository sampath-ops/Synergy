import EventCard from "./EventCard";
const EventsGridLayout = ({EventArray}) => {

    return ( 
        <div className="events">
        {
            EventArray.map((event,index)=>{
                const image = require(`../../images/eventPics/${event.image}.jpg`);
                return(
                    <EventCard key={index} img={image} id={event.id} text={event.content} Eventname={event.name}/>
                )
            })
        }    
        </div>
        
     );
}
 
export default EventsGridLayout;