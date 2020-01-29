import React, { Component } from 'react'

import CountUpWrapper from '../components/countup-wrapper.js'

import {DelayContext} from '../components/contexts.js'


class AcelerometroXY extends Component {

    constructor(props) {
        super(props);

        this.svgRef = React.createRef();
        this.setaRef = React.createRef();
        this.caboRef = React.createRef();
        this.pontaRef = React.createRef();

        this.lastAngle = 0;
        this.lastGrow = 0;
    }

    render() {
        var setaRotate = "rotate(";

        var x = this.props.x;
        var y = this.props.y;

        var lAngle = this.lastAngle;

        
        let angle = (Math.atan(y/x)*180/Math.PI + (x<0 ? 270: 90));
        var finalAngle;

        this.lastAngle = angle;

        var complementaryAngle = (angle < 0 ? angle + 360 : angle - 360);

        //busca pelo menor diferença de angulo que resulta na mesma rotação da seta

        var dAc = lAngle - angle;
        var dA = Math.abs(dAc);

        var compAng = angle + 360*dAc/dA;

        var dC = Math.abs(lAngle-compAng);

        if (dA <= dC) {
            finalAngle = angle;
        } else {
            finalAngle = compAng;
        }

        //debugger;
        setaRotate+=angle+", 350, 250)"
        
        
        const a = 170;
        const b = 70;
        
        let tanTheta = y/x;
        
        let xe = x == 0 ? 0 : a*b/Math.sqrt(b*b+tanTheta*tanTheta*a*a);
        let ye = x == 0 ? b : tanTheta*xe;
        
        var grow = Math.sqrt(Math.pow(xe,2)+Math.pow(ye,2));
        
        const maxg = 4;
        const offset = 10;
        const maxsize = 160-26-offset;
        
        var norma = Math.sqrt(x*x+y*y);
        if (norma > maxg) norma = maxg;
        
        var inc = norma/maxg*maxsize;
        
        grow += offset + inc;
        var lGrow = this.lastGrow;
        this.lastGrow = grow;
        
        
        console.log(grow);
        // if ()

        return (
            <div>
                <svg ref={this.svgRef} style={{zoom: 1}} cursor="default" version="1.1" viewBox="0 0 700 500" width="100%"
                    id="svg_document" baseProfile="full" preserveAspectRatio="xMidYMid meet">
                    <g id="main_group">
                        <g ref={this.setaRef} id="seta" transform="">
                            <BuildRotateAnimation lastAngle={lAngle} angle={finalAngle}></BuildRotateAnimation>

                            <rect ref={this.caboRef} stroke="none" height="0px" x="345px" y="250px" id="seta-cabo" strokeWidth="3px" width="10px"
                                fill="green" transform="">
                                <BuildGrowthAnimation lastHeight={lGrow} height={grow}></BuildGrowthAnimation>
                            </rect>
                            <polygon ref={this.pontaRef} points={"330,"+(250+grow-1)+" 370,"+(250+grow-1)+" 350,"+(250+grow-1+26)} stroke="none" id="polygon1" strokeWidth="3px" fill="green"
                                transform="">
                                <BuildPointsAnimation lastGrow={lGrow} grow={grow}></BuildPointsAnimation>
                                </polygon>
                        </g>
                        <g id="g1" transform="">
                            <ellipse stroke="none" cx="350px" transform="" id="ellipse1" cy="250px" fill="black"
                                rx={a} ry={b}></ellipse>
                            <image x="187px" height="147px" y="169px" id="image1"
                                xlinkHref="/static/images/carro-lado-iconized.png"
                                xlinkRole="/static/images/carro-lado-iconized.png"
                                width="328px" preserveAspectRatio="xMidYMid meet" transform=""></image>
                        </g><text stroke="none" style={{outlineStyle :"none"}} id="text1" strokeWidth="1px" x="380px"
                            textRendering="geometricPrecision" fontFamily="Exo" fill="whitesmoke" fontSize="20px" y="308px"
                            transform="" fontWeight="bold" textAnchor="end">{norma.toFixed(1)} G</text>
                    </g>
                </svg>
            </div>
        )
    }

    componentDidUpdate() {
        var svg = this.svgRef.current
        if(svg) {
            svg.setCurrentTime(0);
            var seta = this.setaRef.current;
            //seta.setAttribute("transform", "rotate("+this.lastAngle+", 350, 250)");
        }
    }
}

function BuildRotateAnimation(props) {
    return(
        <animateTransform attributeName="transform" 
                          attributeType="XML" 
                          type="rotate" 
                          values={props.lastAngle+" 350 250;"+props.angle+" 350 250"} 
                          begin="0s" 
                          dur={(React.useContext(DelayContext)/1000).toFixed(2)+"s"} 
                          repeatCount="1" 
                          additive="replace" 
                          accumulate="none" 
                          id="animateTransform"
                          fill="freeze" />
    )
}

function BuildGrowthAnimation(props) {
    return(
        <animate attributeName="height"
                 from={props.lastHeight}
                 to={props.height}
                 dur={(React.useContext(DelayContext)/1000).toFixed(2)+"s"}
                 begin="0s"
                 repeatCount="1"
                 fill="freeze" 
        />
    )
}

function BuildPointsAnimation(props) {
    return(
        <animate attributeName="points"
                 from={"330,"+(250+props.lastGrow-1)+" 370,"+(250+props.lastGrow-1)+" 350,"+(250+props.lastGrow-1+26)}
                 to={"330,"+(250+props.grow-1)+" 370,"+(250+props.grow-1)+" 350,"+(250+props.grow-1+26)}
                 dur={(React.useContext(DelayContext)/1000).toFixed(2)+"s"}
                 begin="0s"
                 repeatCount="1"
                 fill="freeze" 
        />
    )
}

export default AcelerometroXY;