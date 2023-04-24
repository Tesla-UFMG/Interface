import React, { Component } from "react";

class ECU extends Component {
  constructor(props) {
    super(props);
  }

  render() { 
    switch (this.props.value) {
      case 0:
        return (<div className="default-container bordered-text-container">
          <div className="component-title bordered-title-text">ECU FLAG</div>
          <h4>Erro de plausabilidade entre BSE e APPS</h4>
        </div>)
        break;
      case 1:
        return (<div className="default-container bordered-title-container">
          <div className="component-title bordered-title-text">ECU FLAG</div>
          <h4>Erro de plausabilidade entre APPS</h4>
        </div>)
        break;
      case 8:
        return (<div className="default-container bordered-title-container">
          <div className="component-title bordered-title-text">ECU FLAG</div>
          <h4>Erro de comunicação do inversor</h4>
        </div>)
        break;
      case 9:
       return ( <div className="default-container bordered-title-container">
          <div className="component-title bordered-title-text">ECU FLAG</div>
          <h4>Curto detectado na placa de freio</h4>
        </div>)
        break;
      case 10:
        return (<div className="default-container bordered-title-container">
          <div className="component-title bordered-title-text">ECU FLAG</div>
          <h4>Erro de bus off na CAN do inversor</h4>
        </div>)
      default:
        return (<div className="default-container bordered-title-container">
          <div className="component-title bordered-title-text">ECU FLAG</div>
          <h4>Sem erros detectados</h4>
        </div>)
        break;
    }
  }
}

export default ECU;
