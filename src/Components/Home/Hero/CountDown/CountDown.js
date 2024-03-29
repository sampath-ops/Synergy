import Countdown from "react-countdown";
import "./CountDown.css";
const CountDown = ()=>{

    const end = new Date(2022,3,22);

    const Completionist = () => <span>You are good to go!</span>;

    const renderer = ({ days,hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          return <Completionist />;
        } else {
          // Render a countdown
          return (
                <div className="days_left">
                    <div className="timer_box timer">
                         {days}
                         <span>Days</span>
                    </div>
                    <div className="timer_box timer">
                        {hours}
                        <span>Hours</span>
                    </div>
                    <div className="timer_box timer">
                        {minutes}
                        <span>Minutes</span>
                    </div>
                    <div className="timer_box timer">
                        {seconds}
                        <span>Seconds</span>
                    </div>
                </div>
                
                // :{hours}:{minutes}:{seconds}
          )
        }
      };      

    return(
        <div className="count-down">
            <p>Registration Ends In :</p>
           <Countdown date={end.getTime()} renderer={renderer}>
               <Completionist/>
           </Countdown>
        </div>
    )
}
export default CountDown;