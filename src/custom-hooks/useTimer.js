import { useState, useEffect } from 'react';
import { intervalToDuration } from 'date-fns';
import parseISO from 'date-fns/parseISO';

const useTimer = () => {
  const [now, setNow] = useState(new Date());
  const fromDate = parseISO('2022-01-04T00:00:00');
  let months = 0;
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const duration = intervalToDuration({
    start: fromDate,
    end: now,
  });

  months = duration.months;
  days = duration.days;
  hours = duration.hours;
  minutes = duration.minutes;
  seconds = duration.seconds;

  return {
    months,
    days,
    hours,
    minutes,
    seconds,
  };
};

export default useTimer;
