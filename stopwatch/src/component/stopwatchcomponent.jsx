import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class StopWatch extends Component {
  interval;
  constructor(props) {
    super(props);
    this.state = {
      hrs: 0,
      min: 0,
      sec: 0,
      mils: 0,
    };
    this.interval = setInterval(this.startStopWatch, 10);
  }
  render() {
    const heightWeidth = {
      fontSize: "xx-large",
    };
    return (
      <React.Fragment>
        <div>
          <div className="badge badge-info">
            <span className="text-monospace" style={heightWeidth}>
              {this.state.hrs}
            </span>
          </div>
          :
          <div className="badge badge-info">
            <span className="text-monospace" style={heightWeidth}>
              {this.state.min}
            </span>
          </div>
          :
          <div className="badge badge-info">
            <span className="text-monospace" style={heightWeidth}>
              {this.state.sec}
            </span>
          </div>
          :
          <div className="badge badge-info">
            <span className="text-monospace" style={heightWeidth}>
              {this.state.mils}
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
  startStopWatch = () => {
    let date = new Date();
    let mils = parseInt(this.state.mils);
    let hrs = this.state.hrs;
    let min = this.state.min;
    let sec = this.state.sec;
    mils = mils + 10;
    if (mils === 1000) {
      mils = 0;
      sec = sec + 1;
    }
    if (sec === 60) {
      sec = 0;
      min = min + 1;
    }
    if (min === 60) {
      min = 0;
      hrs = hrs + 1;
    }
    if (hrs === 24) {
      clearInterval(this.interval);
    }
    mils = String(mils).padStart(3, "0");
    this.setState({
      hrs: hrs,
      min: min,
      sec: sec,
      mils: mils,
    });
  };
}

export default StopWatch;
