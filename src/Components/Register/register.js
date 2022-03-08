import "./register.css";
import NavBar from "../Navbar/navbar";
import Bulb from "./Bulb";
import Form from "./Form";

const Register = () => {
    return ( 
        <NavBar className="second_nav">
            <div className="register">
                <Bulb/>
                <Form/>
            </div>
        </NavBar>
     );
}
 
export default Register;