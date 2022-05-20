import React, {Component, useContext, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CountUp, {useCountUp} from 'react-countup';

import CountUpWrapper from './countup-wrapper.js'

import { DelayContext } from './contexts.js'

class BMSInformation extends Component {


    render() {


        return (
            <div className="row mt-2 bordered-title-container" style={{paddingBottom: "10px", paddingRight: "10px"}}>
                <div className="col-12 d-flex justify-content-left">
                    <span className="bms-information-title bordered-title-text ">DADOS GERAIS DO BMS</span>
                </div>
                <div className="col-4 d-flex align-items-center" style={{padding: "0px", margin: "5px -20px 5px -20px"}}>
                    <img src="static/SVGs/bolt.svg" style={{width: "100%", height: "auto"}}></img>
                </div>
                <div className="col ">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <Information title="TEMPERATURA MÁXIMA" value={this.props.maxtemperature} unit="ºC" icon={<img src="static/icons/thermometer-full.png"></img>}></Information>
                        </div>
                        <div className="col-lg-6 col-12">
                            <Information title="TEMPERATURA MÉDIA" value={this.props.meantemperature} unit="ºC" icon={<img src="static/icons/thermometer.png"></img>}></Information>
                        </div>
                        <div className="col-lg-6 col-12">
                            <Information title="TENSÃO MÍNIMA" value={this.props.minvoltage} unit="V" icon={<img src="static/icons/low-voltage-warning.png"></img>}></Information>
                        </div>
                        <div className="col-lg-6 col-12">
                            <AIRStatus value={parseInt(this.props.airstatus)===1}></AIRStatus>
                        </div>
                        <div className="col-lg-6 col-12">
                            <Information title="TENSÃO TOTAL" value={this.props.totalvoltage} unit="V" icon={<img src="static/icons/car-battery.png"></img>}></Information>
                        </div>
                        <div className="col-lg-6 col-12">
                            <Information title="TENSÃO DO GLV" value={this.props.glvvoltage} unit="V" icon={<img src="static/icons/electronics.png"></img>}></Information>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function Information(props) {
    var st = {};
    for (a in props.filters) {
        var style = a.assert(props.value);
        if (style) {
            st = style;
            break;
        }
    }
    return (
        <div className="row">
            <div className="col-12 d-flex justify-content-center">
                <span className="information-title">{props.title}</span>
            </div>
            <div className="col-12">
                <div className="information-value-wrapper d-flex align-items-center">
                    <div className="information-icon">
                        {props.icon}
                    </div>
                    <CountUpWrapper end={props.value}>
                        {
                            ({countUpRef}) => (
                                <div className="information-value flex-fill" style={st} ref={countUpRef}/>
                            )
                        }
                    </CountUpWrapper>
                    
                    <div className="information-unit">
                        {props.unit}
                    </div>
                </div>
            </div>
        </div>
    )
}


function AIRStatus(props) {
    return (
        <div className="row">
            <div className="col-12 d-flex justify-content-center">
                <span className="information-title">STATUS DO AIR</span>
            </div>
            <div className="col-12">
                <div className="information-value-wrapper d-flex align-items-center">
                    <div className="information-icon">
                        {props.value === true ? <img src="static/icons/connected.png"></img> : <img src="static/icons/disconnected.png"></img>}
                    </div>
                    <div className={"information-value flex-fill "+(props.value===true ? "air-fechado": "air-aberto")}> 
                        {props.value === true ? "FECHADO" : "ABERTO"}
                    </div>
                </div>
            </div>
        </div>
    )
}


var operators = {
    EQUAL: 1,
    LESSTHAN: 2,
    GREATERTHAN: 3,
    LESSOREQUAL: 4,
    GREATEROREQUAL: 5
}


class Filter {
    constructor(m, action) {
        this.m = m;
        this.action = action;
    }

    assert(value) {
        if (this.m.match(value))
            return action;
        else
            return false;
    }
}


class Matcher {
    constructor(op, reference) {
        this.op = op;
        this.reference = reference;
    }

    match(value) {
        switch(op) {
            case operators.EQUAL:
                return value == this.reference;
            break;
            case operators.LESSTHAN:
                return value < this.reference;
            break;
            case operators.GREATERTHAN:
                return value > this.reference;
            break;
            case operators.LESSOREQUAL:
                return value <= this.reference;
            break;
            case operators.GREATEROREQUAL:
                return value >= this.reference;
            break;
        }
    }
}


export default BMSInformation;