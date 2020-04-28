import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontWeight: 20,
    fontSize: 20,
  };
  counter = this.props.counterProps;
  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.counter.value}
        </span>
        <button
          style={this.styles}
          className="btn btn-primary"
          onClick={() => this.props.onIncrement(this.counter)}
        >
          Increment
        </button>
        <button
          style={this.styles}
          className="btn btn-danger m-2"
          onClick={() => this.props.onDelete(this.counter.key)}
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.counter.value === 0 ? "primary" : "warning";
    return classes;
  }
}

export default Counter;
