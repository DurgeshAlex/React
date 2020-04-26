import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
  };
  render() {
    return (
      <React.Fragment>
        <span>{this.state.counter}</span>
        <button> Counter </button>
      </React.Fragment>
    );
  }
}

export default Counter;
