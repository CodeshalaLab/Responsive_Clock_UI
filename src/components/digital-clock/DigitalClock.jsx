import { useEffect, useState } from 'react'
import months from '../../constants'
import './DigitalClock.css'

const DigitalClock = () => {
  const [HourDigital, setHourDigital] = useState('');
  const [MinutesDigital, setMinutesDigital] = useState('');
  const [AmPm, setAmPm] = useState('');
  const [DayNow, setDayNow] = useState('');
  const [MonthNow, setMonthNow] = useState('');
  const [YearNow, setYearNow] = useState('');

  useEffect(() => {
    setInterval(() => {
      // Update the clock every second
      let date = new Date(),
          hh = date.getHours(),
          mm = date.getMinutes(),
          day = date.getDate(),
          month = date.getMonth(),
          year = date.getFullYear(),
          ampm;

      if (hh >= 12) {
        hh = hh - 12;
        ampm = 'PM';
      } else {
        ampm = 'AM';
      }

      // Handle special cases for hour, minute
      if (hh === 0) {
        hh = 12
      }
      if (hh < 10) {
        hh = `0${hh}`
      }
      if (mm < 10) {
        mm = `0${mm}`
      }

      // Update the state variables with the current time
      setHourDigital(hh);
      setMinutesDigital(mm);
      setAmPm(ampm);
      setDayNow(day);
      setMonthNow(months[month]);
      setYearNow(year);
    }, 1000)
  }, [])
  return (
    <div>
        <div className="clock_text">
            <div className="clock_text-hour">{`${HourDigital}:`}</div>
            <div className="clock_text-minutes">{MinutesDigital}</div>
            <div className="clock_text-ampm">{AmPm}</div>
        </div>
        <div className="clock_date">
            <span id="date_day">{`${DayNow} `}</span>
            <span id="date_month">{`${MonthNow} , `}</span>
            <span id="date_year">{YearNow}</span>
        </div>
    </div>
  )
}

export default DigitalClock