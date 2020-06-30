import React, { Component } from "react";

class HomeComponent extends Component {
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
          <div class="col col-sm-12 mx-auto" style={this.style}>
            <h1>Home</h1>
          </div>
          <div class="col col-sm-12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              finibus consectetur lorem, a pellentesque lorem commodo id. Nullam
              non lacinia ligula. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Mauris euismod justo vitae erat lobortis
              fermentum. Etiam volutpat leo vel erat commodo, auctor varius nisi
              rutrum. In non mollis erat, vel sagittis velit. Nunc porta
              venenatis erat, quis fermentum eros tincidunt quis. Duis id
              tincidunt enim. Sed eros velit.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
