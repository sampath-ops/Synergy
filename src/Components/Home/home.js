import Hero from "./Hero/hero";
import NavBar from "../Navbar/navbar";
const Home = () => {
    return ( 
        <NavBar>   
            <div className="home">
                <Hero/>
            </div>
        </NavBar>
     );
}
 
export default Home;