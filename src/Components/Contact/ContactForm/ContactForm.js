import "./ContactForm.css";
const ContactForm = () => {
    return (  
       <form>
            <div className="contact_form">
                <div className="input_container">
                    <label className="contact_user">FirstName</label>
                    <input type="text" />
                </div>
                <div className="input_container">
                    <label className="contact_user">LastName</label>
                    <input type="text" />
                </div>
                <div className="input_container">
                    <label className="contact_user">Mail</label>
                    <input type="mail" />
                </div>
                <div className="input_container">
                    <label className="contact_user">Phone</label>
                    <input type="tel" />
                </div>
                <div className="input_container">
                    <label className="contact_user">Message</label>
                    <textarea  rows="10" placeholder="Write your message..."></textarea>
                </div>
            </div>
       </form>
    );
}
 
export default ContactForm;