import NavBar from "../Navbar/navbar";
import PreviousHero from "./PreviousHero";
import MomentCards from "./MomentCards";
const PreviousSynergy = () => {
    return ( 
        <NavBar className="second_nav">
            <div className="previous_synergy">
                <PreviousHero/>
                <MomentCards/>
            </div>
        </NavBar>
     );
}
 
export default PreviousSynergy;