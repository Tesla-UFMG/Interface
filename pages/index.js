import React, { Component } from 'react'
import Head from 'next/head'
import Velocimetro from '../components/velocimetro.js'
import Bateria from '../components/bateria.js'
import BMSInformation from '../components/bms-information.js'
import DataFetcher from '../components/data-fetcher.js'
import ECU from "../components/ecu-flag.js";
import BMS from "../components/bms-flag.js";
import Inversor from "../components/inversor-flag.js";
import BrakeBias from "../components/brake-bias.js";/* 
import SerialHandler from  "../serial-handler.js" */

import '../static/styles/styles.css'

import {DelayContext} from '../components/contexts.js'


const DelayProvider = DelayContext.Provider;

class Index extends DataFetcher {

  constructor(props) {
    super(props)
    this.page = "geral"
    this.delay = 400;
    
  }


  render() {
    // debugger;
    console.log(this.state.data)
    return(
        <div className="container-fluid">
          <br></br>
          <div class="row justify-content-between">
            <div class="col-4">
              <ECU
                value={parseInt(((this.state.data || {}).control || {}).ecuFlag) || 2}> 
              </ECU>
            </div>
            <div class="col-4">
              <BMS
                value={parseInt(((this.state.data || {}).bms || {}).bmsFlag) || 2}> 
              </BMS>
            </div>
            <div class="col-4">
              <Inversor
                value={parseInt(((this.state.data || {}).control || {}).inversorFlag) || 2}> 
              </Inversor>
            </div>
          </div>
          
          <br></br>
          
          {/* <button onClick={(()=>{SerialHandler.rssiRequestMessage})}> ok </button> */}
          <DelayProvider value={this.delay}>
            <div className="row d-flex align-items-center index-section" >
            
              <div className="col-lg-4 col-12 mt-2 mb-2">
                <BMSInformation maxtemperature={((this.state.data || {}).bms || {}).maxTemperature/10 || 0}
                                meantemperature={((this.state.data || {}).bms || {}).mediaTemperature/10 || 0}
                                minvoltage={((this.state.data || {}).bms || {}).minVoltage/10000 || 0}
                                airstatus={((this.state.data || {}).bms || {}).airStatus || 0}
                                totalvoltage={((this.state.data || {}).bms || {}).totalVoltage/100 || 0}
                                glvvoltage={((this.state.data || {}).bms || {}).glvVoltage/1000 || 0}/>
              <br></br>
              <div className="col-12">
              <BrakeBias value={50}> </BrakeBias></div>
              </div>
              <div className="col-lg-4 col-12 mt-2 mb-2" >
                <Velocimetro speed={((this.state.data || {}).control || {}).mediaSpeed || 0}></Velocimetro>
              </div>
              <div className="col bordered-title-container mt-2 mb-2" style={{ margin: "0px 50px 0px 40px"}}>
                
                <div className="d-flex justify-content-left">
                    <span className="component-title bordered-title-text ">STATUS DE CARGA</span>
                </div>
                <Bateria charge={parseInt(((this.state.data || {}).bms || {}).charge) || 0}></Bateria>
              </div>
            </div>
             
          </DelayProvider>
              

        </div>
    )
  }
}
{/* <div class="alert alert-danger" role="alert" background-color='#dc3545'>
     </div> */}

export default Index