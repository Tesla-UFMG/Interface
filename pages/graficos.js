import React, { Component } from 'react'
import DataFetcher from '../components/data-fetcher.js'


import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, ResponsiveContainer, Label } from 'recharts';


import {DelayContext} from '../components/contexts.js';
import {availablePlotOptions, persistanceTimeout, pointsPerSecond} from '../components/constants.js';


const DelayProvider = DelayContext.Provider;


var i = 1;


class Graficos extends DataFetcher {

    constructor(props) {
        super(props)

        this.delay = 1000/pointsPerSecond;
        this.rootPage = "plot/"
        this.page = ""

        this.state.plotData = [{name: 'Page 0', value: Math.random()*100}];
        this.state.data = [];

        this.generateData = this.generateData.bind(this);

        this.dado1Change = this.dado1Change.bind(this);
        this.dado2Change = this.dado2Change.bind(this);
        this.buildPage = this.buildPage.bind(this);

        this.state.dado1 = "null";
        this.state.dado2 = "null";
        this.shouldFetch = true;

        this.lastTimestamps = [0, 0];
        this.lastData = [];

        this.lastMergedTimestamps = [0, 0];
        this.lastMergedData = [];

        this.mappedPlotingFields = {};

        this.mapPlotFields();
        

        // this.itemsPerFetch = persistanceTimeout/1000 * receivePerSecond;
        // this.actualPerSecond = this.itemsPerFetch / persistanceTimeout/10000;
        // this.reduceRatio = parseInt(receivePerSecond / pointsPerSecond);
    }

    async mapPlotFields() {
        this.mappedPlotingFields = availablePlotOptions.reduce((obj, item, index) => (obj[item.index] = index, obj), {});
    }

    generateData() {
        var prototype = {name: 'Page '+i, value: Math.random()*100}
        i++;
        var data = this.state.plotData;
        data.push(prototype);
        // console.log(data);
        this.setState({plotData: data});
    }

    componentDidMount() {
        super.componentDidMount();
        this.stopFetching();
        super.doFetch();
        // this.shouldFetch = true;
        // console.log("child did mount");
        // this.grTimer = setInterval(this.generateData, 1000);
    }

    componentWillUnmount() {
        super.componentWillUnmount();
        // clearInterval(this.grTimer);
    }

    dado1Change(event) {
        console.log("dado 1 changed")
        const id = event.target.value;
        // debugger;
        this.setState({dado1: id}, this.buildPage);

        this.lastTimestamps[0] = 0;
        this.lastData[0] = [];
        this.lastMergedData = [];
        this.lastMergedTimestamps[0] = 0;

        // this.resetData();
    }

    dado2Change(event) {
        console.log("dado 2 changed")
        const id =  event.target.value;
        this.setState({dado2: id}, this.buildPage);
        // this.resetData();

        this.lastTimestamps[1] = 0;
        this.lastData[1] = [];
        this.lastMergedData = [];
        this.lastMergedTimestamps[1] = 0;
    }

    resetData() {
        
        
    }

    gaugeFrequency(filteredValues) {

        const iterationBasis = 20;
        const iterationQuan = (filteredValues.length-1 < iterationBasis ? filteredValues.length-1 : iterationBasis);
    
        // debugger;
        //calcula frequência de recebimento a partir dos primeiros iterationQuan itens, isso para definir a razão de redução
        let sumDiff1 = 0;
        for (var freqI = 0; freqI < iterationQuan-1; freqI++) {
            const diff1 = (filteredValues[freqI+1].timestamp-filteredValues[freqI].timestamp);
            sumDiff1 += diff1;
        }
        let sumDiff2 = 0;
        for (var freqI = filteredValues.length-1; freqI > filteredValues.length-iterationQuan-1; freqI--) {
            const diff2 = (filteredValues[freqI].timestamp-filteredValues[freqI-1].timestamp);
            sumDiff2 += diff2;
        }
        const afferedFrequency = 1000/((sumDiff1+sumDiff2)/(2*(iterationQuan-1)));

        const rat = parseInt(afferedFrequency / pointsPerSecond);

        const lastRatio = this.reduceRatio;

        //trava a redução em 1
        const newRatio = (rat > 1 ? rat : 1);

        //só se tiver um erro menor de 50% da última aferição, usa a nova aferição
        if (Math.abs(newRatio - lastRatio) < lastRatio*0.5) {
            this.reduceRatio = newRatio;
        //senao, calcula a frequencia novamente so que com todos os componentes
        } else {
            let sumDiff = 0;
            for (var freqI = 0; freqI < filteredValues.length-1; freqI++) {
                const diff = (filteredValues[freqI+1].timestamp-filteredValues[freqI].timestamp);
                sumDiff += diff;
            }
            const averageFreq = 1000/(sumDiff/(filteredValues.length-1));
            // debugger;
            const rat = parseInt(averageFreq / pointsPerSecond);

            //trava a redução em 1
            this.reduceRatio = (rat > 1 ? rat : 1);

        }

        console.log("Reduce ratio: "+this.reduceRatio);
    }

