import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import StopWatchView from "./component/StopWatchView";
import StopWatchControl from "./component/stopwatchcontrolls";

class StopWatch extends Component {
  stopWatchStatuses = {
    PAUSED: "paused",
    STOPED: "stoped",
    RUNNING: "running",
  };
  constructor(props) {
    super(props);
    this.state = {
      hrs: "00",
      min: "00",
      sec: "00",
      mils: "000",
      pauseDisabled: true,
      stopWatchStatus: this.stopWatchStatuses.STOPED,
    };
  }
  style = {
    maxWidth: "30rem",
    padding: "100px 0",
  };

  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col col-sm-12 mx-auto" style={this.style}>
            <div className="card mb-3 p-5">
              <div className="card-body">
                <h5 className="card-title">STOP WATCH </h5>
                <StopWatchView
                  hrs={this.state.hrs}
                  min={this.state.min}
                  sec={this.state.sec}
                  mils={this.state.mils}
                />
              </div>
              <div className="card-footer">
                <StopWatchControl
                  pauseDisabled={this.state.pauseDisabled}
                  onstartStopWatch={this.startStopWatch}
                  onPauseStopWatch={this.pauseStopWatch}
                  onStopStopWatch={this.stopStopWatch}
                  stopWatchStatus={this.state.stopWatchStatus}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  startStopWatch = () => {
    console.log("Stop watch started.");
    if (this.interval == null) {
      this.interval = setInterval(this.updateTimes, 10);
    }
    console.log("Setting Stop watch state as.", this.stopWatchStatuses.RUNNING);

    this.setState({ stopWatchStatus: this.stopWatchStatuses.RUNNING });
  };
  updateTimes = () => {
    let date = new Date();
    let mils = parseInt(this.state.mils);
    let hrs = parseInt(this.state.hrs);
    let min = parseInt(this.state.min);
    let sec = parseInt(this.state.sec);
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
    hrs = String(hrs).padStart(2, "0");
    min = String(min).padStart(2, "0");
    sec = String(sec).padStart(2, "0");
    mils = String(mils).padStart(3, "0");

    this.setState({
      hrs: hrs,
      min: min,
      sec: sec,
      mils: mils,
      pauseDisabled: false,
    });
  };

  pauseStopWatch = () => {
    console.log("Stop watch paused", this.state.stopWatchStatus);
    clearInterval(this.interval);
    this.interval = null;
    this.setState({
      hrs: this.state.hrs,
      min: this.state.min,
      sec: this.state.sec,
      mils: this.state.mils,
      stopWatchStatus: this.stopWatchStatuses.PAUSED,
    });
  };

  stopStopWatch = () => {
    console.log("Stop watch stopped");
    clearInterval(this.interval);
    this.interval = null;
    this.setState({
      hrs: "00",
      min: "00",
      sec: "00",
      mils: "000",
      pauseDisabled: true,
      stopWatchStatus: this.stopWatchStatuses.STOPED,
    });
  };
}

export default StopWatch;
