import "./navbar.css";
import {useState} from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
// import synergy from "../../images/saeee_logo.png";


function NavBar(props) {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  const customNavbar = props.className;

  return (
    <div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className={`navbar ${customNavbar}`} onClick={e => e.stopPropagation()}>
        <div className="nav-container">

          {/* <div className="logo_box">
            <NavLink to="/" className="nav-logo">
            <img src={synergy} alt="logo" />
            </NavLink>
          </div> */}
          
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/events"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Events
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink 
                to="/register"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Register
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/previous-synergy"
                activeclassname="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Memories
              </NavLink>
            </li>

            <li className="nav-item">
              <a   
                href="https://gcesalem.edu.in/"
                target="_blank"
                rel="noreferrer"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About GCE
              </a>
            </li>
            
            <li className="nav-item">
              <NavLink   
                to="/contact-us"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
          
        </div>
      </nav>
      {props.children}
      <Footer/>
    </ div>
  );
}
export default NavBar;
