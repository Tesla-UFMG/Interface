import React, { Component } from "react";
import DataFetcher from "../components/data-fetcher.js";

import CountUpWrapper from "../components/countup-wrapper.js";

import CarOverlay from "../components/carro-overlay.js";
import Volante from "../components/volante.js";
import AcelerometroXY from "../components/acelerometro-xy.js";
import AcelerometroYZ from "../components/acelerometro-yz.js";
import ECU from "../components/ecu-flag.js";

import BMS from "../components/bms-flag.js";
import Inversor from "../components/inversor-flag.js";

import { DelayContext } from "../components/contexts.js";

const DelayProvider = DelayContext.Provider;

class Controle extends DataFetcher {
  constructor(props) {
    super(props);

    this.page = "controle";
    this.delay = 400;
  }

  render() {
    console.log(this.state.data);

    return (
      <div className="container-fluid">
        <DelayProvider value={this.delay}>
          <br></br>
          <div class="row justify-content-between">
            <div class="col-4">
              <ECU
                value={
                  parseInt(((this.state.data || {}).control || {}).ecuFlag) || 2
                }
              ></ECU>
            </div>
            <div class="col-4">
              <BMS
                value={
                  parseInt(((this.state.data || {}).control || {}).bmsFlag) || 2
                }
              ></BMS>
            </div>
            <div class="col-4">
              <Inversor
                value={
                  parseInt(
                    (
                      (((this.state.data || {}).control || {}).inversor || {})
                        .flag || {}
                    ).inversorFlag
                  ) || 2
                }
              ></Inversor>
            </div>
          </div>

          <br></br>
          <div className="row">
            <div className="col-md-6 col-12">
              <div style={{ height: "78vh" }}>
                <CarOverlay
                  {...((this.state.data || {}).control || {})}
                ></CarOverlay>
              </div>
            </div>
            <div className="col-md col-12 mr-4">
              <div className="row">
                <div className="col-5 mt-3">
                  <Volante
                    value={
                      ((this.state.data || {}).control || {}).steeringWheel ||
                      1810
                    }
                  ></Volante>
                </div>
                <div className="offset-1"></div>
                <div className="col-6 mt-3 ">
                  <div className="bordered-title-container default-container">
                    <div className="component-title bordered-title-text">
                      PEDAIS
                    </div>
                    <Pedal
                      title={"ACELERADOR:"}
                      icon={<img src="/static/SVGs/gas.svg"></img>}
                      value={
                        <CountUpWrapper
                          end={
                            (
                              ((this.state.data || {}).control || {}).pedals ||
                              {}
                            ).throttle / 10 || 0
                          }
                          decimals={0}
                        />
                      }
                    />
                    <hr className="gray-separator"></hr>
                    <Pedal
                      title={"HODÔMETRO:"}
                      icon={<img src="/static/SVGs/brake.svg"></img>}
                      value={
                        ((this.state.data || {}).control || {}).hodometro || 0
                      }
                      decimals={0}
                    />

                    <div className="pedal-content"></div>
                  </div>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-12 mt-3">
                  <div className="bordered-title-container default-container">
                    <div className="component-title bordered-title-text">
                      ACELERÔMETRO
                    </div>
                    <div className=" row w-100">
                      <div className="col-md-7">
                        <div className="row">
                          <div className="col-12 component-title subtitle">
                            EIXO XY:
                          </div>
                          <div className="col-12">
                            <AcelerometroXY
                              x={
                                (
                                  ((this.state.data || {}).control || {})
                                    .accelerometer || {}
                                ).x / 1000
                              }
                              y={
                                (
                                  ((this.state.data || {}).control || {})
                                    .accelerometer || {}
                                ).y / 1000
                              }
                            ></AcelerometroXY>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-5">
                        <div className="row">
                          <div className="col-12 component-title subtitle">
                            EIXO YZ:
                          </div>
                          <div className="col-12">
                            <AcelerometroYZ
                              z={
                                (
                                  ((this.state.data || {}).control || {})
                                    .accelerometer || {}
                                ).z / 1000
                              }
                              y={
                                (
                                  ((this.state.data || {}).control || {})
                                    .accelerometer || {}
                                ).y / 1000
                              }
                            ></AcelerometroYZ>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DelayProvider>
      </div>
    );
  }
}

function Pedal(props) {
  return (
    <div className="col-12">
      <div className="row d-flex align-items-center">
        <div className="col no-padding-right pedal-icon">{props.icon}</div>
        <div className="col-9">
          <div className="row">
            <div className="col-12 pedal-title">{props.title}</div>
          </div>
          <div className="row">
            <div className="col-12 pedal-value">{props.value} % </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Controle;
