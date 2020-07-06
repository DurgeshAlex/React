import React, { Component } from "react";

class PageNotFoundComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  style = {
    textAlign: "center",
  };
  render() {
    return (
      <React.Fragment>
        <div class="container" style={this.style}>
          <div class="row">
            <div class="col-md-12">
              <div class="error-template">
                <h1>Oops!</h1>
                <h2>404 Not Found</h2>
                <div class="error-details">
                  Sorry, an error has occured, Requested page not found!
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PageNotFoundComponent;
