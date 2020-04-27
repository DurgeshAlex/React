import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
    imageUrl: "https://picsum.photos/200",
  };
  styles = {
    fontWeight: 30,
    fontSize: 40,
  };
  render() {
    return (
      <React.Fragment>
        <img src={this.state.imageUrl} alt="" />
        <span style={this.styles} className="badge badge-primary m-2">
          {this.state.counter}
        </span>
        <button style={{ fontSize: "10px" }} className="btn btn-primary">
          Increment
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
