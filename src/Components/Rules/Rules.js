import NavBar from "../Navbar/navbar";
import "./Rules.css";
const Rules = ({rules}) => {

    return (
       <NavBar className="second_nav">
            <div className="rules_container">
               <h2>{rules.head}</h2>
               <p>{rules.text}</p>
               <h3>TITLE</h3>
               <ul>
                   {
                       rules.titles.map((title,index)=>(
                           <li className="points" key={index}>{title}</li>
                       ))
                   }
               </ul>
               <h3>RULES</h3>
               <ul>
                   {
                       rules.rules.map((title,index)=>(
                           <li key={index}>{title}</li>
                       ))
                   }
               </ul>
            </div>
       </NavBar>
      );
}
 
export default Rules;