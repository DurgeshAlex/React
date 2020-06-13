import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";

class StopWatch extends Component {
  interval = null;
  stopWatchStatuses = {
    PAUSED: "paused",
    STOPED: "stoped",
    RUNNING: "running",
  };
  stopWatchStatus = this.stopWatchStatuses.STOPED;
  constructor(props) {
    super(props);
    this.state = {
      hrs: "00",
      min: "00",
      sec: "00",
      mils: "000",
      pauseDisabled: true,
    };
  }
  render() {
    const heightWeidth = {
      fontSize: "xx-large",
    };
    return (
      <React.Fragment>
        <div class="card text-center border-success m-3">
          <div class="card-body">
            <div>
              <div className="badge badge-success mr-2">
                <span className="text-monospace" style={heightWeidth}>
                  {this.state.hrs}
                </span>
              </div>

              <div className="badge badge-success mr-2">
                <span className="text-monospace" style={heightWeidth}>
                  {this.state.min}
                </span>
              </div>

              <div className="badge badge-success mr-2">
                <span className="text-monospace" style={heightWeidth}>
                  {this.state.sec}
                </span>
              </div>

              <div className="badge badge-success ">
                <span className="text-monospace" style={heightWeidth}>
                  {this.state.mils}
                </span>
              </div>
            </div>
          </div>
          <div class="card-footer bg-warning p-0">
            {" "}
            <div>
              <button
                className="btn btn-sm btn-success m-2"
                onClick={this.stopWatchBtnEvent("start")}
              >
                <span className={this.stopWatchBtnCss("start")}></span>
              </button>

              <button
                className="btn btn-sm btn-success"
                onClick={this.stopWatchBtnEvent("pause")}
                disabled={this.state.pauseDisabled}
              >
                <span className={this.stopWatchBtnCss("pause")}></span>
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  startStopWatch = () => {
    console.log("Stop watch started.");
    if (this.interval == null) {
      this.interval = setInterval(this.updateTimes, 10);
    }
    this.stopWatchStatus = this.stopWatchStatuses.RUNNING;
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
    });
    this.stopWatchStatus = this.stopWatchStatuses.STOPED;
  };

  pauseStopWatch = () => {
    console.log("Stop watch paused");
    clearInterval(this.interval);
    this.interval = null;
    this.stopWatchStatus = this.stopWatchStatuses.PAUSED;
    this.setState({
      hrs: this.state.hrs,
      min: this.state.min,
      sec: this.state.sec,
      mils: this.state.mils,
    });
  };
  stopWatchBtnCss(btnType) {
    console.log("stopWatchBtnCss called");
    if (btnType === "start") {
      if (this.stopWatchStatus === this.stopWatchStatuses.STOPED) {
        return "fa fa-play";
      }
      if (
        this.stopWatchStatus === this.stopWatchStatuses.RUNNING ||
        this.stopWatchStatus === this.stopWatchStatuses.PAUSED
      ) {
        return "fa fa-stop";
      }
    }
    if (btnType === "pause") {
      if (this.stopWatchStatus === this.stopWatchStatuses.STOPED) {
        return "fa fa-pause disabled";
      }
      if (this.stopWatchStatus === this.stopWatchStatuses.RUNNING) {
        return "fa fa-pause";
      }
      if (this.stopWatchStatus === this.stopWatchStatuses.PAUSED) {
        return "fa fa-play";
      }
    }
  }
  stopWatchBtnEvent(btnType) {
    console.log("stopWatchBtnEvent called");
    if (btnType === "start") {
      if (this.stopWatchStatus === this.stopWatchStatuses.STOPED) {
        return this.startStopWatch;
      }
      if (
        this.stopWatchStatus === this.stopWatchStatuses.RUNNING ||
        this.stopWatchStatus === this.stopWatchStatuses.PAUSED
      ) {
        return this.stopStopWatch;
      }
    }
    if (btnType === "pause") {
      if (this.stopWatchStatus === this.stopWatchStatuses.STOPED) {
        return this.pauseStopWatch;
      }
      if (this.stopWatchStatus === this.stopWatchStatuses.RUNNING) {
        return this.pauseStopWatch;
      }
      if (this.stopWatchStatus === this.stopWatchStatuses.PAUSED) {
        return this.startStopWatch;
      }
    }
  }
}

export default StopWatch;
