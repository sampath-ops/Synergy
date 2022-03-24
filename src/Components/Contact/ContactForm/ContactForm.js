import "./ContactForm.css";
import {useState} from "react"
const ContactForm = () => {


    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    const [mail,setMail] = useState("");
    const [phn,setPhn] = useState("");
    const [msg,setMsg] = useState("");


    const fnameChangeHandler = (e)=>{
        setFname(e.target.value);
    }

    const lnameChangeHandler = (e)=>{
        setLname(e.target.value);
    }

    const mailChangeHandler = (e)=>{
        setMail(e.target.value);
    }

    const phnChangeHandler = (e)=>{
        setPhn(e.target.value);
    }

    const msgChangeHandler = (e)=>{
        setMsg(e.target.value);
    }

    const contactFormHandler = (e)=>{
        e.preventDefault();
        const userQuery = {
            fname,
            lname,
            mail,
            phn,
            msg
        }
        console.log(userQuery);
    }

    return (  
       <form className="contact_form_element" onSubmit={contactFormHandler}>
            <div className="contact_form">
                <div className="input_container">
                    <label className="contact_user">FirstName</label>
                    <input type="text" value={fname} onChange={fnameChangeHandler} required/>
                </div>
                <div className="input_container">
                    <label className="contact_user">LastName</label>
                    <input type="text" value={lname} onChange={lnameChangeHandler} required/>
                </div>
                <div className="input_container">
                    <label className="contact_user">Mail</label>
                    <input type="email" value={mail} onChange={mailChangeHandler} required/>
                </div>
                <div className="input_container">
                    <label className="contact_user">Phone</label>
                    <input type="tel" value={phn} onChange={phnChangeHandler} required/>
                </div>
                <div className="input_container">
                    <label className="contact_user">Message</label>
                    <textarea  rows="10" placeholder="Write your message..." value={msg} onChange={msgChangeHandler} required></textarea>
                </div>
            </div>
            <div className="contact_submit">
                <button type="submit">Send Message</button>
            </div>
       </form>
    );
}
 
export default ContactForm;