import useTimer from '../custom-hooks/useTimer';
import '../App.css';

const Timer = () => {
  const { months, days, hours, minutes, seconds } = useTimer();

  return (
    <div className="container">
      <h1 className="timer-heading">Time since 04/01/22</h1>
      <div id="countdown">
        <ul>
          <li>
            <span></span>Months <span className="number">{months}</span>
          </li>
          <li>
            <span></span>Days <span className="number">{days}</span>
          </li>
          <li>
            <span></span>Hours <span className="number">{hours}</span>
          </li>
          <li>
            <span></span>Minutes <span className="number">{minutes}</span>
          </li>
          <li>
            <span></span>Seconds <span className="number">{seconds}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Timer;
