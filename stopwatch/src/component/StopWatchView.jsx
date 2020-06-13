import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";

class StopWatchView extends Component {
  constructor(props) {
    super(props);
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
                  {this.props.hrs}
                </span>
              </div>

              <div className="badge badge-success mr-2">
                <span className="text-monospace" style={heightWeidth}>
                  {this.props.min}
                </span>
              </div>

              <div className="badge badge-success mr-2">
                <span className="text-monospace" style={heightWeidth}>
                  {this.props.sec}
                </span>
              </div>

              <div className="badge badge-success ">
                <span className="text-monospace" style={heightWeidth}>
                  {this.props.mils}
                </span>
              </div>
            </div>
          </div>
          <div class="card-footer bg-warning p-0"> </div>
        </div>
      </React.Fragment>
    );
  }
}

export default StopWatchView;
