import React, { Component } from "react";

class StopWatchLapsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="m-3">{this.renderLaps()}</div>
      </React.Fragment>
    );
  }
  renderLaps() {
    console.log("render laps called.");
    if (this.props.laps.length > 0) {
      return (
        <table className="table table-striped table-sm">
          <tbody>
            {this.props.laps.map((value, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else {
      return "No Laps created yet.";
    }
  }
}

export default StopWatchLapsView;
