import "./thanks.css";
const Thanks = (props) => {

    return (  
        <div className="thanks">
            <h2>Thanks for Registering</h2>
            <p>Your id : <b>{props.studentAbstract.studentId}</b></p>
            <p>Check your mail {props.studentAbstract.mail} to have reference of your id which will be used for on spot payment.</p>
        </div>
    );
}
 
export default Thanks;