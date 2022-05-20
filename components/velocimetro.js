import React, { Component, useContext } from 'react';
import CountUp, {useCountUp} from 'react-countup';
import {DelayContext} from './contexts.js';
// import vel from '../static/SVGs/velocimentro.svg';

import CountUpWrapper from './countup-wrapper.js';

class Velocimetro extends Component {


    constructor(props) {
        super(props)
        this.pointerRef = React.createRef();
        this.greenBarRef = React.createRef();
        this.decimalRef = React.createRef();
        this.lastValue = 0;

        this.updateSpeed = this.updateSpeed.bind(this);
        this.updateAndFormatValue = this.updateAndFormatValue.bind(this);
        
        this.state = {
            speed: 0
        }
    }


    updateSpeed(newSpeed) {
        this.setState({speed: newSpeed});
    }


    render() {

        return (
            <svg style={{zoom: 1}} id="svg_document"
                 baseProfile="full" version="1.1" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100">
                <link href="/static/styles.css" rel="stylesheet"></link>
                {/* <title id="svg_document_title">Untitled.svg</title> */}
                <defs id="svg_document_defs">
                    <linearGradient x2="0%" id="linearGradient1" x1="0%" y2="0%" y1="100%">
                        <stop id="stop1" offset="0%" stopColor="#5a5a5c"></stop>
                        <stop id="stop2" offset="100%" stopColor="#00d927"></stop>
                    </linearGradient>
                </defs>
                <circle stroke="#000000" id="path-cover" strokeWidth="0px" cy="50px" fill="url(#radialGradient1)" r="43px" cx="50px"
                    transform="" visibility="visible"></circle>
                <circle stroke="#5b5b5c" visibility="visible" id="circle2" strokeWidth="3" cy="50px" fill="none" r="44" cx="50px"
                    transform=""></circle>
                <path ref={this.greenBarRef} stroke="#00d927" id="speed-path" strokeWidth="3" d="M50,94 A44,44 0 0 1 50,6 " fill="none" strokeLinecap="butt"
                    strokeLinejoin="miter" transform=""></path>
                <g id="speed-marker-texts" style={{"textShadow": "0px 1px 1px #6b6b6b"}} transform=""><text stroke="none" 
                        id="text14" strokeWidth="1px" x="82.400002px" textRendering="geometricPrecision" fontFamily="Advent Pro"
                        y="51.199997px" fill="white" fontSize="4px" transform="" textAnchor="middle">120</text><text stroke="none"
                         id="text13" strokeWidth="1px" x="80.799995px" textRendering="geometricPrecision"
                        fontFamily="Advent Pro" y="38.999996px" fill="white" fontSize="4px" transform="" textAnchor="middle">110</text><text
                        stroke="none"  id="text9" strokeWidth="1px" x="72.599998px" textRendering="geometricPrecision"
                        fontFamily="Advent Pro" y="28.0799994px" fill="white" fontSize="4px" transform="" textAnchor="middle">100</text><text
                        stroke="none"  id="text10" strokeWidth="1px" x="63.799995px" textRendering="geometricPrecision"
                        fontFamily="Advent Pro" y="21.399998px" fill="white" fontSize="4px" transform="" textAnchor="middle">90</text><text
                        stroke="none"  id="text8" strokeWidth="1px" x="50px" textRendering="geometricPrecision"
                        fontFamily="Advent Pro" y="20.000002px" fill="white" fontSize="4px" transform="" textAnchor="middle">80</text><text
                        stroke="none"  id="text7" strokeWidth="1px" x="37.200001px" textRendering="geometricPrecision"
                        fontFamily="Advent Pro" y="22.000006px" fill="white" fontSize="4px" transform="" textAnchor="middle">70</text><text
                        stroke="none"  id="text6" strokeWidth="1px" x="27.800001px" textRendering="geometricPrecision"
                        fontFamily="Advent Pro" y="28.4px" fill="white" fontSize="4px" transform="" textAnchor="middle">60</text><text
                        stroke="none"  id="text5" strokeWidth="1px" x="20.800001px" textRendering="geometricPrecision"
                        fontFamily="Advent Pro" y="39.199997px" fill="white" fontSize="4px" transform="" textAnchor="middle">50</text><text
                        stroke="none"  id="text4" strokeWidth="1px" x="17.800001px" textRendering="geometricPrecision"
                        fontFamily="Advent Pro" y="51.399994px" fill="white" fontSize="4px" transform="" textAnchor="middle">40</text><text
                        stroke="none"  id="text3" strokeWidth="1px" x="20.600002px" textRendering="geometricPrecision"
                        fontFamily="Advent Pro" y="64.799988px" fill="white" fontSize="4px" transform="" textAnchor="middle">30</text><text
                        stroke="none"  id="text1" strokeWidth="1px" x="27.400002px" textRendering="geometricPrecision"
                        fontFamily="Advent Pro" fill="white" fontSize="4px" y="75px" transform="" textAnchor="middle">20</text><text
                        stroke="none"  id="text2" strokeWidth="1px" x="37.400002px" textRendering="geometricPrecision"
                        fontFamily="Advent Pro" y="81.399994px" fill="white" fontSize="4px" transform="" textAnchor="middle">10</text><text
                        stroke="none" style={{"outlineStyle": "none", "color": "#ffffff"}} strokeWidth="1px" x="50px" textRendering="geometricPrecision"
                        fontFamily="Advent Pro" fill="white" fontSize="4px" y="84px" transform="" textAnchor="middle" id="text11">0</text></g>
                <g transform="" id="circle-pointers">
                    <circle stroke="#008017" id="circle1" strokeWidth="1px" cy="50" fill="none" r="40" cx="50" transform=""></circle>
                    <rect stroke="none" x="49.25px" height="9.7px" y="85.8px" strokeWidth="3px" id="rect15" width="1.485px" fill="#008017"
                        transform=""></rect>
                    <rect stroke="none" x="49.25px" height="4px" y="10px" id="rect1" strokeWidth="3px" width="1.5px" fill="#008017"
                        transform=""></rect>
                    <rect stroke="none" x="47.880721px" height="4px" y="51.816059px" strokeWidth="3px" id="rect14" width="1.5px"
                        fill="#008017" transform="translate(36.95 -15.3) rotate(67.5 50.75 52)"></rect>
                    <rect stroke="none" x="51.04525px" height="4px" y="50.432957px" strokeWidth="3px" id="rect13" width="1.5px"
                        fill="#008017" transform="translate(-36.95 -15.3) rotate(-67.5 50.75 52)"></rect>
                    <rect stroke="none" x="49.465641px" height="4px" y="50.126812px" strokeWidth="3px" id="rect12" width="1.5px"
                        fill="#008017" transform="translate(-15.3 -36.95) rotate(-22.5 50 50)"></rect>
                    <rect stroke="none" x="48.5px" height="4px" y="50px" strokeWidth="3px" id="rect10" width="1.5px" fill="#008017"
                        transform="translate(15.30 -36.95) rotate(22.5 50.75 52)"></rect>
                    <rect stroke="none" x="51.319698px" height="4px" y="53.618149px" strokeWidth="3px" id="rect9" width="1.5px"
                        fill="#008017" transform="translate(-15.30 36.95) rotate(202.5 50.75 52)"></rect>
                    <rect stroke="none" x="48.250771px" height="4px" y="47.965252px" strokeWidth="3px" id="rect8" width="1.5px"
                        fill="#008017" transform="translate(-36.95 15.3) rotate(67.25 50.75 52)"></rect>
                    <rect stroke="none" x="47.7px" height="4px" y="50px" strokeWidth="3px" id="rect7" width="1.5px" fill="#008017"
                        transform="translate(27.88 -27.28) rotate(45 50.75 52)"></rect>
                    <rect stroke="none" x="-2.262738px" height="4px" y="41.898335px" strokeWidth="3px" id="rect2" width="1.5px"
                        fill="#008017" transform="rotate(135 15.174976 38.524326)"></rect>
                    <rect stroke="none" x="48.585793px" height="4px" y="47.17157px" strokeWidth="3px" id="rect5" width="1.5px"
                        fill="#008017" transform="translate(-28.28 28.28) rotate(45 50.75 52)"></rect>
                    <rect stroke="none" x="59.850006px" height="4px" y="36.599998px" strokeWidth="3px" width="1.5px" id="rect4"
                        fill="#008017" transform="rotate(90 68.800003 57.999996)"></rect>
                    <rect stroke="none" x="49.25px" height="4px" y="86px" strokeWidth="3px" id="rect3" width="1.5px" fill="#008017"
                        transform="rotate(90 50 50)"></rect>
                </g>
                <rect ref={this.pointerRef} stroke="#000000" x="49.6px" height="46px" y="50px" id="speed-pointer" strokeWidth="0px" width="0.8px" fill="#ffffff"
                    transform="rotate(0 50 50)"></rect>
                <g id="speed-wrapper" transform="">
                    <circle stroke="#000000" id="circle3" strokeWidth="0px" cy="50px" fill="#1e1e1e" r="23.6px" cx="50px"
                        transform=""></circle>
                    <g id="speed-text" transform="" style={{"outlineStyle": "none", "textShadow": "0px 1px 1px #6b6b6b"}}>
                        
                        <CountUpWrapper end={this.props.speed} 
                                        suffix={"."}
                                        useEasing={false}
                                        formattingFn={this.updateAndFormatValue}>
                            {({ countUpRef }) => (
                        
                                <text stroke="none" ref={countUpRef}
                                id="speed-text-integer" strokeWidth="1px" x="50" textRendering="geometricPrecision"
                                fontFamily="Exo" fill="white" fontSize="20px" y="55.599995px" transform="" textAnchor="middle">
                                
                                </text>
                            )}
                        </CountUpWrapper>

                        {/* <SpeedCountup lastValue={this.lastValue} speed={this.props.speed} fmtFn={this.updateAndFormatValue} /> */}
                        
                                
                        {/* <text stroke="none" ref={this.decimalRef}
                             strokeWidth="1px" x="56.600002px" textRendering="geometricPrecision"
                            fontFamily="Advent Pro" fill="white" fontSize="7px" y="55.199997px" transform="" textAnchor="start">
                            00
                        </text> */}
                                    
                                
                            
                            
                       
                        <text
                            stroke="none"  id="text17" strokeWidth="1px"
                            x="50.000004px" textRendering="geometricPrecision" fontFamily="Exo" y="64.199997px" fill="white"
                            fontSize="7px" transform="" textAnchor="middle">
                            Km/h
                        </text>
                        
                    </g>
                </g>
                <image xlinkHref="/static/images/logo-fundo-preto.png" x="42.600006px" height="8.800022px" id="image1" y="29px" width="14.999992px" preserveAspectRatio="xMidYMid meet" transform="" macsvgid="17B2C0EA-0066-4DF8-AFF4-6FE448389EE8-3383-0000225F808AEF38"></image>
                <g id="main_group"></g>
            </svg>
        )
    }

