import React, { Component, useContext } from 'react';
import { DelayContext } from './contexts.js';
import CountUp from 'react-countup';


class CountUpWrapper extends Component {


    constructor(props) {
        super(props)

        // debugger;
        if (typeof (props.children) !== 'undefined') {
            this.childRef = React.createRef();
        }
        this.lastValue = 0;
        this.lastEnd = 0;
        this.lastComp = undefined;
    }

    render() {

        /*if (this.props.duration == 0 || this.context/1000 == 0) {
            // debugger;
            if (typeof (this.props.children) !== 'undefined') {
                // debugger;
                let comp = this.props.children(this.childRef);
                console.log(comp);
                while (typeof (comp.props.children) !== 'undefined')
                    comp = comp.props.children
                let Ded = comp;
                let asd = <ZeroDurationComponent component={comp}/>;
                // debugger;
                // d.innerHTML = this.props.end;
                
                // if (d.type === 'INPUT') {
                //     d.value = this.props.end;
                // }
                // else if (d.tagName === 'text' || self.d.tagName === 'tspan') {
                //     d.textContent = this.props.end;
                // }
                // else {
                //     d.innerHTML = this.props.end;
                // }
                return comp;
            } else {
                return (<span>{this.props.end}</span>)
            }
        } else {*/
            var p = this.props;
    
            const comp = (
                <CountComponent {...p}
                                start={this.lastValue}>
                    {p.children}
                </CountComponent>
            )
            
            if (p.end == this.lastEnd) 
                return this.lastComp || comp;
            
    
            this.lastValue = p.end;
    
            delete this.lastComp;
            this.lastComp = comp;
            this.lastEnd = p.end;
    
            return comp;
        //}

    }
    

    

}

CountUpWrapper.contextType = DelayContext;

function ZeroDurationComponent(props) {
    return (props.component)
}

// function RetrieveDuration(props) {
//     return props.duration || useContext(DelayContext)/1000;
// }

function CountComponent(props) {
    // debugger;
    var decs = props.decimals ? props.decimals : props.decimals == 0 ? 0: 2;
    return (
        <CountUp {...props}
                 decimals={decs}
                 duration={props.duration || useContext(DelayContext)/1000}
                 delay={props.delay || 0}
                 useEasing={props.useEasing || false}>
            {props.children}
        </CountUp>
    )
}


export default CountUpWrapper;