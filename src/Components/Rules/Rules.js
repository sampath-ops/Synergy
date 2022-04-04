import NavBar from "../Navbar/navbar";
import "./Rules.css";
import { guidelines } from "./GuideLines";
const Rules = () => {

    return (
       <NavBar className="second_nav">
            <div className="rules_container">
               {
                   guidelines.map((guideline,index)=>(
                        <div className="guideline-container" id={`${guideline.id}`} key={index}>
                            <h2>{guideline.head}</h2>
                            <p>{guideline.text}</p>
                            {/* <h3>TITLE</h3>
                            <ul>
                                {
                                    rules.titles.map((title,index)=>(
                                        <li className="points" key={index}>{title}</li>
                                    ))
                                }
                            </ul> */}
                            <h3>GuideLines</h3>
                            <ul>
                                {
                                    guideline.rules.map((rule,index)=>(
                                        <li key={index}>{rule}</li>
                                    ))
                                }
                            </ul>
                            <div className="contact_guideLines">
                                <h3 style={{margin: "10px 0"}}>Contact</h3>
                                <span>{guideline.contact.name} - {guideline.contact.number}</span>
                                <span></span>
                            </div>
                        </div>
                   ))
               }
            </div>
       </NavBar>
      );
}
 
export default Rules;