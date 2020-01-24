import React, { Component } from "react";

export class TimerClass extends Component {
  render() {
    return (
      <div>
        <h4>Timer</h4>
        <div>
          Set Time:
          <div>
            <input type="number" min="0" max="23"></input>h
            <input type="number" min="0" max="59"></input>m
            <input type="number" min="0" max="59"></input>s
          </div>
          <div>
            <button>Start</button>
            <button>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}

export default TimerClass;
