import "./Form.css";
import { useState } from "react";

const Form = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState(""); 
    const [college,setCollege] = useState("");
    const [department,setDepartment] = useState("");
    const [year,setYear] = useState("1st year");
    const [events,setEvents] = useState([]);
    const [checked,setChecked] = useState({
        yes:false,
        no:false
    });
    const [acc,setAcc] = useState("no");
    const [error,setError] = useState(false);


    const nameChangeHandler = (e)=>{
        setName(e.target.value);
    }

    const emailChangeHandler = (e)=>{
        setEmail(e.target.value);
    }

    const phoneChangeHandler = (e)=>{
        setPhone(e.target.value);
    }

    const collegeChangeHandler = (e)=>{
        setCollege(e.target.value);
    }

    const departmentChangeHandler = (e)=>{
        setDepartment(e.target.value);
    }

    const yearChangeHandler = (e) =>{
        setYear(e.target.value);
    }


    // get event list
    const evenListChangeHandler = (e)=>{

        let newArray = [...events, e.target.id];

        if(newArray.length > 0){
            setError(false);
        }

        if (events.includes(e.target.id)) {
            newArray = newArray.filter(event => event !== e.target.id);
        }
        setEvents(newArray);
    }

    // handle check radio
    const radioChange = (e)=>{
        setChecked(() => {
            return {
              yes: false,
              no: false,
              [e.target.id]: true
            };
          });
    }

    const accomodationChangeHandler = (e)=>{
        setAcc(e.target.value);
    }


    const getDataHandler = (e)=>{
        e.preventDefault();
        if(events.length < 1){
            setError(true);
            return;
        }
        const details = {
            name,
            email,
            phone,
            college,
            department,
            year,
            events,
            accomodation:acc
        }

        console.log(details);

        reset();

    }

    const reset = ()=>{
        setName("");
        setEmail("");
        setPhone("");
        setCollege("");
        setDepartment("");
        setYear("1st year");
        setEvents([]);
        setChecked({
            yes:false,
            no:false
        });
        var checkboxes = document.getElementsByClassName('event_check');
        for (var checkbox of checkboxes) {
            checkbox.checked = false;
        }
    }


    return ( 
        <div className="form_container">
        
        <form onSubmit={getDataHandler}>
            <h2>Register</h2>
            <input type="text" placeholder="Enter Name" value={name} onChange={nameChangeHandler} required/>
            <input type="email" placeholder="Enter Email" value={email} onChange={emailChangeHandler} required/>
            <input type="tel" placeholder="Enter Phone Number" value={phone} onChange={phoneChangeHandler} required/>
            <input type="text" placeholder="Enter College" value={college} onChange={collegeChangeHandler} required/>
            <input type="text" placeholder="Enter Department" value={department} onChange={departmentChangeHandler} required/>


            <label htmlFor="year">Select Year
            <select name="year" value={year} onChange={yearChangeHandler} required>
                <option value="1st year">1st Year</option>
                <option value="2nd year">2nd Year</option>
                <option value="3rd year">3rd Year</option>
                <option value="4th year">4th Year</option>
            </select></label>

            <div className="select_events_container">
                <label>Select Events 
                {error && <span className="error">* please select events</span>}    
                </label>  
                
                <div className="select_events">
                    <label>
                    <input name="tech" className="event_check" id="Technical" type="checkbox" onClick={evenListChangeHandler}/>
                    <span className="event_name">Technical</span>
                    </label>
                </div> 
                <div className="select_events">
                    <label>
                    <input name="non-tech" className="event_check" id="Non Technical" type="checkbox" onClick={evenListChangeHandler}/>
                    <span className="event_name">Non Technical</span>
                    </label>
                </div> 
                <div className="select_events">
                    <label>
                    <input name="project" className="event_check" id="Project" type="checkbox" onClick={evenListChangeHandler}/>
                    <span className="event_name">Project</span>
                    </label>
                </div> 
                <div className="select_events">
                    <label>
                    <input name="ppt" className="event_check" id="PPT" type="checkbox" onClick={evenListChangeHandler}/>
                    <span className="event_name">PPT</span>
                    </label>
                </div> 
                <div className="select_events">
                    <label>
                    <input name="all" className="event_check" id="All Events" type="checkbox" onClick={evenListChangeHandler}/>
                    <span className="event_name">All Events</span>
                    </label>
                </div> 
            </div>

            <div className="accomodation">
                <label>Accommodation</label>
                <label className="acc_lable">
                <input id="yes" type="radio" value="yes" onClick={accomodationChangeHandler} onChange={radioChange} checked={checked.yes}/>
                <span className="event_name">Yes</span>
                </label>
                <label className="acc_lable">
                <input id="no" type="radio"  value="no" onClick={accomodationChangeHandler} onChange={radioChange}checked={checked.no}/>
                <span className="event_name">No</span>
                </label>
            </div>

            <div className="submit_button">
              <button type="submit">Submit</button>    
            </div>
        </form>
        </div>
     );
}
 
export default Form;