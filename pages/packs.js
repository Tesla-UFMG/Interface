import React, { Component } from 'react'
import DataFetcher from '../components/data-fetcher.js'

import CountUpWrapper from '../components/countup-wrapper.js'

import {DelayContext} from '../components/contexts.js'
import ECU from "../components/ecu.js";


const DelayProvider = DelayContext.Provider;

class Packs extends DataFetcher {

    constructor(props) {
        super(props)

        this.page = "packs"
        this.delay = 1000;
    }

    render() {
        return (
            <div className="container-fluid">
                <DelayProvider value={this.delay}>
                <br></br>
                <ECU
                value={parseInt(((this.state.data || {}).control || {}).ecuFlag) || 2}> 
                </ECU>
                <br></br>
                    <div className="row">
                        <div className="col-lg-3 col-6">
                            <PacksInformation title={"TENSÃO TOTAL"} value={((this.state.data || {}).bms || {}).totalVoltage/100 || 0} unit={"V"}></PacksInformation>
                        </div>
                        <div className="col-lg-3 col-6">
                            <PacksInformation title={"CORRENTE MÉDIA"} value={((this.state.data || {}).bms || {}).mediaCurrent/10 || 0} unit={"A"}></PacksInformation>
                        </div>
                        <div className="col-lg-3 col-6">
                            <PacksInformation title={"TEMPERATURA MÁXIMA"} value={((this.state.data || {}).bms || {}).maxTemperature/10 || 0} unit={"ºC"}></PacksInformation>
                        </div>
                        <div className="col-lg-3 col-6">
                            <PacksInformation title={"TENSÃO MÍNIMA"} value={((this.state.data || {}).bms || {}).minVoltage/10000 || 0} unit={"V"}></PacksInformation>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                {(((this.state.data || {}).bms || {}).packs || []).map((pack, index) => <div className="col-12 col-lg-6 mt-3"><Pack key={index} packIndex={index+1} {...pack}/></div>)}
                            </div>
                        </div>
                    </div>
                </DelayProvider>
            </div>
        )
    }
}

function PacksInformation(props) {
    return (
        <div className="packs-information-container">
            <div className="packs-information-title">
                {props.title}
            </div>
            <div className="packs-information-value-wrapper">
                <CountUpWrapper end={props.value}>
                    {
                        ({countUpRef}) => (
                            <div ref={countUpRef} className="packs-information-value"/>
                        )
                    }
                </CountUpWrapper>
                <div className="packs-information-unit">
                    {props.unit}
                </div>
            </div>

        </div>
    );
}

function Pack(props) {
    return (
        <div className="pack-container">
            <div className="pack-title-wrapper">
                <div className="pack-title">
                    PACK {props.packIndex-1}
                </div>
            </div>
            <div className="pack-content">
                <div className="pack-voltages">
                    <div className="pack-section-title">
                        TENSÕES
                    </div>
                    <div className="pack-section-values">
                        {props.cells.map((cell, index) => 
                            <CountUpWrapper end={cell/10000.0 || 0}
                                            duration={5}
                                            useEasing={false}>
                                {
                                    ({countUpRef}) => (
                                        <div key={"c-"+index} ref={countUpRef} className={"pack-value "+(cell >= 35500 ? "over-voltage" : cell <= 28000 ? "under-voltage" : "")}></div>
                                    )
                                }
                            </CountUpWrapper>
                        )}
                    </div> 
                </div>
                <div className="pack-temperatures">
                    <div className="pack-section-title">
                        TEMPERATURAS
                    </div>
                    <div className="pack-section-values">
                        {props.temperatures.map((temperature, index) =>
                            <CountUpWrapper end={temperature/10.0 || 0}
                                            duration={5}
                                            useEasing={false}>
                                {
                                    ({countUpRef}) => (
                                        <div key={"t-"+index} ref={countUpRef} className={"pack-value "+(temperature >= 55000 ? "over-temperature" : "")}></div>
                                    )
                                }
                            </CountUpWrapper>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Packs;