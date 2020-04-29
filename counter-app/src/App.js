import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navBarComponent";
import Counters from "./components/countersComponent";
class App extends Component {
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
        <NavBar countersCount={this.state.counters.length} />
        <Counters
          counters={this.state.counters}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onReset={this.handleReset}
        />
      </React.Fragment>
    );
  }
  handleIncrement = (counter) => {
    console.log("handleIncrement called");
    const counters = [...this.state.counters];
    const counterIndex = counters.indexOf(counter);
    counters[counterIndex].value++;
    this.setState({ counters: counters });
  };
  handleReset = () => {
    const counters = [...this.state.counters];
    counters.map((counter) => (counter.value = 0));
    this.setState({ counters: counters });
    console.log("app-", counters);
  };
  handleDelete = (key) => {
    console.log("handleDelete called");

    const newCounters = this.state.counters.filter((counter) => {
      // console.log(counter.key, key);
      return counter.key !== key;
    });
    this.setState({ counters: newCounters });
  };
}

export default App;
