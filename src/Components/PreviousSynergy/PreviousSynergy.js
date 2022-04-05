import NavBar from "../Navbar/navbar";
import PreviousHero from "./PreviousHero";
import MomentCards from "./MomentCards";
import symbol from "../../images/Memories/synergy_symbol.jpg";
import group1 from "../../images/Memories/pic12.jpg";
import "./PreviousSynergy.css";
const PreviousSynergy = () => {
    return ( 
        <NavBar className="second_nav">
            <div className="previous_synergy">
            `   <MomentCards/>
                <h2>Synergy 2020 Gallery</h2>
                <div className="grid_layout">
                    <PreviousHero/> 
                    <div className="side_layout">
                        <img src={symbol} alt="synergy" />
                        <p>The strongest logos tell simple stories.</p>
                        <img src={group1} alt="group" />
                        <p>You guys are my human diary...</p>
                    </div> 
                </div>    
            </div>
        </NavBar>
     );
}
 
export default PreviousSynergy;