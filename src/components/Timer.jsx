import useTimer from '../custom-hooks/useTimer';
import '../App.css';

const Timer = () => {
  const { months, days, hours, minutes, seconds } = useTimer();

  return (
    <div className="container">
      <h1 className="timer-heading">Time since 04/01/22</h1>
      <div id="countdown">
        <ul>
          <li key={(months + 1).toString()}>
            <span></span>Months <span className="number">{months}</span>
          </li>
          <li key={(months + 2).toString()}>
            <span></span>Days <span className="number">{days}</span>
          </li>
          <li key={(months + 3).toString()}>
            <span></span>Hours <span className="number">{hours}</span>
          </li>
          <li key={(months + 4).toString()}>
            <span></span>Minutes <span className="number">{minutes}</span>
          </li>
          <li key={(months + 5).toString()}>
            <span></span>Seconds <span className="number">{seconds}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Timer;
