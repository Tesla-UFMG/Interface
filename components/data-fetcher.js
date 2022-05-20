import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'

import handleNotifications from './notifications-handler.js'


class DataFetcher extends Component {

    constructor(props) {
        super(props)

        // debugger;

        this.updateRSSI = props.updateRSSI;
        
        this.delay = 300;

        props.setChildDelay(this.delay);

        this.state = {};
        this.rootPage = "data/";
    
        this.isFetching = false;
        this.shouldFetch = true;
        this.timerID = null;

        this.doFetch = this.doFetch.bind(this);
      }

      doFetch() {
        this.updateField()
            .then(res => {
              if (res.data) {
                // debugger;
                const treatedData = this.treatData(res.data);
                this.setState({
                  data: treatedData
                });
                handleNotifications(res.data);
                this.updateRSSI(res.data.rssi);
              } else 
                throw Error("fetched undefined object");
              // 
              // var data = this.state.data;
              // // debugger;
              // data.bms.charge = (data.bms.charge == null ? 10000 : data.bms.charge - 1 < 0 ? 10000 : data.bms.charge - 100);
              // this.setState({data: data});
            }
            ).catch(err => console.log(err))
      }

      startFetching() {
        if (this.timerID != null) return;
        this.doFetch();
        this.timerID = setInterval(this.doFetch,this.delay);
      }

      stopFetching() {
        clearInterval(this.timerID);
        this.timerID = null;
      }

      treatData(data) {
        return data;
      }

      componentDidMount() {
        this.startFetching();
      }

    
      componentWillUnmount() {
        this.stopFetching();
      }
    
      updateField = async () => {
        
        if (this.isFetching || !this.shouldFetch) {
          return false;
        } 
        this.isFetching = true;
        const response =  await fetch('/'+this.rootPage+this.page);
        const body = await response.json();
        // console.log(body);
        if (response.status !== 200) {
          throw Error(body.message) 
        }
        // console.log(new Date().getMilliseconds()-lastLoaded);
        // lastLoaded = new Date().getMilliseconds();
        //console.log(body);
        this.isFetching = false;
        return body;
      }
}






export default DataFetcher;