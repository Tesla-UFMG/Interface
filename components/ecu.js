import React, { Component } from "react";

class ECU extends Component {

    constructor(props) {
        super(props)
    }

    render(){
        <div>
            <h1>ECU:</h1>
            <h2>{this.props.value}</h2>
        </div>
    }
}

export default ECU;