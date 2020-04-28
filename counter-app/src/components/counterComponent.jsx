import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counterProps.value,
    key: this.props.counterProps.key,
  };
  styles = {
    fontWeight: 20,
    fontSize: 20,
  };

  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.state.value}
        </span>
        {this.props.children}
        <button
          style={this.styles}
          className="btn btn-primary"
          onClick={this.handleIncrement}
        >
          Increment
        </button>
        <button
          style={this.styles}
          className="btn btn-danger m-2"
          onClick={() => this.props.onDelete(this.state.key)}
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  handleIncrement = () => {
    console.log("called");
    this.setState({ value: this.state.value + 1 });
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "primary" : "warning";
    return classes;
  }
}

export default Counter;
