import React, { Component } from "react";

class BMS extends Component {
  constructor(props) {
    super(props);
  }

  render() { 
    switch (this.props.value) {

      case 0:
        return (<div className="default-container bordered-text-container">
          <div className="component-title bordered-title-text">BMS FLAG</div>
          <h4>Over voltage error</h4>
        </div>)
        break;
      case 1:
        return (<div className="default-container bordered-title-container">
          <div className="component-title bordered-title-text">BMS FLAG</div>
          <h4>Under voltage error</h4>
        </div>)
        break;
      case 2:
        return (<div className="default-container bordered-title-container">
          <div className="component-title bordered-title-text">BMS FLAG</div>
          <h4>Over temperature error</h4>
        </div>)
        break;
      default:
        return (<div className="default-container bordered-title-container">
          <div className="component-title bordered-title-text">BMS FLAG</div>
          <h4>Sem erros detectados</h4>
        </div>)
        break;
    }
  }
}

export default BMS;
