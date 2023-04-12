import React, { Component } from 'react'

import CountUpWrapper from '../components/countup-wrapper.js'

import chroma from 'chroma-js'

class CarOverlay extends Component {


    render() {

        var colorScale = chroma.scale(['#000000', '#7f0f0c']).domain([80,200]);

        

        return (
                
            <svg version="1.1" baseProfile="full"
                viewBox="0 0 1240 1080" preserveAspectRatio="xMidYMid meet" id="svg_document" style={{zoom: 1, maxHeight: "100%"}}>
            
                {/* <title id="svg_document_title">Untitled.svg</title> */}
                
                <g id="main_group">
                    <rect id="background_rect" fill="black" x="0px" y="0px" width="1240px" height="1080px" visibility="hidden">
                    </rect>
                    <image x="0px" height="1080px" y="0px" id="image1"
                        xlinkHref="/static/images/carro-lowerresolution.png"
                        xlinkRole="/static/images/carro-lowerresolution.png"
                        width="1240px" d="" preserveAspectRatio="xMidYMid meet" transform=""></image>
                </g>
                <g transform="" id="IMD-INFO">
                    <path stroke="darkgreen" strokeWidth="2px" id="path12"
                        d="M694,834 l100,0 a10,10 90 0 0 10,-10 l0,-250 a10,10 90 0 1 10,-10 l100,0 " fill="none" transform="">
                    </path>
                    <path stroke="darkgreen" strokeWidth="6" id="path11"
                        d="M893,398 l0,350 a10,10 90 0 0 10,10 l300,0 a10,10 90 0 0 10,-10 l0,-350 a10,10 90 0 0 -10,-10 l-300,0 a10,10 90 0 0 -10,10 "
                        fill="black" strokeLinecap="butt" transform="" strokeLinejoin="miter"></path>
                    <g id="IMD" transform="">
                        <g transform="" id="TORQUE-IMD">
                            <image x="918px" height="70px" y="502px" id="image13"
                                xlinkHref="/static/SVGs/gears.svg"
                                xlinkRole="/static/SVGs/gears.svg"
                                width="70px" preserveAspectRatio="xMidYMid meet" transform=""></image>
                                <CountUpWrapper end={((this.props.engine || {}).torque || {}).rightEngine/10 || 0}
                                                decimals={0}>
                                    {
                                        ({countUpRef}) => (
                                            <text ref={countUpRef} className="carro-overlay-value" stroke="none" id="text45" strokeWidth="1px" x="1080px"
                                            textRendering="geometricPrecision" y="568px" fontFamily="Exo" fill="whitesmoke" fontSize="25px"
                                            transform="" textAnchor="end"></text>
                                        )
                                    }
                                </CountUpWrapper>
                                <text stroke="none" className="carro-overlay-value"  id="text46" strokeWidth="1px" x="1088px" textRendering="geometricPrecision" y="568px" fontFamily="Exo"
                                fill="whitesmoke" fontSize="25px" transform="" textAnchor="start">%</text><text stroke="none"
                                    id="text47" strokeWidth="1px" x="995px" fontWeight="bold"
                                textRendering="geometricPrecision" fontFamily="Exo" fill="whitesmoke" fontSize="30px" y="535px"
                                transform="" textAnchor="start">TORQUE</text>
                        </g>
                        <g transform="" id="IMD-TITLE"><text stroke="none" id="text54"
                                strokeWidth="1px" x="897px" fontWeight="bold" textRendering="geometricPrecision"
                                fontFamily="Exo" fill="whitesmoke" fontSize="38px" y="436px" transform=""
                                textAnchor="start">INVERSOR/MOTOR</text><text stroke="none"
                                id="text55" strokeWidth="1px" x="1200px" fontWeight="bold" textRendering="geometricPrecision"
                                fontFamily="Exo" fill="whitesmoke" fontSize="38px" y="474px" transform=""
                                textAnchor="end">DIREITO</text></g>
                        {/* <g transform="" id="T1-IMD">
                            <image x="1138px" height="70px" y="584px" id="image14"
                                xlinkHref="/static/SVGs/termometer.svg"
                                xlinkRole="/static/SVGs/termometer.svg"
                                width="70px" preserveAspectRatio="xMidYMid meet" transform=""></image>
                                <CountUpWrapper end={((this.props.inverters || {}).temperature || {}).right1/10 || 0}
                                                decimals={0}>
                                    {
                                        ({countUpRef}) => (
                                            <text ref={countUpRef} className="carro-overlay-value" stroke="none"
                                                id="text48" strokeWidth="1px" x="971px"
                                            textRendering="geometricPrecision" y="647px" fontFamily="Exo" fill="whitesmoke" fontSize="25px"
                                            transform="" textAnchor="end"></text>
                                        )
                                    }
                                </CountUpWrapper>
                                <text stroke="none"  id="text49" className="carro-overlay-value"
                                strokeWidth="1px" x="977px" textRendering="geometricPrecision" y="647px" fontFamily="Exo"
                                fill="whitesmoke" fontSize="25px" transform="" textAnchor="start">ºC</text><text stroke="none"
                                    id="text50" strokeWidth="1px" x="904px" fontWeight="bold"
                                textRendering="geometricPrecision" fontFamily="Exo" fill="whitesmoke" fontSize="30px" y="614px"
                                transform="" textAnchor="start">OI</text>
                        </g> */}
                        {/* <g transform="" id="T2-IMD">
                            <image x="900px" height="70px" y="676px" id="image15"
                                xlinkHref="/static/SVGs/termometer.svg"
                                xlinkRole="/static/SVGs/termometer.svg"
                                width="70px" preserveAspectRatio="xMidYMid meet" transform=""></image>
                                <CountUpWrapper end={((this.props.inverters || {}).temperature || {}).right2/10 || 0}
                                                decimals={0}>
                                    {
                                        ({countUpRef}) => (
                                            <text ref={countUpRef} className="carro-overlay-value" stroke="none"
                                                id="text51" strokeWidth="1px" x="1143px"
                                            textRendering="geometricPrecision" y="740px" fontFamily="Exo" fill="whitesmoke" fontSize="25px"
                                            transform="" textAnchor="end"></text>
                                        )
                                    }
                                </CountUpWrapper>
                                <text stroke="none"  id="text52" className="carro-overlay-value"
                                strokeWidth="1px" x="1175px" textRendering="geometricPrecision" y="740px" fontFamily="Exo"
                                fill="whitesmoke" fontSize="25px" transform="" textAnchor="end">ºC</text><text stroke="none"
                                    id="text53" strokeWidth="1px" x="955px" fontWeight="bold"
                                textRendering="geometricPrecision" fontFamily="Exo" fill="whitesmoke" fontSize="30px" y="704px"
                                transform="" textAnchor="start">TEMPERATURA 2</text>
                        </g> */}
                        <line stroke="#858787" y1="491px" strokeWidth="3px" x1="906px" id="line7" y2="491px" x2="1201px"
                            transform="" visibility="visible"></line>
                    </g>
                    <circle stroke="whitesmoke" cx="694px" visibility="visible" strokeWidth="3px" id="circle3" cy="833px"
                        fill="darkgreen" r="21px" transform=""></circle>
                </g>
                <g transform="" id="IME-INFO">
                    <path stroke="darkgreen" transform="" strokeWidth="6" id="path8"
                        d="M23,400 l0,350 a10,10 90 0 0 10,10 l300,0 a10,10 90 0 0 10,-10 l0,-350 a10,10 90 0 0 -10,-10 l-300,0 a10,10 90 0 0 -10,10 "
                        fill="black" strokeLinecap="butt" strokeLinejoin="miter"></path>
                    <g id="IME" transform="">
                        <g transform="" id="TORQUE-IME">
                                <CountUpWrapper end={((this.props.engine || {}).torque || {}).leftEngine/10 || 0}
                                                decimals={0}>
                                    {
                                        ({countUpRef}) => (
                                            <text ref={countUpRef} className="carro-overlay-value" stroke="none"  id="text42"
                                            strokeWidth="1px" x="208px" textRendering="geometricPrecision" y="566px" fontFamily="Exo"
                                            fill="whitesmoke" fontSize="25px" transform="" textAnchor="end"></text>
                                        )
                                    }
                                </CountUpWrapper>
                                <text stroke="none"
                                    id="text43" strokeWidth="1px" x="216px" className="carro-overlay-value"
                                textRendering="geometricPrecision" y="566px" fontFamily="Exo" fill="whitesmoke" fontSize="25px"
                                transform="" textAnchor="start">%</text><text stroke="none"  id="text44"
                                strokeWidth="1px" x="123px" fontWeight="bold" textRendering="geometricPrecision"
                                fontFamily="Exo" fill="whitesmoke" fontSize="30px" y="533px" transform=""
                                textAnchor="start">TORQUE</text>
                            <image x="42px" height="70" y="504px" id="image10"
                                xlinkHref="/static/SVGs/gears.svg"
                                xlinkRole="/static/SVGs/gears.svg"
                                width="70" preserveAspectRatio="xMidYMid meet" transform=""></image>
                        </g>
                        {/* <g transform="" id="T1-IME">
                                <CountUpWrapper end={((this.props.inverters || {}).temperature || {}).left1/10 || 0}
                                                decimals={0}>
                                    {
                                        ({countUpRef}) => (
                                            <text ref={countUpRef} className="carro-overlay-value" stroke="none"  id="text39" strokeWidth="1px"
                                            x="99px" textRendering="geometricPrecision" y="645px" fontFamily="Exo" fill="whitesmoke"
                                            fontSize="25px" transform="" textAnchor="end"></text>
                                        )
                                    }
                                </CountUpWrapper>
                                <text stroke="none"
                                    id="text40" strokeWidth="1px" x="105px" className="carro-overlay-value"
                                textRendering="geometricPrecision" y="645px" fontFamily="Exo" fill="whitesmoke" fontSize="25px"
                                transform="" textAnchor="start">ºC</text><text stroke="none" 
                                id="text41" strokeWidth="1px" x="32px" fontWeight="bold" textRendering="geometricPrecision"
                                fontFamily="Exo" fill="whitesmoke" fontSize="30px" y="612px" transform=""
                                textAnchor="start">TEMPERATURA 1</text>
                            <image x="268px" height="70px" y="585px" id="image11"
                                xlinkHref="/static/SVGs/termometer.svg"
                                xlinkRole="/static/SVGs/termometer.svg"
                                width="70px" preserveAspectRatio="xMidYMid meet" transform=""></image>
                        </g> */}
                        {/* <g transform="" id="T2-IME">
                                <CountUpWrapper end={((this.props.inverters || {}).temperature || {}).left2/10 || 0}
                                                decimals={0}>
                                    {
                                        ({countUpRef}) => (
                                            <text ref={countUpRef} className="carro-overlay-value" stroke="none"  id="text36" strokeWidth="1px"
                                            x="271px" textRendering="geometricPrecision" y="738px" fontFamily="Exo" fill="whitesmoke"
                                            fontSize="25px" transform="" textAnchor="end"></text>
                                        )
                                    }
                                </CountUpWrapper>
                                <text stroke="none" className="carro-overlay-value"
                                    id="text37" strokeWidth="1px" x="303px"
                                textRendering="geometricPrecision" y="738px" fontFamily="Exo" fill="whitesmoke" fontSize="25px"
                                transform="" textAnchor="end">ºC</text><text stroke="none"  id="text38"
                                strokeWidth="1px" x="83px" fontWeight="bold" textRendering="geometricPrecision" fontFamily="Exo"
                                fill="whitesmoke" fontSize="30px" y="702px" transform="" textAnchor="start">TEMPERATURA 2</text>
                            <image x="26px" height="70px" y="675px" id="image12"
                                xlinkHref="/static/SVGs/termometer.svg"
                                xlinkRole="/static/SVGs/termometer.svg"
                                width="70px" preserveAspectRatio="xMidYMid meet" transform=""></image>
                        </g> */}
                        <line stroke="#858787" y1="489px" strokeWidth="3px" x1="34px" id="line6" y2="489px" x2="329px" transform=""
                            visibility="visible"></line>
                        <g transform="" id="IME-TITLE"><text stroke="none" id="text33"
                                strokeWidth="1px" x="25px" fontWeight="bold" textRendering="geometricPrecision" fontFamily="Exo"
                                fill="whitesmoke" fontSize="38px" y="434px" transform=""
                                textAnchor="start">INVERSOR/MOTOR</text><text stroke="none" 
                                id="text34" strokeWidth="1px" x="25px" fontWeight="bold" textRendering="geometricPrecision"
                                fontFamily="Exo" fill="whitesmoke" fontSize="38px" y="472px" transform=""
                                textAnchor="start">ESQUERDO</text></g>
                    </g>
                    <circle stroke="whitesmoke" cx="526px" strokeWidth="3px" id="circle2" cy="833px" fill="darkgreen" r="21px"
                        transform=""></circle>
                    <path stroke="darkgreen" id="path10" strokeWidth="2px"
                        d="M524,834 l-80,0 a10,10 90 0 1 -10,-10 l0,-250 a10,10 90 0 0 -10,-10 l-80,0 " fill="none" transform="">
                    </path>
                </g>
                <g transform="" id="roda-bl">
                    <polygon points="436.552521,892.983032 436.552521,1070.48291 441.552521,1063.98291 441.552521,898.483032"
                        stroke="none" strokeWidth="3px" fill={colorScale(((this.props.tires || {}).temperature || {}).backLeft/100)} transform="rotate(-1 440 984.75)" id="polygon4"></polygon>
                    <polygon points="379.061279,891.979614 379.061279,1069.479614 384.061279,1062.979614 384.061279,897.479614"
                        stroke="none" strokeWidth="3px" id="polygon7" fill={colorScale(((this.props.tires || {}).temperature || {}).backLeft/100)} transform="rotate(179 382.043732 981.738159)">
                    </polygon>
                    <rect stroke="none" x="387.5px" height="179.5px" y="893px" strokeWidth="3px" width="46px" id="rect4"
                        fill={colorScale(((this.props.tires || {}).temperature || {}).backLeft/100)} transform="rotate(-1 410.5 982.75)"></rect>
                </g>
                <g transform="" id="roda-fl">
                    <polygon points="380,340.5 380,518 385,511.5 385,346" stroke="none" strokeWidth="3px" fill={colorScale(((this.props.tires || {}).temperature || {}).frontLeft/100)}
                        transform="rotate(180 383 427.25)" id="polygon8"></polygon>
                    <polygon points="437,337 437,514.5 442,508 442,342.5" stroke="none" strokeWidth="3px" fill={colorScale(((this.props.tires || {}).temperature || {}).frontLeft/100)} transform=""
                        id="polygon3"></polygon>
                    <rect stroke="none" x="388px" height="179.5px" y="336.5px" id="rect1" strokeWidth="3px" width="46px"
                        fill={colorScale(((this.props.tires || {}).temperature || {}).frontLeft/100)} transform=""></rect>
                </g>
                <g transform="" id="roda-fr">
                    <polygon points="846.5,336.5 846.5,514 851.5,507.5 851.5,342" stroke="none" strokeWidth="3px" fill={colorScale(((this.props.tires || {}).temperature || {}).frontRight/100)}
                        transform="" id="polygon5"></polygon>
                    <rect stroke="none" x="797.5px" height="179px" y="337px" strokeWidth="3px" id="rect3" width="46px" fill={colorScale(((this.props.tires || {}).temperature || {}).frontRight/100)}
                        transform=""></rect>
                    <polygon points="-29,339.5 -29,517 -24,510.5 -24,345" stroke="none" id="polygon1" strokeWidth="3px"
                        fill={colorScale(((this.props.tires || {}).temperature || {}).frontRight/100)} transform="rotate(180 383 427.25)"></polygon>
                </g>
                <g transform="" id="roda-br">
                    <polygon points="847,892 847,1069.5 852,1063 852,897.5" stroke="none" strokeWidth="3px" id="polygon2"
                        fill={colorScale(((this.props.tires || {}).temperature || {}).backRight/100)} transform=""></polygon>
                    <polygon points="-29.5,-216 -29.5,-38.5 -24.5,-45 -24.5,-210.5" stroke="none" strokeWidth="3px" id="polygon6"
                        fill={colorScale(((this.props.tires || {}).temperature || {}).backRight/100)} transform="rotate(180 383 427.25)"></polygon>
                    <rect stroke="none" x="798px" height="180.5px" y="891.5px" strokeWidth="3px" id="rect2" width="46px"
                        fill={colorScale(((this.props.tires || {}).temperature || {}).backRight/100)} transform=""></rect>
                </g>
                <g transform="" id="PTE-INFO">
                    <path stroke="darkgreen" strokeWidth="6" id="path9"
                        d="M25,808 l0,250 a10,10 90 0 0 10,10 l300,0 a10,10 90 0 0 10,-10 l0,-250 a10,10 90 0 0 -10,-10 l-300,0 a10,10 90 0 0 -10,10 "
                        fill="black" strokeLinecap="butt" transform="" strokeLinejoin="miter"></path>
                    <path stroke="darkgreen" strokeWidth="2px" id="path6" d="M412,919 l0,-80 a10,10 90 0 0 -10,-10 l-60,0 "
                        fill="none" transform=""></path>
                    <circle stroke="#000000" transform="" strokeWidth="0px" id="circle1" cy="915px" fill="darkgreen" r="11px"
                        cx="412px"></circle>
                    <g id="PTE" transform="">
                        <line stroke="#858787" y1="900px" strokeWidth="3px" x1="37px" id="line4" y2="900px" x2="332px"
                            transform=""></line>
                        <g transform="" id="VEL-TE">
                            <image x="44px" height="70px" y="916px" id="image7"
                                xlinkHref="/static/SVGs/speedometer.svg"
                                xlinkRole="/static/SVGs/speedometer.svg"
                                width="70px" preserveAspectRatio="xMidYMid meet" transform=""></image>
                                <CountUpWrapper end={((this.props.tires || {}).speed || {}).backLeft || 0}
                                                decimals={0}>
                                    {
                                        ({countUpRef}) => (
                                            <text ref={countUpRef} className="carro-overlay-value" stroke="none"
                                                strokeWidth="1px" x="231px" textRendering="geometricPrecision"
                                            y="975px" fontFamily="Exo" fill="whitesmoke" fontSize="25px" transform="" textAnchor="end"
                                            id="text25"></text>
                                        )
                                    }
                                </CountUpWrapper>
                                <text stroke="none"  className="carro-overlay-value" strokeWidth="1px" x="271px"
                                textRendering="geometricPrecision" y="976px" fontFamily="Exo" fill="whitesmoke" fontSize="25px"
                                transform="" textAnchor="middle" id="text26">RPM</text><text stroke="none"
                                    id="text27" strokeWidth="1px" x="210px" fontWeight="bold"
                                textRendering="geometricPrecision" fontFamily="Exo" fill="whitesmoke" fontSize="30px" y="945px"
                                transform="" textAnchor="middle">VELOCIDADE</text>
                        </g>
                        <g transform="" id="PTE-TEXT"><text stroke="none" strokeWidth="1px" x="39px"
                                fontWeight="bold" textRendering="geometricPrecision" fontFamily="Exo" fill="whitesmoke"
                                fontSize="40px" y="882px" transform="" textAnchor="start" id="text28">ESQUERDO</text><text
                                stroke="none" strokeWidth="1px" x="39px" fontWeight="bold"
                                textRendering="geometricPrecision" fontFamily="Exo" fill="whitesmoke" fontSize="40px" y="842px"
                                transform="" textAnchor="start" id="text29">PNEU TRASEIRO</text></g>
                        {/* <g transform="" id="TEMP-TE"><text stroke="none"  strokeWidth="1px" x="266px"
                                fontWeight="bold" textRendering="geometricPrecision" fontFamily="Exo" fill="whitesmoke"
                                fontSize="30px" y="1020px" transform="" textAnchor="end" id="text30">TEMPERATURA</text>
                                <CountUpWrapper end={((this.props.tires || {}).temperature || {}).backLeft/100 || 0}
                                                decimals={0}>
                                    {
                                        ({countUpRef}) => (
                                            <text ref={countUpRef} className="carro-overlay-value"
                                            stroke="none"  strokeWidth="1px" x="101px"
                                            textRendering="geometricPrecision" y="1051px" fontFamily="Exo" fill="whitesmoke" fontSize="25px"
                                            transform="" textAnchor="end" id="text31"></text>
                                        )
                                    }
                                </CountUpWrapper>
                                <text stroke="none"  className="carro-overlay-value"
                                strokeWidth="1px" x="137px" textRendering="geometricPrecision" y="1051px" fontFamily="Exo"
                                fill="whitesmoke" fontSize="25px" transform="" textAnchor="end" id="text32">ºC</text>
                            <image x="253px" height="70px" y="989px" id="image8"
                                xlinkHref="/static/SVGs/termometer.svg"
                                xlinkRole="/static/SVGs/termometer.svg"
                                width="70px" preserveAspectRatio="xMidYMid meet" transform=""></image>
                        </g> */}
                    </g>
                </g>
                <g transform="" id="PDE-INFO">
                    <circle stroke="#000000" cx="412px" strokeWidth="0px" id="circle4" cy="353px" fill="darkgreen" r="11px"
                        transform=""></circle>
                    <path stroke="darkgreen" id="path1" strokeWidth="2px" d="M412,357 l0,-253 a10,10 90 0 0 -10,-10 l-60,0 "
                        fill="none" transform=""></path>
                    <path stroke="darkgreen" strokeWidth="6" id="path4"
                        d="M21,88 l0,250 a10,10 90 0 0 10,10 l300,0 a10,10 90 0 0 10,-10 l0,-250 a10,10 90 0 0 -10,-10 l-300,0 a10,10 90 0 0 -10,10 "
                        fill="black" strokeLinecap="butt" transform="" strokeLinejoin="miter"></path>
                    <g id="PDE" transform="">
                        <g transform="" id="PDE-TEXT"><text stroke="none" id="text10"
                                strokeWidth="1px" x="36px" fontWeight="bold" textRendering="geometricPrecision" fontFamily="Exo"
                                fill="whitesmoke" fontSize="35px" y="162px" transform="" textAnchor="start">ESQUERDO</text><text
                                stroke="none" id="text9" strokeWidth="1px" x="180px"
                                fontWeight="bold" textRendering="geometricPrecision" fontFamily="Exo" fill="whitesmoke"
                                fontSize="40px" y="122px" transform="" textAnchor="middle">PNEU DIANTEIRO</text></g>
                        <line stroke="#858787" y1="175px" strokeWidth="3px" x1="32px" id="line2" y2="175px" x2="327px"
                            transform=""></line>
                        <g transform="" id="VEL-DE">
                            <image x="40px" height="70px" y="186px" id="image4"
                                xlinkHref="/static/SVGs/speedometer.svg"
                                xlinkRole="/static/SVGs/speedometer.svg"
                                width="70px" preserveAspectRatio="xMidYMid meet" transform=""></image>
                                <CountUpWrapper end={((this.props.tires || {}).speed || {}).frontLeft/10/3.6/(52.07/100*Math.PI)*60 || 0}
                                                decimals={0}>
                                    {
                                        ({countUpRef}) => (
                                            <text ref={countUpRef} className="carro-overlay-value" stroke="none"
                                                id="text12" strokeWidth="1px" x="228px"
                                            textRendering="geometricPrecision" y="251px" fontFamily="Exo" fill="whitesmoke" fontSize="25px"
                                            transform="" textAnchor="end"></text>
                                        )
                                    }
                                </CountUpWrapper>
                                <text stroke="none"  id="text13" className="carro-overlay-value"
                                strokeWidth="1px" x="268px" textRendering="geometricPrecision" y="252px" fontFamily="Exo"
                                fill="whitesmoke" fontSize="25px" transform="" textAnchor="middle">RPM</text><text stroke="none"
                                    id="text11" strokeWidth="1px" x="207px" fontWeight="bold"
                                textRendering="geometricPrecision" fontFamily="Exo" fill="whitesmoke" fontSize="30px" y="221px"
                                transform="" textAnchor="middle">VELOCIDADE</text>
                        </g>
                        {/* <g transform="" id="TEMP-DE"><text stroke="none"  id="text14" strokeWidth="1px"
                                x="263px" fontWeight="bold" textRendering="geometricPrecision" fontFamily="Exo" fill="whitesmoke"
                                fontSize="30px" y="296px" transform="" textAnchor="end">TEMPERATURA</text>
                                <CountUpWrapper end={((this.props.tires || {}).temperature || {}).frontLeft/100 || 0}
                                                decimals={0}>
                                    {
                                        ({countUpRef}) => (
                                            <text ref={countUpRef} className="carro-overlay-value" stroke="none"
                                                id="text15" strokeWidth="1px" x="98px"
                                            textRendering="geometricPrecision" y="327px" fontFamily="Exo" fill="whitesmoke" fontSize="25px"
                                            transform="" textAnchor="end"></text>
                                        )
                                    }
                                </CountUpWrapper>
                                <text stroke="none"  id="text16" className="carro-overlay-value"
                                strokeWidth="1px" x="134px" textRendering="geometricPrecision" y="327px" fontFamily="Exo"
                                fill="whitesmoke" fontSize="25px" transform="" textAnchor="end">ºC</text>
                            <image x="252px" height="70px" y="262px" id="image6"
                                xlinkHref="/static/SVGs/termometer.svg"
                                xlinkRole="/static/SVGs/termometer.svg"
                                width="70px" preserveAspectRatio="xMidYMid meet" transform=""></image>
                        </g> */}
                    </g>
                </g>
                <g transform="" id="PDD-INFO">
                    <path stroke="darkgreen" strokeWidth="2px" id="path5" d="M823,352 l0,-253 a10,10 90 0 1 10,-10 l60,0 "
                        fill="none" transform=""></path>
                    <path stroke="darkgreen" strokeWidth="6" id="path3"
                        d="M894,88 l0,250 a10,10 90 0 0 10,10 l300,0 a10,10 90 0 0 10,-10 l0,-250 a10,10 90 0 0 -10,-10 l-300,0 a10,10 90 0 0 -10,10 "
                        fill="black" strokeLinecap="butt" transform="" strokeLinejoin="miter"></path>
                    <g id="PDD" transform="">
                        {/* <g transform="" id="TEMP-PDD">
                            <image x="1124px" height="70" y="265px" id="image3"
                                xlinkHref="/static/SVGs/termometer.svg"
                                xlinkRole="/static/SVGs/termometer.svg"
                                width="70" preserveAspectRatio="xMidYMid meet" transform=""></image><text stroke="none"
                                    id="text2" strokeWidth="1px" x="1131px" fontWeight="bold"
                                textRendering="geometricPrecision" fontFamily="Exo" fill="whitesmoke" fontSize="30px" y="292px"
                                transform="" textAnchor="end">TEMPERATURA</text>
                                <CountUpWrapper end={((this.props.tires || {}).temperature || {}).frontRight/10/3.6/(52.07/100*Math.PI)*60 || 0}
                                                decimals={0}>
                                    {
                                        ({countUpRef}) => (
                                            <text ref={countUpRef} className="carro-overlay-value" stroke="none" 
                                            id="text4" strokeWidth="1px" x="966px" textRendering="geometricPrecision" fontFamily="Exo"
                                            y="323px" fill="whitesmoke" fontSize="25px" transform="" textAnchor="end"></text>
                                        )
                                    }
                                </CountUpWrapper>
                                <text
                                stroke="none"  id="text5" strokeWidth="1px" x="1002px" className="carro-overlay-value"
                                textRendering="geometricPrecision" y="323px" fontFamily="Exo" fill="whitesmoke" fontSize="25px"
                                transform="" textAnchor="end">ºC</text>
                        </g> */}
                        <g transform="" id="VEL-DD">
                            <image x="907px" height="70" y="185px" id="image2"
                                xlinkHref="/static/SVGs/speedometer.svg"
                                xlinkRole="/static/SVGs/speedometer.svg"
                                width="70" preserveAspectRatio="xMidYMid meet" transform=""></image>
                            <line stroke="#858787" y1="175px" x1="908px" strokeWidth="3px" y2="175px" x2="1203px" transform=""
                                id="line3"></line><text stroke="none"  id="text6" strokeWidth="1px"
                                x="1073px" fontWeight="bold" textRendering="geometricPrecision" fontFamily="Exo"
                                fill="whitesmoke" fontSize="30px" y="217px" transform=""
                                textAnchor="middle">VELOCIDADE</text>
                                <CountUpWrapper end={((this.props.tires || {}).speed || {}).frontRight/10 || 0}
                                                decimals={0}>
                                    {
                                        ({countUpRef}) => (
                                            <text ref={countUpRef} className="carro-overlay-value" stroke="none"  id="text7"
                                            strokeWidth="1px" x="1098px" textRendering="geometricPrecision" y="247px" fontFamily="Exo"
                                            fill="whitesmoke" fontSize="25px" transform="" textAnchor="end"></text>
                                        )
                                    }
                                </CountUpWrapper>
                                <text stroke="none" className="carro-overlay-value"
                                    id="text8" strokeWidth="1px" x="1138px"
                                textRendering="geometricPrecision" y="248px" fontFamily="Exo" fill="whitesmoke" fontSize="25px"
                                transform="" textAnchor="middle">RPM</text>
                        </g>
                        <g transform="" id="PDD-TEXT"><text stroke="none" id="text1" strokeWidth="1px"
                                x="1050px" fontWeight="bold" textRendering="geometricPrecision" fontFamily="Exo"
                                fill="whitesmoke" fontSize="40px" y="122px" transform="" textAnchor="middle">PNEU
                                DIANTEIRO</text><text stroke="none" id="text3" strokeWidth="1px"
                                x="1124px" fontWeight="bold" textRendering="geometricPrecision" fontFamily="Exo"
                                fill="whitesmoke" fontSize="40px" y="163px" transform="" textAnchor="middle">DIREITO</text></g>
                        <line stroke="#858787" y1="175px" id="line1" x1="908px" strokeWidth="3px" y2="175px" x2="1203px"
                            transform=""></line>
                    </g>
                    <circle stroke="#000000" strokeWidth="0px" cy="353px" id="circle5" fill="darkgreen" r="11px" cx="823px"
                        transform=""></circle>
                </g>
                <g transform="" id="PTD-INFO">
                    <path stroke="darkgreen" strokeWidth="2px" id="path7" d="M824,907 l0,-80 a10,10 90 0 1 10,-10 l60,0 "
                        fill="none" transform=""></path>
                    <path stroke="darkgreen" strokeLinejoin="miter" strokeWidth="6" id="path2"
                        d="M893,804 l0,250 a10,10 90 0 0 10,10 l300,0 a10,10 90 0 0 10,-10 l0,-250 a10,10 90 0 0 -10,-10 l-300,0 a10,10 90 0 0 -10,10 "
                        fill="black" strokeLinecap="butt" transform=""></path>
                    <circle stroke="#000000" cx="824px" strokeWidth="0px" id="circle6" cy="911px" fill="darkgreen" r="11px"
                        transform=""></circle>
                    <g transform="" id="PTD">
                        <line stroke="#858787" y1="899px" strokeWidth="3px" x1="907px" id="line5" y2="899px" x2="1202px"
                            transform=""></line>
                        <g transform="" id="VEL-TD">
                            <image x="914px" height="70px" y="912px" id="image5"
                                xlinkHref="/static/SVGs/speedometer.svg"
                                xlinkRole="/static/SVGs/speedometer.svg"
                                width="70px" preserveAspectRatio="xMidYMid meet" transform=""></image>
                                <CountUpWrapper end={((this.props.tires || {}).speed || {}).backRight || 0}
                                                decimals={0}>
                                    {
                                        ({countUpRef}) => (
                                            <text ref={countUpRef} className="carro-overlay-value" stroke="none"
                                                id="text19" strokeWidth="1px" x="1101px"
                                            textRendering="geometricPrecision" y="974px" fontFamily="Exo" fill="whitesmoke" fontSize="25px"
                                            transform="" textAnchor="end"></text>
                                        )
                                    }
                                </CountUpWrapper>
                                <text stroke="none"  id="text20" className="carro-overlay-value"
                                strokeWidth="1px" x="1141px" textRendering="geometricPrecision" y="975px" fontFamily="Exo"
                                fill="whitesmoke" fontSize="25px" transform="" textAnchor="middle">RPM</text><text stroke="none"
                                    id="text21" strokeWidth="1px" x="1080px" fontWeight="bold"
                                textRendering="geometricPrecision" fontFamily="Exo" fill="whitesmoke" fontSize="30px" y="944px"
                                transform="" textAnchor="middle">VELOCIDADE</text>
                        </g>
                        <g id="PTD-TEXT" transform=""><text stroke="none" id="text17"
                                strokeWidth="1px" x="1180px" fontWeight="bold" textRendering="geometricPrecision"
                                fontFamily="Exo" fill="whitesmoke" fontSize="40px" y="881px" transform=""
                                textAnchor="end">DIREITO</text><text stroke="none" id="text18"
                                strokeWidth="1px" x="909px" fontWeight="bold" textRendering="geometricPrecision"
                                fontFamily="Exo" fill="whitesmoke" fontSize="40px" y="841px" transform="" textAnchor="start">PNEU
                                TRASEIRO</text></g>
                        {/* <g transform="" id="TEMP-TD">
                            <image x="1122px" height="70px" y="988px" id="image9"
                                xlinkHref="/static/SVGs/termometer.svg"
                                xlinkRole="/static/SVGs/termometer.svg"
                                width="70px" preserveAspectRatio="xMidYMid meet" transform=""></image><text stroke="none"
                                    id="text22" strokeWidth="1px" x="1136px" fontWeight="bold"
                                textRendering="geometricPrecision" fontFamily="Exo" fill="whitesmoke" fontSize="30px" y="1019px"
                                transform="" textAnchor="end">TEMPERATURA</text>
                                <CountUpWrapper end={((this.props.tires || {}).temperature || {}).backRight/100 || 0}
                                                decimals={0}>
                                    {
                                        ({countUpRef}) => (
                                            <text ref={countUpRef} className="carro-overlay-value" stroke="none" 
                                            id="text23" strokeWidth="1px" x="971px" textRendering="geometricPrecision" y="1050px"
                                            fontFamily="Exo" fill="whitesmoke" fontSize="25px" transform="" textAnchor="end"></text>
                                        )
                                    }
                                </CountUpWrapper>
                                <text className="carro-overlay-value"
                                stroke="none"  id="text24" strokeWidth="1px" x="1007px"
                                textRendering="geometricPrecision" y="1050px" fontFamily="Exo" fill="whitesmoke" fontSize="25px"
                                transform="" textAnchor="end">ºC</text>
                        </g>*/}
                    </g> 
                </g>
            </svg>

        )
    }
}

export default CarOverlay;