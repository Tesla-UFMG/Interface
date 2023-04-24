import React, { Component } from "react";

class BrakeBias extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="default-container bordered-title-container">
        <div className="component-title bordered-title-text">BRAKE BIAS</div>
        <h3>{this.props.value} %</h3>
      </div>
    );
  }
}

export default BrakeBias;
