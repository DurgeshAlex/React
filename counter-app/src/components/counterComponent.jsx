import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 1,
    tags: ["tag1", "tag2", "tag3"],
  };
  styles = {
    fontWeight: 30,
    fontSize: 40,
  };
  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.state.counter}
        </span>
        <button style={{ fontSize: "10px" }} className="btn btn-primary">
          Increment
        </button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
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
