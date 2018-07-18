import React, { Component } from "react";
import PropTypes from "prop-types";
import  iphonex from "./iphonex"
import  iphone8 from "./iphone8"
import  iphone8plus from "./iphone8plus"
import  iphone5s from "./iphone5s"
import  iphone5c from "./iphone5c"
import  iphone4s from "./iphone4s"
import  ipad from "./ipad"
import  macbookpro from "./macbookpro"
import  nexus5 from "./nexus5"
import  galaxys5 from "./galaxys5"
import  galaxynote8 from "./galaxynote8"
import  htcone from "./htcone"
import  lumia920 from "./lumia920"

class Device extends Component {

  render() {

    let device;
    const iphonex = <iphonex url={this.props.url} color={this.props.color} />;
    const iphone8 = <iphone8 url={this.props.url} color={this.props.color} />;
    const iphone8plus = <iphone8plus url={this.props.url} color={this.props.color} />;
    const iphone5s = <iphone5s url={this.props.url} color={this.props.color} />;
    const iphone5c = <iphone5c url={this.props.url} color={this.props.color} />;
    const iphone4s = <iphone4s url={this.props.url} color={this.props.color} />;
    const ipad = <ipad url={this.props.url} color={this.props.color} />;
    const macbookpro = <macbookpro url={this.props.url} color={this.props.color} />;
    const nexus5 = <nexus5 url={this.props.url} color={this.props.color} />;
    const galaxys5 = <galaxys5 url={this.props.url} color={this.props.color} />;
    const galaxynote8 = <galaxynote8 url={this.props.url} color={this.props.color} />;

    switch (device) {
      case "iphone-x":
      device = iphonex;
      break;

      case "iphone-8":
      device = iphone8;
      break;

      case "iphone-8plus":
      device = iphone8plus;
      break;

      case "iphone-5s":
      device = iphone5s;
      break;

      case "iphone-5c":
      device = iphone5c;
      break;

      case "iphone-4s":
      device = iphone4s;
      break;

      case "ipad-mini":
      device = ipad;
      break;

      case "macbook-pro":
      device = macbookpro;
      break;

      case "nexus-5":
      device = nexus5;
      break;

      case "galaxy-s5":
      device = galaxys5;
      break;

      case "galaxy-note8":
      device = galaxynote8;
      break;

      case "htc-one":
      device = htcone;
      break;

      case "lumia-920":
      device = lumia920;
      break;

      default:
      device = iphone8;
    }

    return device;
  }
}


Device.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  url: PropTypes.string
};

export default Device;