    treatData(data) {
        const actualDate = new Date().getTime();
        
        const compareFunction = (a, b) => a.timestamp - b.timestamp;
        const limitDate = new Date().getTime() - persistanceTimeout;

        var keys = [];

        // debugger;


        const lastMergedTimes = this.lastMergedTimestamps.slice(0);

        for (const key of Object.keys(data)) {
            if (isNaN(key)) continue;
            
            //TALVEZ N SEJA NECESSARIO
            let filteredValues = data[key].filter(entry => entry.timestamp >= limitDate);


            
            const lastTimestamp = this.lastTimestamps[keys.length];
            
            filteredValues.sort(compareFunction);

            this.lastTimestamps[keys.length] = filteredValues[filteredValues.length-1].timestamp;




            
            // debugger;


            this.gaugeFrequency(filteredValues);

            // const contIndex = filteredValues.findIndex(value => value.timestamp == lastTimestamp.crude);
            

            let newValues = []
            
            // debugger;

            let breakFlag = false;
            for(var j = filteredValues.length-1; j >= 0; j-=this.reduceRatio) {
                
                let v = Object.assign({},filteredValues[j]);
                // let sTime = 0, sVal = 0;
                // for (var k = 0; k < quanT; k++) {
                //     if (j+k >= filteredValues.length) break;
                //     sTime += filteredValues[j+k].timestamp;
                //     sVal += parseFloat(filteredValues[j+k].value);
                // }
                // v.value = sVal/k;
                // v.timestamp = sTime/k;
                // newValues.push(v);
                let sTime = 0, sVal = 0;
                let summedQuan = 0;
                for (var k = 0; k < this.reduceRatio; k++) {
                    if (j-k < 0) break;
                    if (filteredValues[j-k].timestamp == lastTimestamp) {
                        breakFlag = true;
                        if (k != 0) {
                            let el = newValues.pop();
                            sVal += el.value*this.reduceRatio;
                            sTime += el.timestamp*this.reduceRatio;
                            summedQuan += this.reduceRatio
                        }
                        break;
                    }
                    // if (filteredValues[j-k].value > sVal) sVal = filteredValues[j-k].value;
                    sVal += parseFloat(filteredValues[j-k].value);
                    sTime += filteredValues[j-k].timestamp;
                    summedQuan++;
                    // sVal += parseFloat(filteredValues[j+k].value);
                }
                //se a proxima iteração não conseguir agrupar reduceRatio elementos, entao agrupa eles na atual. isso reduz picos no grafico
                // if (!breakFlag && (j-k-this.reduceRatio < 0)) {
                //     j-=this.reduceRatio;
                //     summedQuan = 0;
                //     for (let k2 = 0; k2 < this.reduceRatio; k2++) {
                //         if (j-k2 < 0) break;
                //         if (filteredValues[j-k2].timestamp == lastTimestamp) {
                //             breakFlag = true;
                //             break;
                //         }
                //         // if (filteredValues[j-k].value > sVal) sVal = filteredValues[j-k].value;
                //         sVal += parseFloat(filteredValues[j-k2].value);
                //         sTime += filteredValues[j-k2].timestamp;
                //         summedQuan++;
                //         // sVal += parseFloat(filteredValues[j+k].value);
                //     }
                // }
                if (sTime != 0) {
                    v.value = sVal/summedQuan;
                    v.timestamp = sTime/summedQuan;
                    newValues.push(v);
                }
                if (breakFlag) break;
            }

            newValues = newValues.reverse();            
            // debugger;


            //GUARDA OS TIMESTAMPS JA FORMATADOS PARA DEPOIS AFERIR ONDE PARAR NO AGRUPAMENTO
            //TODO: TRAVANDO (DANDO UNDEFINED), CONSERTAR
            if (typeof newValues[newValues.length-1].timestamp == 'undefined')
                debugger;
            this.lastMergedTimestamps[keys.length] = newValues[newValues.length-1].timestamp;
            
            

            //se setado, entao encotrou um timestamp igual ao ultimo timestamp. entao reaproveita os ultimos dados
            if (breakFlag) {
                // debugger;
                const fromIndex = this.lastData[keys.length].findIndex(value => value.timestamp >= actualDate-persistanceTimeout);
                
                let lastDataPart = this.lastData[keys.length].slice(fromIndex);
                newValues = lastDataPart.concat(newValues);
            }

            this.lastData[keys.length] = newValues;

            
            // debugger;
            
            data[key] = newValues;
            
            
            i++;
            keys.push(key);
        }

        // const newData = Object.entries(data).map(
        //     ([key, value]) => value.sort(compareFunction)
        // )
        console.log("data treated");

        // debugger;

        const merged = this.mergeData(data, keys, lastMergedTimes, actualDate);

        return this.formatData(merged, actualDate, keys);
    }



