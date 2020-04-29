import React, { Component } from "react";
class NavBar extends Component {
  state = {};
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="home">
              Navbar
            </a>
            <button type="button" class="btn btn-primary">
              counters{" "}
              <span class="badge badge-light">{this.props.countersCount}</span>
            </button>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
