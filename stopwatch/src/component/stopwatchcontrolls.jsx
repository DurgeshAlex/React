import React, { Component } from "react";

class StopWatchControl extends Component {
  constructor(props) {
    super(props);
  }

  interval = null;
  stopWatchStatuses = {
    PAUSED: "paused",
    STOPED: "stoped",
    RUNNING: "running",
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <button
            className="btn btn-sm btn-success mr-2"
            onClick={this.stopWatchBtnEvent("start")}
          >
            <span className={this.stopWatchBtnCss("start")}></span>
          </button>

          <button
            className="btn btn-sm btn-success mr-2"
            onClick={this.stopWatchBtnEvent("pause")}
            disabled={this.props.pauseDisabled}
          >
            <span className={this.stopWatchBtnCss("pause")}></span>
          </button>
          <button
            className="btn btn-sm btn-success"
            onClick={this.stopWatchBtnEvent("laps")}
            disabled={this.props.lapsDisabled}
          >
            <span className={this.stopWatchBtnCss("laps")}>Laps</span>
          </button>
        </div>
      </React.Fragment>
    );
  }

  stopWatchBtnCss(btnType) {
    console.log("stopWatchBtnCss called");
    if (btnType === "start") {
      if (this.props.stopWatchStatus === this.stopWatchStatuses.STOPED) {
        return "fa fa-play";
      }
      if (
        this.props.stopWatchStatus === this.stopWatchStatuses.RUNNING ||
        this.props.stopWatchStatus === this.stopWatchStatuses.PAUSED
      ) {
        return "fa fa-stop";
      }
    }
    if (btnType === "pause") {
      if (this.props.stopWatchStatus === this.stopWatchStatuses.STOPED) {
        return "fa fa-pause disabled";
      }
      if (this.props.stopWatchStatus === this.stopWatchStatuses.RUNNING) {
        return "fa fa-pause";
      }
      if (this.props.stopWatchStatus === this.stopWatchStatuses.PAUSED) {
        return "fa fa-play";
      }
    }
    if (btnType === "laps") {
    }
  }
  stopWatchBtnEvent(btnType) {
    console.log("stopWatchBtnEvent called", this.stopWatchStatus);
    if (btnType === "start") {
      if (this.props.stopWatchStatus === this.stopWatchStatuses.STOPED) {
        return this.props.onstartStopWatch;
      }
      if (
        this.props.stopWatchStatus === this.stopWatchStatuses.RUNNING ||
        this.props.stopWatchStatus === this.stopWatchStatuses.PAUSED
      ) {
        return this.props.onStopStopWatch;
      }
    }
    if (btnType === "pause") {
      if (this.props.stopWatchStatus === this.stopWatchStatuses.STOPED) {
        return this.props.onPauseStopWatch;
      }
      if (this.props.stopWatchStatus === this.stopWatchStatuses.RUNNING) {
        return this.props.onPauseStopWatch;
      }
      if (this.props.stopWatchStatus === this.stopWatchStatuses.PAUSED) {
        return this.props.onstartStopWatch;
      }
    }
    if (btnType === "laps") {
      if (this.props.stopWatchStatus === this.stopWatchStatuses.RUNNING) {
        return this.props.onLapsClick;
      }
    }
  }
}

export default StopWatchControl;
