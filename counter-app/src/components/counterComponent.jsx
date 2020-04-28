import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontWeight: 20,
    fontSize: 20,
  };
  constructor(props) {
    super(props);
    console.log(
      "App Construtor invoked for counter",
      this.props.counterProps.key
    );
  }
  counter = this.props.counterProps;

  render() {
    console.log("App Render invoked for counter", this.props.counterProps.key);
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
  componentDidMount() {
    console.log(
      "App ComponentDidMoun invoked for counter",
      this.props.counterProps.key
    );
  }
  componentDidUpdate() {
    console.log(
      "App ComponentDidUpdate invoked for counter",
      this.props.counterProps.key
    );
  }
  componentWillUnmount() {
    console.log(
      "App componentWillUnmount invoked for counter",
      this.props.counterProps.key
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.counter.value === 0 ? "primary" : "warning";
    return classes;
  }
}

export default Counter;
