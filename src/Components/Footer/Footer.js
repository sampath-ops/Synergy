import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {

    const icons = [
        {
            name:"facebook",
            link:"#"
        },
        {
            name:"insta",
            link:"https://instagram.com/synergy_22.0?utm_medium=copy_link"
        },
        {
            name:"mail",
            link:"mailto:gcesynergy2022@gmail.com"
        }
    ];

    return ( 
        <div className="footer">
            <div className="logo_container">
                <h2>Synergy</h2>
                <p>Synergy 22.0 is organised by the <b>S</b>ociety for the <b>A</b>dvancement of <b>E</b>lectrical and <b>E</b>lectronics <b>E</b>ngineering (SAEEE).</p>
            </div>
            <ul className="link_part">
                <Link to="/"><li>Home</li></Link>
                <Link to="/events"><li>Events</li></Link>
                <Link to="/previous-synergy"><li>Memories</li></Link>  
            </ul>
            <ul className="link_part">
                <Link to="/register"><li>Register</li></Link>
                <Link to="/contact-us"><li>Contact</li></Link>
                <div className="social_icons">
                    {
                        icons.map((icon,index)=>{
                            const image = require(`../../images/Footer/${icon.name}.svg`);
                            return(
                                <a href={icon.link} target="_blank" rel="noreferrer" key={index}>
                                    <img src={image}  alt={icon.name} />
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