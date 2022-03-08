import "./hero.css";
import { Link } from "react-router-dom";
const Hero = () => {
    return ( 
        <div className="hero">
            
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="hero__title">
                <p>Synergy</p>
                <Link to="/register"><button className="btn-hover color-3">Register Now</button></Link>
            </div>
            
        </div>
     );
}
 
export default Hero;