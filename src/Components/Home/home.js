import Hero from "./Hero/hero";
import NavBar from "../Navbar/navbar";
import HomeIntro from "./HomeIntro";
import "./Home.css";
import EventIntro from "./EventIntro";
const Home = () => {
    return ( 
        <NavBar>   
            <div className="home">
                <Hero/>
                <HomeIntro/>
                <EventIntro/>
            </div>
        </NavBar>
     );
}
 
export default Home;