import React, { useEffect, useState } from 'react';
import './App.css';
import Clock from './Components/Clock';
import { clear } from '@testing-library/user-event/dist/clear';

const App = () => {

  const [timeDays, setTimeDays] = useState();
  const [timeHours, setTimeHours] = useState();
  const [timeMinutes, setTimeMinutes] = useState();
  const [timeSeconds, setTimeSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("May 30,2023 ").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));

      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));

      const seconds = Math.floor((distance % (60 * 1000)) / 1000);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimeDays(days);
        setTimeHours(hours);
        setTimeMinutes(minutes);
        setTimeSeconds(seconds);

      }
    });
  }

  useEffect(() => {
    startTimer()
  })


  return (
    <>
      <div className="App">
        <Clock
          timeDays={timeDays}
          timeHours={timeHours}
          timeMinutes={timeMinutes}
          timeSeconds={timeSeconds}
        />
      </div>
    </>
  );
}

export default App;
