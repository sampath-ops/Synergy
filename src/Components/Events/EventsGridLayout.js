import EventCard from "./EventCard";
const EventsGridLayout = ({EventArray}) => {

    return ( 
        <div className="events">
        {
            EventArray.map((event,index)=>{
                const image = require(`../../images/eventPics/${event.image}.jpg`);
                return(
                    <EventCard key={index} img={image} text={event.content}/>
                )
            })
        }    
        </div>
        
     );
}
 
export default EventsGridLayout;