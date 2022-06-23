import React, { Component } from "react";

class ECU extends Component {

    constructor(props) {
        super(props)
    }

    render(){

        return (
            <div className="default-container bordered-title-container">
                <div className="component-title bordered-title-text">ECU FLAG</div>
                <h2>{this.props.value}</h2>
            </div>
        )
    }
}

export default ECU;