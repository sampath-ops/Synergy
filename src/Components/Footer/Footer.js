import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {

    const icons = ["facebook","insta","linkedin","mail","twitter"];

    return ( 
        <div className="footer">
            <div className="logo_container">
                <h2>Synergy</h2>
                <p>Synergy 22.0 is organised by the society of  <b>E</b>lectrical and <b>E</b>lectronics <b>E</b>ngineering.</p>
            </div>
            <ul className="link_part">
                <Link to="/"><li>Home</li></Link>
                <Link to="/events"><li>Events</li></Link>
                <Link to="/previous-synergy"><li>Memory</li></Link>  
            </ul>
            <ul className="link_part">
                <Link to="register"><li>Register</li></Link>
                <Link to="contact-us"><li>Contact</li></Link>
                <div className="social_icons">
                    {
                        icons.map((icon,index)=>{
                            const image = require(`../../images/Footer/${icon}.svg`);
                            return(
                                <a href="#home" target="_blank" rel="norefferer" key={index}>
                                    <img src={image}  alt={icon} />
                                </a>
                            )
                        })
                    }
                </div>
            </ul>

        </div>
     );
}
 
export default Footer;