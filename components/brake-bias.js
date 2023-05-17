import React, { Component } from "react";

class BrakeBias extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="default-container bordered-title-container" style={{padding:"10px", marginRight:"15px"}}>
        <div className="component-title bordered-title-text">BRAKE BIAS</div>
        <h3>{this.props.value} %</h3>
      </div>
    );
  }
}

export default BrakeBias;
