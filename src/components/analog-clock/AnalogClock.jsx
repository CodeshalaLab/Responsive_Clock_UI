import { useState } from "react";
import "./AnalogClock.css";

const AnalogClock = () => {
  const [hour, setHour] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  // Function to update the clock rotation based on current time
  const clock = () => {
    let date = new Date(),
      hh = date.getHours() * 30,
      mm = date.getMinutes() * 6,
      ss = date.getSeconds() * 6;

    setHour(`rotateZ(${hh + mm / 12}deg)`); // Rotate hour hand
    setMinutes(`rotateZ(${mm}deg)`); // Rotate minute hand
    setSeconds(`rotateZ(${ss}deg)`); // Rotate second hand
  };
  // Update the clock rotation every second
  setInterval(clock, 1000);

  return (
    <div className="clock_circle">
      <span className="clock_twelve"></span>
      <span className="clock_three"></span>
      <span className="clock_six"></span>
      <span className="clock_nine"></span>

      <div className="clock_rounder"></div>
      <div className="clock_hour" style={{ transform: hour }}></div>
      <div className="clock_minutes" style={{ transform: minutes }}></div>
      <div className="clock_seconds" style={{ transform: seconds }}></div>
    </div>
  );
};

export default AnalogClock;
