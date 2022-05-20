import React, { Component } from 'react';
import chroma from 'chroma-js'

class Bateria extends Component {


    render() {

        var colorScale = chroma.scale(['#c5041a', '#d48633', '#008017']).domain([0,35,100]);

        var color = colorScale(this.props.charge);
        

        var tempoRestante = "---"

        return (
            <svg version="1.1" baseProfile="full" 
                viewBox="0 0 500 400" preserveAspectRatio="xMidYMid meet" id="svg_document" style={{"zoom": "1", marginBottom: "-20px"}}>
                <link href="/static/styles.css" rel="stylesheet"></link>
                {/* <title id="svg_document_title">Untitled.svg</title> */}
                
                
                <g id="main_group">
                    <rect x="4px" height="400px" y="1px" id="background_rect" width="500px" fill="#000000" visibility="hidden"></rect>
                    <g id="g1" transform="">
                        <text stroke="none" style={{outlineStyle: "none"}} id="text2" strokeWidth="1px" x="250px"
                            fontWeight="bolder" textRendering="geometricPrecision" fontFamily="Exo" fill="whitesmoke" fontSize="20px"
                            y="320px" transform="" textAnchor="start">TEMPO RESTANTE</text>
                        <text stroke="none" style={{outlineStyle: "none"}}
                            id="text3" strokeWidth="1px" x="253px" textRendering="geometricPrecision" fontFamily="Exo" fill="whitesmoke"
                            fontSize="16px" y="344px" transform="" textAnchor="start">{tempoRestante}</text>
                    </g>
                    <path stroke="whitesmoke" strokeWidth="10" id="path1" 
                          d="M20,40 l0,200 a20,20 0 0 0 20,20 l370,0 a20,20 0 0 0 20,-20 l0,-50 l0,-100 m0,100 a10,10 0 0 1 10,-10 l30,0 a10,10 0 0 0 10,-10 l0,-60 a10,10 0 0 0 -10,-10 l-30,0 a10,10 0 0 1 -10,-10 l0,-50 a20,20 0 0 0 -20,-20 l-370,0 a20,20 0 0 0 -20,20 " 
                          fill="none" strokeLinecap="butt" transform="" strokeLinejoin="miter"></path>
                        
                </g>
                <rect stroke="#000000" x="425px" height="88px" y="96px" id="rect1" strokeWidth="0px" width="50px" fill="whitesmoke" transform=""></rect>
                <rect stroke="#000000" x="35px" height="210px" y="35px" id="rect2" width={this.props.charge/100*380} fill={color}
                    transform=""></rect>
                <text stroke="none" style={{fontWeight:"lighter", outlineStyle: "none"}} id="text1"
                    strokeWidth="1px" x="229px" fontWeight="bolder" textRendering="geometricPrecision" fontFamily="Exo" fill="whitesmoke"
                    fontSize="80px" y="356px" transform="" textAnchor="end" fontStretch="normal">{this.props.charge}%
                </text>
            </svg>
        )
    }
}

export default Bateria;