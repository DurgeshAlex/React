import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavbarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand">
            <Link to="/home">Routing Example</Link>
          </a>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link">
                <Link to="/home">Home</Link>
                {/* <span class="sr-only">(current)</span> */}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <Link to="about-us">About Us</Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <Link to="/contact-us">Contact Us</Link>
              </a>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavbarComponent;
