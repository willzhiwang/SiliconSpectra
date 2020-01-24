import React, { Component } from "react";

export class StopWatchClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lapse: 0,
      running: false
    };
  }

  handleWatch() {
    this.setState(prevState => {
      if (prevState.running) {
        clearInterval(this.timer);
      } else {
        const startTime = Date.now() - prevState.lapse;
        this.timer = setInterval(() => {
          this.setState({
            lapse: (Date.now() - startTime)
          });
        });
      }
      return { running: !prevState.running };
    });
  }

  handleClearClick() {
    clearInterval(this.timer);
    this.setState({
      lapse: 0,
      running: false
    });
  }
  lapseFormat = (lapse) => {
    let time;
    
    if((lapse/1000)> 3600){
      const hour = ~~(lapse/3600000);
      const min_second = lapse-3600000;
      const min = ~~(min_second/60000);
      const second = ((lapse%60000)/1000).toFixed(2);
      time = `${hour}h ${min}m ${second}`;
    }
    else if(lapse>60000 && lapse<3600000){
      console.log(~~(lapse/60000.00))
      const min = ~~(lapse/60000.00);
      const second = ((lapse%60000.00)/1000.00).toFixed(2);
       time = `${min}m ${second}`;
    }
    else{
       time = (lapse/1000).toFixed(2);
    }
    
    return time;
  }

  render() {
    const { lapse, running } = this.state;
    return (
      <div className="container">
        <h4>StopWatch:</h4>
        <div className="time">{this.lapseFormat(lapse)} s</div>
        <button onClick={e => this.handleWatch()}>
          {running ? "Stop" : "Start"}
        </button>
        <button className="clear" onClick={e => this.handleClearClick()}>
          Reset
        </button>
      </div>
    );
  }
}

export default StopWatchClass;
