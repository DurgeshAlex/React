import React, { Component } from "react";
import logo from "./logo.svg";
class App extends Component {
  state = {
    openDropwDown: "dropdown",
  };
  render() {
    return (
      <div className="row">
        <div className="col col-sm-6 text-center">
          <div className="btn btn-primary" onClick={this.openDropwDown}>
            {" "}
            Click To Open DropDown
          </div>
        </div>
        <div className="col col-sm-6">
          <div className={this.state.openDropwDown}>
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              //aria-expanded="true"
            >
              Dropdown Example
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a href="#">HTML</a>
              </li>
              <li>
                <a href="#">CSS</a>
              </li>
              <li>
                <a href="#">JavaScript</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  openDropwDown = () => {
    let value = "dropdown open";
    if (this.state.openDropwDown === "dropdown open") {
      value = "dropdown";
    }
    console.log(value);
    this.setState({ openDropwDown: value });
  };
}

export default App;
