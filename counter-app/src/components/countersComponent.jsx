import React, { Component } from "react";
import Counter from "./counterComponent";

class Counters extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <button className="btn btn-info m-3" onClick={this.props.onReset}>
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <div key={counter.key}>
            <Counter
              counterProps={counter}
              onDelete={this.props.onDelete}
              onIncrement={this.props.onIncrement}
            />
            <br />
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
