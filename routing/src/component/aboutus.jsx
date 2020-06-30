import React, { Component } from "react";

class AboutUsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  style = {
    textAlign: "center",
  };
  render() {
    return (
      <div>
        <div class="row">
          <div class="col col-sm-12" style={this.style}>
            <h1>About Us</h1>
          </div>
          <div class="col col-sm-12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              finibus consectetur lorem.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUsComponent;
