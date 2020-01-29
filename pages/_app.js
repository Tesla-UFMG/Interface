import React from 'react'
import App, { Container } from 'next/app'
import { ToastContainer, toast, Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Link from 'next/link';

import Nprogress from '../node_modules/nprogress/nprogress.css';
import NProgress from 'nprogress'
import Router from 'next/router'

import CountUpWrapper from '../components/countup-wrapper.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../static/styles/styles.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faThermometerHalf, faTachometerAlt, faBatteryThreeQuarters } from '@fortawesome/free-solid-svg-icons'

library.add(faBolt,
            faThermometerHalf,
            faTachometerAlt,
            faBatteryThreeQuarters);


Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  updateRSSI(rssi) {
    // debugger;
    //se o valor for não negativo, significa que esta conecteado e recebeu um valor em -rssi.
    //se for negatico, significa que nao esta conectado
    let rssiValue = rssi >= 0 ? -rssi : "-";
    this.setState({rssiValue: rssiValue});
    
  }

  constructor(props) {
    super(props)
    this.updateRSSI = this.updateRSSI.bind(this);
    this.setChildDelay = this.setChildDelay.bind(this);
    this.rssiHolder = {
      updateRSSI: this.updateRSSI,
      setChildDelay: this.setChildDelay
    }
    this.state = {
      rssiValue: 0
    }

    this.childComponentDelay = 0;

  }

  setChildDelay(delay) {
    this.childComponentDelay = delay;
  }

  render () {
    const { Component, pageProps } = this.props

    

    return (
      <Container>
        
        <style dangerouslySetInnerHTML={ { __html: Nprogress } } />

        <style dangerouslySetInnerHTML={{__html: `
          
          
            @font-face {
              font-family: 'Advent Pro';
              font-style: normal;
              font-weight: 400;
              src: url('../static/fonts/Advent_Pro/AdventPro-Regular.ttf') format('truetype');
          }
          
          @font-face {
              font-family: 'Exo';
              font-style: normal;
              font-weight: 400;
              src: url('../static/fonts/Exo/Exo-Regular.ttf') format('truetype')
          }
          
          @font-face {
              font-family: 'Exo';
              font-style: normal;
              font-weight: 100;
              src: url('../static/fonts/Exo/Exo-Thin.ttf') format('truetype')
          }
          
          @font-face {
              font-family: 'Exo';
              font-style: normal;
              font-weight: 700;
              src: url('../static/fonts/Exo/Exo-Bold.ttf') format('truetype')
          } 
        
          `}}/>

        
        <div className="app-top-menu">
            <div className="menu-image-wrapper">
              <img src="../static/images/logo-fundo-preto.png"></img>
            </div>

            <div className="menu-buttons-wrapper">
              <Link href="/">
                <div className={"menu-button"+(this.props.router.asPath == "/" ? " selected" : "") }>
                  <div className="icon-wrapper">
                    <img src="../static/images/dashboard-black.png"></img>
                    <img className="top" src="../static/images/dashboard-white.png"></img>
                  </div>
                  <span className="menu-text">GERAL</span>
                </div>
              </Link>

              <Link href="/graficos">
                <div className={"menu-button"+(this.props.router.asPath == "/graficos" ? " selected" : "" )}>
                  <div className="icon-wrapper">
                    <img src="static/SVGs/graph-black.svg"></img>
                    <img className="top" src="static/SVGs/graph-white.svg"></img>
                  </div>
                  <span className="menu-text">GRÁFICOS</span>
                </div>
              </Link>

              <Link href="/controle">
                <div className={"menu-button"+(this.props.router.asPath == "/controle" ? " selected" : "" )}>
                  <div className="icon-wrapper">
                    <img src="../static/images/car-black.png"></img>
                    <img className="top" src="../static/images/car-white.png"></img>
                  </div>
                  <span className="menu-text">CONTROLE</span>
                </div>
              </Link>

              
              <Link href="/packs">
                <div className={"menu-button"+(this.props.router.asPath == "/packs" ? " selected" : "") }>
                  <div className="icon-wrapper">
                    <img src="../static/images/batteries-black.png"></img>
                    <img className="top" src="../static/images/batteries-white.png"></img>
                  </div>
                  <span className="menu-text">PACKS</span>
                </div>
              </Link>

            </div>
            <div className="additional-information">
              <div className="signal-indicator">  
                <div className="rssi-title">RSSI:</div>
                <img src={"../static/SVGs/"+(typeof(this.state.rssiValue) === 'string' ? "no" : this.state.rssiValue >= -50 ? "strong" : this.state.rssiValue >= -70 ? "half" : "low")+"-signal.svg"}></img>
                <div className="rssi-value">
                  <CountUpWrapper end={this.state.rssiValue}
                                  decimals={0}
                                  duration={this.childComponentDelay/1000*7}>
                    {
                      ({countUpRef}) => (
                          <span ref={countUpRef}></span>
                      )
                    }
                  </CountUpWrapper>
                  {/* <span>{this.state.rssiValue}</span> */}
                  <span>&nbsp;dBm</span>
                </div>
              </div>
              <div className="issues-indicator">
                <span ref={this.issuesQuanComponent}></span>
                <img  ref={this.issuesIconComponent} src="../static/SVGs/ok.svg"></img>
              </div>

            </div>


        </div>

        <script src='nprogress.js'></script>
        <link rel='stylesheet' href='nprogress.css'/>

        <Component {...pageProps} {...this.rssiHolder}/>
        <ToastContainer position={toast.POSITION.BOTTOM_RIGHT}
                        transition={Slide}/>
      </Container>
    )
  }

  
}

export default MyApp