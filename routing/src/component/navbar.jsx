import React, { Component } from "react";

class NavbarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Home{/* <span class="sr-only">(current)</span> */}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavbarComponent;
