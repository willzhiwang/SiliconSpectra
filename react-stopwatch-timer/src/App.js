import React from "react";
import "./App.css";
import StopWatchClass from "./components/Classes/StopWatchClass";
import TimerClass from "./components/Classes/TimerClass";
import StopWatchHooks from "./components/Hooks/StopWatchHooks";
import TimerHooks from "./components/Hooks//TimerHooks";

function App() {
  return (
    <div className="App">
      <div>
        <StopWatchClass />
        <TimerClass />
      </div>
      <hr />
      <div>
        <StopWatchHooks />
        <TimerHooks />
      </div>
    </div>
  );
}

export default App;
