import React, { Component } from "react";

class ContactUsComponent extends Component {
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
            <h1>Contact Us</h1>
          </div>
          <div class="col col-sm-12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              feugiat nisi fringilla tellus interdum posuere. Etiam faucibus
              velit a ex condimentum, sed viverra lorem aliquet. In sed leo quis
              ex tincidunt consequat. Morbi sed ipsum et metus euismod
              sollicitudin id eget justo. Maecenas tristique tellus id ligula
              venenatis rhoncus. In quis diam malesuada, egestas sem eget,
              sagittis est. Aenean scelerisque urna quis pellentesque molestie.
              Nulla vitae nisi pulvinar, vehicula augue id, euismod nisi. Proin
              sollicitudin arcu vitae vulputate dignissim. Fusce posuere lectus
              vitae erat pulvinar lobortis. Praesent finibus risus id sodales
              semper. In quis enim mollis, vehicula leo ut, pharetra felis.
              Fusce suscipit mauris a turpis feugiat, et ultricies odio gravida.
              Curabitur vestibulum orci id vestibulum vulputate. Sed maximus
              nisi tempus, tristique urna ac, ornare est. Donec tristique lorem
              quis metus gravida dignissim. Etiam elementum augue sagittis erat
              porttitor, nec molestie diam lacinia. Sed ut massa eget mi
              ultricies tempus. Duis rhoncus elit consectetur arcu malesuada, ut
              tristique orci mattis. Morbi consequat magna eget mauris porta,
              nec tempor purus cursus.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUsComponent;