    formatData(data, actualDate, keys){

        const finalValue = data.map(value => {
            let nValue = Object.assign({},value);
            nValue.timestamp = -(actualDate - nValue.timestamp)/1000;

            //formata o valor de acordo com a formatFn definida na constants.js
            keys.forEach( key => nValue[key] = availablePlotOptions[this.mappedPlotingFields[key]].formatFn(nValue[key]) )
            
            return nValue;
        }, this);

        return finalValue;
    }

    mergeData(data, keys, lastMergedTimestamps, actualDate) {
         if (keys.length == 1) {
             let values = data[keys[0]];
             
             return values.map(element => {return {[element.field]: element.value, timestamp: element.timestamp}})
         }
             
         

        let component1 = data[keys[0]];
        let component2 = data[keys[1]];

        // debugger;
        // console.log(component1.map(element => element.timestamp))
        // console.log(component2.map(element => element.timestamp))

        let size1 = component1.length;
        let size2 = component2.length;

        const buildNewValue = (value1, value2, keys) => {
            return {
                [keys[0]]: value1.value,
                [keys[1]]: value2.value,
                timestamp: (value1.timestamp+value2.timestamp)/2
            }
        }
        var index1 = size1-1, index2 = size2-1;
        let newData = [];
        // debugger;
        while(true) {

            let value1 = component1[index1];
            let value2 = component2[index2];

            if (this.lastMergedData.length > 0 && (value1.timestamp == lastMergedTimestamps[0] || value2.timestamp == lastMergedTimestamps[1])) {
                //cancela geração e pega do lastMergedData

                const fromIndex = this.lastMergedData.findIndex(value => value.timestamp >= actualDate-persistanceTimeout);
                
                let lastDataPart = this.lastMergedData.slice(fromIndex);
                newData = lastDataPart.concat(newData.reverse());

                this.lastMergedData = newData;

                break;
            }

            if (value1.timestamp < value2.timestamp) {
                let difference = Math.abs(value2.timestamp-value1.timestamp);
                while((index2-1 >= 0) && (Math.abs(component2[index2-1].timestamp-value1.timestamp) < difference)) {
                    index2--;
                    difference = Math.abs(component2[index2].timestamp-value1.timestamp)
                }
                newData.push(buildNewValue(value1, component2[index2], keys))
            } else if (value1.timestamp > value2.timestamp) {
                let difference = Math.abs(value2.timestamp-value1.timestamp);
                while((index1-1 >= 0) && (Math.abs(component1[index1-1].timestamp-value2.timestamp) < difference)) {
                    index1--;
                    difference = Math.abs(component1[index1].timestamp-value2.timestamp)
                }
                newData.push(buildNewValue(component1[index1], value2, keys))
            } else {
                newData.push(buildNewValue(value1, value2, keys));
            }

            index1--;
            index2--;

            if (index2 < 0 || index1 < 0) break;

        }

        return newData;
    }