    updateAndFormatValue(value) {

        // var decimalValue = Math.round((value - Math.floor(value)).toFixed(2)*100);
        // var decimalValueFormated = (decimalValue < 10 ? "0"+decimalValue : decimalValue);
        var integerValue = Math.floor(value);
        var formattedIntegerValue = (integerValue < 10 ? "0"+integerValue : integerValue);
        // formattedIntegerValue += ".";
        // var decComponent = this.decimalRef.current;
        // if (decComponent) {
        //     decComponent.innerHTML = decimalValueFormated;
        // }

        var pointerComponent = this.pointerRef.current;
        if (pointerComponent) {
            var rotateValue = value*180/80;
            pointerComponent.setAttribute("transform","rotate("+rotateValue+", 50, 50)")
        }

        var greenBarComponent = this.greenBarRef.current;
        if (greenBarComponent) {
            

            var angle = value*180/80;
            var newAngle = angle - 270;
            var x = 50 + Math.cos(newAngle*Math.PI/180)*44;
            var y = 50 + Math.sin(newAngle*Math.PI/180)*44;

            var pathDirectory = "M50,94 A44,44 0 "+(angle > 180 ? 1 : 0)+" 1 "+x+","+y;
            
            greenBarComponent.setAttribute("d", pathDirectory);
        }

        return formattedIntegerValue;
    }
}


function SpeedCountup(props) {
    const delay = useContext(DelayContext)/1000;
    return (
        <CountUp    start={props.lastValue} 
                    end={props.speed} 
                    delay={0}
                    suffix={"."}
                    useEasing={false}
                    decimals={2}
                    duration={delay}
                    formattingFn={props.fmtFn}>
            
        </CountUp>
    )
}

export default Velocimetro;