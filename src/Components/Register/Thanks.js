import "./thanks.css";
const Thanks = (props) => {

    return (  
        <div className="thanks">
            <h2>Thanks for Registering</h2>
            <p>Your id : <b>{props.studentAbstract.id}</b></p>
            <p>Check your mail {props.studentAbstract.email} for reference of your ID which will be used for<b>on spot payment.</b></p>
        </div>
    );
}
 
export default Thanks;