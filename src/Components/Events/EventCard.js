import { Link } from "react-router-dom";
const EventCard = (props) => {
    return (  
        <div className="event_card">
            <img src={props.img} alt="tech-events" /> 
            <p className="name_event">{props.Eventname}</p>
            <p>{props.text}</p> 

            {props.Eventname === "Project Expo" || props.Eventname === "Paper conferal" ? <Link to={`/events/${props.Eventname.split(" ")[0]}`} className="rules">Rules &gt;</Link> : ""}

            <Link to="/register"><button className="participate">Participate</button></Link>
        </div>
    );
}
 
export default EventCard;