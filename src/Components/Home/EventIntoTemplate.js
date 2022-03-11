import { Link } from "react-router-dom";
const EventIntroTemplate = ({title,datum}) => {
    return ( 
       <div className="event_intro">
        <h2>{title}</h2>

        <div className="event_intro_container">
            {
                datum.map((data,index)=>{
                    const image = require(`../../images/eventPics/${data.image}.jpg`);
                    return(
                        <Link to="/events">
                            <div className="individual_event" key={index}>
                                <img src={image} alt="tech" />
                                <p>{data.name}</p>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
       </div>
     );
}
 
export default EventIntroTemplate;