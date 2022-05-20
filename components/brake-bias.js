import React, { Component } from "react";

class BrakeBias extends Component {

    constructor(props) {
        super(props)
    }

    render(){
        <div>
            <h1>BRAKE BIAS:</h1>
            <h2>{this.props.value}</h2>
        </div>
    }
}

export default BrakeBias;