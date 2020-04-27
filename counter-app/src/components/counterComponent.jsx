import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 1,
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
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.state.counter}
        </span>
        <button style={{ fontSize: "10px" }} className="btn btn-primary">
          Increment
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.counter == 0 ? "primary" : "warning";
    return classes;
  }
}

export default Counter;
