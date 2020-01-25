import React, { Component } from "react";

export class TimerClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      running: false,
      seconds: 0
    };
  }
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleTimer = e => {
    if (this.state.seconds <= 0) {
      clearInterval(this.timer);
      this.setState(prevState => ({
        running: false
      }));
    } else {
      this.state.running
        ? clearInterval(this.timer)
        : (this.timer = setInterval(() => {
            let seconds = this.state.seconds - 1;
            this.setState(state => ({
              seconds
            }));
            if (seconds === 0) {
              clearInterval(this.timer);
              this.setState(() => ({
                running: false
              }));
            }
          }, 1000));
      this.setState(prevState => ({
        running: !prevState.running
      }));
    }
  };

  handleReset = e => {
    clearInterval(this.timer);
    this.setState({
      seconds: 0,
      running: false
    });
  };
  render() {
    const { running, seconds } = this.state;
    return (
      <div>
        <h4>Timer</h4>
        {seconds}s
        <div>
          Set Time:
          <div>
            {/* <input type="number" min="0" max="23"></input>h
            <input type="number" min="0" max="59"></input>m */}
            <input
              name="seconds"
              value={seconds}
              onChange={this.handleInput}
              type="number"
              min="0"
              max="60"
            ></input>
            s
          </div>
          <div>
            <button onClick={e => this.handleTimer(e)}>
              {running ? "Stop" : "Start"}
            </button>
            <button onClick={e => this.handleReset(e)}>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}

export default TimerClass;
