import './App.css'
import AnalogClock from './components/analog-clock/AnalogClock'
import DigitalClock from './components/digital-clock/DigitalClock'

const App = () => (
    <div className="clock container">
      <div className="clock_container grid">
        <div className="clock_content grid">
          <AnalogClock />
          <DigitalClock />
        </div>
      </div>
    </div>
  )

export default App