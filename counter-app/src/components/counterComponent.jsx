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

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.state.counter}
        </span>
        <button
          style={{ fontSize: "10px" }}
          className="btn btn-primary"
          onClick={this.handleIncrement}
        >
          Increment
        </button>
        <ul>{this.renderTags()}</ul>
      </React.Fragment>
    );
  }
  //   handleIncrement() {
  //     this.setState({ counter: this.state.counter + 1 });
  //   }
  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleIncrement() {
    this.setState({ counter: this.state.counter + 1 });
  }

  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>There is not tags to display</p>;
    }
    return this.state.tags.map((tag) => <li key={tag}>{tag}</li>);
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.counter === 0 ? "primary" : "warning";
    return classes;
  }
}

export default Counter;
