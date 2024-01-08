// Write your code here

import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0} // Initializing state

  onAccelerate = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onBrake = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="img-speed"
          alt="Speedometer"
        />
        <h1 className="speed-count">Speed is {speed}mph </h1>
        <p className="description">Min limit is 0mph, Max limit is 200mph</p>
        <div>
          <button
            className="acc-button"
            type="button"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button className="br-button" type="button" onClick={this.onBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
