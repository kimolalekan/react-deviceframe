import React, { Component } from "react";
import Content from './lib/Content';
import Props from './lib/Props';

export default class Nexus5 extends Component {
  render() {
    
     // TODO: does Nexus5 use color?
    // const color = (this.props.color) ? this.props.color : "gold";

    return (
      <div className={`marvel-device nexus5 ${this.props.orientation}`}>
        <div className="top-bar" />
        <div className="sleep" />
        <div className="volume" />
        <div className="camera" />
        <div className="screen">
          <Content show={this.props.show} />
        </div>
      </div>
    );
  }
}

Nexus5.propTypes = Props;
