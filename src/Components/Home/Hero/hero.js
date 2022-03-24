import "./hero.css";
import { Link } from "react-router-dom";
import CountDown from "./CountDown/CountDown";
import Count from "./Count/Count";
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
                <CountDown/>
                <Count/>
            </div>
        </div>
        
      );
}
 
export default Hero;