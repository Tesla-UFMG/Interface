import React, { Component } from 'react'

import CountUpWrapper from '../components/countup-wrapper.js'

import {DelayContext} from '../components/contexts.js'

class AcelerometroYZ extends Component {

    constructor(props) {
        super(props)

        this.svgRef = React.createRef();

        this.lastGrow = 0
        this.lastAngle = 0;
    }

    render() {

        var setaRotate = "rotate(";

        var z = this.props.z;
        var y = this.props.y;

        //ajusta o angulo dependendo do sinal de z
        let angle = (Math.atan(y/z)*180/Math.PI + (z<0 ? 270: 90));
        var finalAngle;
        var lAngle = this.lastAngle;
        this.lastAngle = angle;

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

        setaRotate+=angle+", 250, 250)"

        const maxg = 4;
        const radius = 90;
        const offset = 10;
        const maxsize = 160-26-offset;

        var grow = radius+offset;

        var norma = Math.sqrt(z*z+y*y);
        if (norma > maxg) norma = maxg;

        var inc = norma/maxg*maxsize;

        grow += offset + inc;
        var lGrow = this.lastGrow;
        this.lastGrow = grow;

        console.log(grow);

        return (
            <div>
                <svg ref={this.svgRef} version="1.1" baseProfile="full" width="100%"
                    viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet" id="svg_document" style={{zoom: 1}}>
                    <g id="main_group"></g>
                    <g transform="" id="seta">
                        <BuildRotateAnimation lastAngle={lAngle} angle={finalAngle}></BuildRotateAnimation>
                        <rect stroke="none" x="245px" height={grow} y="250px" id="seta-cabo" strokeWidth="10px" width="10px"
                            fill="green" transform="">
                            <BuildGrowthAnimation lastHeight={lGrow} height={grow}></BuildGrowthAnimation>
                        </rect>
                        <polygon points={"230,"+(250+grow-1)+" 270,"+(250+grow-1)+" 250,"+(250+grow+26-1)+""} stroke="none" id="polygon1" strokeWidth="3px" fill="green"
                            transform="">
                            <BuildPointsAnimation lastGrow={lGrow} grow={grow}></BuildPointsAnimation>
                        </polygon>
                    </g>
                    <circle stroke="none" transform="" id="circle1" strokeWidth="3px" cy="250px" fill="black" r={radius} cx="250px">
                    </circle>
                    <image x="166px" height="140px" y="163px" id="image1"
                        xlinkHref="/static/images/carro-frente-iconized.png"
                        xlinkRole="/static/images/carro-frente-iconized.png"
                        width="171.111px" preserveAspectRatio="xMidYMid meet" transform=""></image><text stroke="none"
                        style={{outlineStyle: "none"}} id="text1" strokeWidth="1px" x="278px" textRendering="geometricPrecision"
                        fontFamily="Exo"  fontWeight="bold" fill="whitesmoke" fontSize="20px" y="320px" transform="" textAnchor="end">{norma.toFixed(1)} G</text>
                </svg>
            </div>
        )
    }

    componentDidUpdate() {
        var svg = this.svgRef.current
        if(svg) {
            svg.setCurrentTime(0);
            //seta.setAttribute("transform", "rotate("+this.lastAngle+", 350, 250)");
        }
    }
}

function BuildRotateAnimation(props) {
    return(
        <animateTransform attributeName="transform" 
                          attributeType="XML" 
                          type="rotate" 
                          values={props.lastAngle+" 250 250;"+props.angle+" 250 250"} 
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
                 from={"230,"+(250+props.lastGrow-1)+" 270,"+(250+props.lastGrow-1)+" 250,"+(250+props.lastGrow-1+26)}
                 to={"230,"+(250+props.grow-1)+" 270,"+(250+props.grow-1)+" 250,"+(250+props.grow-1+26)}
                 dur={(React.useContext(DelayContext)/1000).toFixed(2)+"s"}
                 begin="0s"
                 repeatCount="1"
                 fill="freeze" 
        />
    )
}

export default AcelerometroYZ;