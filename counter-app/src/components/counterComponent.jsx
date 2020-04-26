import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
    imageUrl: "https://picsum.photos/200",
  };
  render() {
    return (
      <React.Fragment>
        <img src={this.state.imageUrl} alt="" />
        <span>{this.state.counter}</span>
        <button> {this.state.counter} </button>
      </React.Fragment>
    );
  }
}

export default Counter;
