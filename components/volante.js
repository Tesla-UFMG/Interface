import React, { Component } from 'react'

import CountUpWrapper from '../components/countup-wrapper.js'


class Volante extends Component {

    constructor(props) {
        super(props)

        this.updateVolante = this.updateVolante.bind(this);

        this.rotateRef = React.createRef();
    }

    render() {

        return (
            <div className="volante-container default-container bordered-title-container">
                <div className="component-title bordered-title-text">VOLANTE</div>
                <div className="volante-svg-wrapper">

                    <svg cursor="default" style={{zoom: 1}} width="100%"
                        id="svg_document" baseProfile="full" version="1.1" preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 500 350">
                        
                        
                        <title id="svg_document_title">Untitled.svg</title>
                        <defs id="svg_document_defs"></defs>
                        <g id="main_group"></g>
                        <g ref={this.rotateRef} transform="" id="st-wheel">
                            <path stroke="whitesmoke" id="path1" strokeWidth="3px"
                                d="M100,100 l0,120 s0,45 80,45 l140,0 s80,0 80,-45 l0,-120 s0,-30 -80,-30 l-140,0 s-80,0 -80,30  z "
                                fill="whitesmoke" transform=""></path>
                            <path stroke="whitesmoke" strokeLinejoin="miter" strokeWidth="5" id="path2"
                                d="M180,90 l-50,10 c-20,10 -20,30 0,40 l50,0 a10,10 90 0 0 10,-10 l0,-30 c0,-5 0,-10 -10,-10  z "
                                fill="black" strokeLinecap="butt" transform=""></path>
                            <path stroke="whitesmoke" visibility="visible" id="path3" strokeWidth="5"
                                d="M320,90 l50,10 c20,10 20,30 0,40 l-50,0 a10,10 90 0 1 -10,-10 l0,-30 c0,-5 0,-10 10,-10  z " fill="black"
                                strokeLinecap="butt" transform="" strokeLinejoin="miter"></path>
                            <path stroke="whitesmoke" strokeWidth="5" id="path4"
                                d="M365,169 a10,10 90 0 1 10,10 l0,40 c0,15 -35,29 -50,30 a10,10 90 0 1 -10,-10 l0,-30 s0,-40 45,-40  z "
                                fill="black" strokeLinecap="butt" transform="" strokeLinejoin="miter"></path>
                            <path stroke="whitesmoke" strokeWidth="5" id="path5"
                                d="M135,170 a10,10 90 0 0 -10,10 l0,40 c0,15 35,29 50,30 a10,10 90 0 0 10,-10 l0,-30 s0,-40 -45,-40  z "
                                fill="black" strokeLinecap="butt" transform="" strokeLinejoin="miter"></path>
                            <image x="218px" height="49.417px" y="141px" id="image1"
                            xlinkHref="/static/images/logo-fundo-branco.png"
                            xlinkRole="/static/images/logo-fundo-branco.png"
                            width="69px" preserveAspectRatio="xMidYMid meet" transform=""></image>
                            <g id="g1" transform="">
                                <circle stroke="none" strokeWidth="3px" id="circle2" cy="135px" fill="black" r="4px" transform=""
                                    cx="269px"></circle>
                                <circle stroke="none" strokeWidth="3px" id="circle3" cy="197px" fill="black" r="4px" transform=""
                                    cx="230px"></circle>
                                <circle stroke="none" strokeWidth="3px" id="circle4" cy="197px" fill="black" r="4px" transform=""
                                    cx="269px"></circle>
                                <circle stroke="none" strokeWidth="3px" id="circle5" cy="135px" fill="black" r="4px" transform=""
                                    cx="230px"></circle>
                                <circle stroke="none" transform="" strokeWidth="3px" id="circle1" cy="166px" fill="black" r="4px"
                                    cx="286px"></circle>
                                <circle stroke="none" transform="" strokeWidth="3px" id="circle6" cy="167px" fill="black" r="4px"
                                    cx="213px"></circle>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className="volante-value-wrapper">
                    <span className="volante-title">
                        ROTAÇÃO:
                    </span>
                    <CountUpWrapper end={this.props.value - 180}
                                    decimals={0}
                                    formattingFn={this.updateVolante}>
                        {
                            ({countUpRef}) => (
                                <span ref={countUpRef} className="volante-value">

                                </span>
                            )
                        }
                    </CountUpWrapper>
                    
                </div>
            </div>
        )
    }


    updateVolante(value) {
        var rotateComponent = this.rotateRef.current;

        if (rotateComponent) {
            rotateComponent.setAttribute("transform","rotate("+value+", 250, 167.5)");
        }

        return parseInt(value)+"°";
    }
}




export default Volante;