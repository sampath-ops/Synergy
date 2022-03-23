import "./ContactInfo.css";
import phone from "../../../images/Contact/ContactInfo/phone.svg";
import email from "../../../images/Contact/ContactInfo/email.svg";
import location from "../../../images/Contact/ContactInfo/location.svg";
const ContactInfo = () => {

    const icons = ["facebook","insta","mail"];

    return ( 
        <div className="contact_info">
            <div className="info_title_desc">
                <h2>Contact Information</h2>
                <p>Fill up the form and our team will get back to you within 24 hours</p>
            </div>

            <div className="contact_details_container">
                <div className="contact_details">
                    <img src={phone} alt="phone" />
                    <span>+91 9361924485</span>
                </div>
                <div className="contact_details">
                    <img src={email} alt="phone" />
                    <span>gcesynergy@gmail.com</span>
                </div>
                <div className="contact_details">
                    <img src={location} alt="phone" />
                    <span>Gce Karuppur, Salem</span>
                </div>
            </div>

            <div className="social_icons contact_social_icons">
                    {
                        icons.map((icon,index)=>{
                            const image = require(`../../../images/Contact/Social/${icon}.svg`);
                            return(
                                <a href="#home" target="_blank" rel="norefferer" key={index} className="contact_social">
                                    <img src={image}  alt={icon} />
                                </a>
                            )
                        })
                    }
            </div>

        </div>
     );
}
 
export default ContactInfo;