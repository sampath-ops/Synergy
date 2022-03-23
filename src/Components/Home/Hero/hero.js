import "./hero.css";
import { Link } from "react-router-dom";
import CountDown from "./CountDown/CountDown";
// import Count from "./Count/Count";
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
                {/* <Count/> */}
                <CountDown/>
            </div>
            
        </div>
        
      );

    // return ( 
    //     <div className="hero">
            
    //         {/* <div className="cube"></div>
    //         <div className="cube"></div>
    //         <div className="cube"></div>
    //         <div className="cube"></div>
    //         <div className="cube"></div>
    //         <div className="cube"></div> */}
            
    //         <div className="hero__title"> 
    //             <p>Synergy</p>
              
    //             {/* <p>Synergy 22.0 is an inter college technical and non- technical carnival which is organised by the society of electrical and electronics engineering of GCE,SALEM. It takes you on a complete ride to electrical extravaganza. It provides the perfect platform to expose the technical acumen and compete with peers from various institutes. Above all synergy serves well in synchronizing the energy of electrical engineers to light up the world. The destined date is March ....We cordially welcome the students from various colleges to expose your skills.</p> */}

    //             <Link to="/register"><button className="btn-hover color-3">Register Now</button></Link>
    //         </div>
            
    //     </div>
    //  );
}
 
export default Hero;