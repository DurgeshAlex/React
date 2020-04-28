import React, { Component } from "react";
import Counter from "./counterComponent";

class Counters extends Component {
  state = {
    counters: [
      { key: 1, value: 1 },
      { key: 2, value: 2 },
      { key: 3, value: 3 },
      { key: 4, value: 4 },
    ],
  };
  render() {
    return (
      <React.Fragment>
        {this.state.counters.map((counter) => (
          <div key={counter.key}>
            <Counter counterProps={counter} onDelete={this.handleDelete} />
            <br />
          </div>
        ))}
      </React.Fragment>
    );
  }
  handleDelete = (key) => {
    const newCounters = this.state.counters.filter((counter) => {
      console.log(counter.key, key);
      return counter.key !== key;
    });
    this.setState({ counters: newCounters });
  };
}

export default Counters;
