import "./hero.css";
import { Link } from "react-router-dom";
import CountDown from "./CountDown/CountDown";
import Count from "./Count/Count";
import synergy from "../../../images/saeee_logo.png";
import gce from "../../../images/gce_salem.png";

const Hero = () => {

      return (
            <div className="hero">
           
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>

            <div className="saeee_box">
                <img src={synergy} alt="saeee" />
            </div>

            <div className="gce_box">
                <img src={gce} alt="saeee" />
            </div>

            <div className="hero__title"> 
                <p>GOVERNMENT COLLEGE OF ENGINEERING, SALEM-11.</p>
                <p>DEPARTMENT OF <br /> ELECTRICAL AND ELECTRONICS ENGINEERING</p>
                <p style={{color:"#d7b249"}}>Synergy</p>
                <Link to="/register"><button className="btn-hover color-3">Register Now</button></Link>
                <CountDown/>
                <Count/>
            </div>
        </div>
        
      );
}
 
export default Hero;