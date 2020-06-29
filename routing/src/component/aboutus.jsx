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
              finibus consectetur lorem, a pellentesque lorem commodo id. Nullam
              non lacinia ligula. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Mauris euismod justo vitae erat lobortis
              fermentum. Etiam volutpat leo vel erat commodo, auctor varius nisi
              rutrum. In non mollis erat, vel sagittis velit. Nunc porta
              venenatis erat, quis fermentum eros tincidunt quis. Duis id
              tincidunt enim. Sed eros velit, fermentum vel malesuada sit amet,
              ultricies et metus. Nunc quis purus vitae arcu convallis interdum
              a ut velit. Morbi suscipit viverra lectus, maximus efficitur
              ligula faucibus nec. Suspendisse potenti. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Integer pharetra at enim
              pretium aliquet. Nam ut nibh et nunc sodales volutpat et rutrum
              nisl. Maecenas turpis dolor, blandit ac urna sed, euismod rhoncus
              felis. Aliquam erat volutpat. Sed tempus luctus nibh, eu dictum
              augue tristique sed. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Integer ut
              dolor in ligula blandit scelerisque ac id quam. Maecenas viverra
              pretium erat. Aliquam sit amet sapien posuere, gravida erat sit
              amet, ornare nunc. Maecenas sollicitudin dignissim volutpat.
              Curabitur id volutpat mi. Praesent eleifend elit eu odio accumsan
              mattis. Duis sit amet lectus quis magna porttitor venenatis.
              Pellentesque ut fermentum nibh, vitae posuere leo. Sed sed nulla
              tristique, porttitor enim a, tincidunt purus. In dolor risus,
              ultricies ut pellentesque ullamcorper, commodo vulputate leo.
              Integer ornare ornare tempus. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Sed et
              efficitur libero. Aenean eget pretium velit. Vestibulum mauris
              consequat vitae enim. Quisque quam nisl, commodo dignissim neque
              a, pharetra bibendum lectus. Sed ultrices ex eu massa blandit
              accumsan. Donec vel magna velit. Morbi quis turpis augue. Fusce
              consectetur justo vel nunc varius sodales. Cras eget scelerisque
              lorem. In id nunc nunc. Aenean a ex tincidunt, ornare justo eget,
              elementum tortor. Ut rhoncus vitae diam vitae faucibus. Nunc nec
              quam eget dolor egestas luctus.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUsComponent;