    buildPage() {
        this.page = (this.state.dado1 != "null" ? "?id="+this.state.dado1: "") + (this.state.dado2 != "null" ? "&id="+this.state.dado2: "");
        // debugger;
        
        this.startFetching();
        // console.log(this.page);
    }

    render() {
        // console.log(persistanceTimeout);
        // console.log(this.state.data);
        return(
            <div className="container-fluid">
                <DelayProvider value={this.delay}>
                    <form>
                        <div className="row">
                            <div className="col-6">
                                <div className="d-flex justify-content-center align-items-center form-group dados-grafico">
                                    <div className="dado-grafico-title">DADO 1:{"  "}</div>
                                    <select value={this.state.dado1} className="form-control" onChange={this.dado1Change}>
                                        <option value="null" defaultValue="selected">Selecione</option>
                                        {availablePlotOptions.map((value) =>
                                            <option value={value.index}>{value.name}</option>
                                        )}
                                    </select>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex justify-content-center align-items-center form-group dados-grafico">
                                    <div className="dado-grafico-title">DADO 2:{"  "}</div>
                                    <select value={this.state.dado2} className="form-control" onChange={this.dado2Change}>
                                        <option value="null" selected="selected">Selecione</option>
                                        {this.state.dado1 != "null" && availablePlotOptions.map((value) => {
                                                if (value.index != this.state.dado1) {
                                                    return <option value={value.index}>{value.name}</option>
                                                } else {
                                                    return false;
                                                }
                                            }
                                        )}
                                    </select>
                                </div>
                            </div>
                            
                                
                            
                        </div>
                    </form>
                    <div className="row">
                        <div className="col-12">
                            <ResponsiveContainer minHeight="70vh">
                                <LineChart data={this.state.data} margin={{ top: 10, right: 15, bottom: 15, left: 15 }} key={Math.random()}>
                                    {/* <Line type="monotone" dataKey="value" stroke="#F5F5F5" strokeWidth={5} isAnimationActive={false} /> */}
                                    <CartesianGrid stroke="#838383" strokeDasharray="3 3" />
                                    <XAxis type="number" dataKey="timestamp">
                                        <Label value="Tempo [s]" offset={-10} position="insideBottomRight" />
                                    </XAxis>
                                    <Legend formatter={this.renderLegendText} />
                                    {/*TODO: COLOCAR LABEL CUSTOMIZADO COM A UNIDADE*/}
                                    {this.state.dado1 != "null" && <YAxis yAxisId="left"  label={{content: <UnitLabel/>, value: availablePlotOptions[this.mappedPlotingFields[this.state.dado1]].name+" - ["+availablePlotOptions[this.mappedPlotingFields[this.state.dado1]].unidade+"]", position: 'left', angle: -90 }}/>}
                                    {this.state.dado2 != "null" && <YAxis yAxisId="right" label={{content: <UnitLabel/>, value: availablePlotOptions[this.mappedPlotingFields[this.state.dado2]].name+" - ["+availablePlotOptions[this.mappedPlotingFields[this.state.dado2]].unidade+"]", position: 'right', angle: -90, offset: 50 }} orientation="right"/>}
                                    
                                    {this.state.dado1 != "null" && <Line yAxisId="left"  dot={<CustomDot/>} type="monotone" dataKey={this.state.dado1} strokeWidth={2} isAnimationActive={false}/>}
                                    {this.state.dado2 != "null" && <Line yAxisId="right" dot={<CustomDot/>} type="monotone" dataKey={this.state.dado2} strokeWidth={2} isAnimationActive={false} stroke="#008017"/>}

                                     
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </DelayProvider>
            </div>
        )
    }

    renderLegendText = (value) => {
        return availablePlotOptions[this.mappedPlotingFields[value]].name;
    }
}


function UnitLabel(props) {
    // console.log(props);
    const {viewBox, value, angle, offset} = props;
    
    // return (<div>{value}</div>);
    return <text transform={"rotate("+angle+", "+viewBox.x+", "+viewBox.y+")"} x={viewBox.x} y={viewBox.y} dx={-20} dy={10+offset} fill={"whitesmoke"} fontFamily="Exo" fontSize="1rem" textAnchor="end">{value}</text>
    
}

function CustomDot(props) {
    const { cx, cy, stroke } = props;
    return <circle cx={cx} cy={cy} r={3} stroke={stroke} strokeWidth={2} fill="whitesmoke"/>
}

export default Graficos;