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
        <button className="btn btn-info m-3" onClick={this.handleReset}>
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <div key={counter.key}>
            <Counter
              counterProps={counter}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
            />
            <br />
          </div>
        ))}
      </React.Fragment>
    );
  }
  handleIncrement = (counter) => {
    console.log("handleIncrement called. with counter", counter);
    const counters = [...this.state.counters];
    const counterIndex = counters.indexOf(counter);
    counters[counterIndex].value++;
    this.setState({ counters: counters });
  };
  handleReset = () => {
    const counters = [...this.state.counters];
    counters.map((counter) => (counter.value = 0));
    this.setState({ counters: counters });
    console.log(counters);
  };
  handleDelete = (key) => {
    const newCounters = this.state.counters.filter((counter) => {
      console.log(counter.key, key);
      return counter.key !== key;
    });
    this.setState({ counters: newCounters });
  };
}

export default Counters;
