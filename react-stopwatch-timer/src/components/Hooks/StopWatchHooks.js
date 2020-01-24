import React, { useState } from "react";

const StopWatchHooks = () => {
  const [lapse, setLapse] = useState(0);
  const [running, setRunning] = useState(false);
  const [timer, setTimer] = useState();

  const handleWatch = timer => {
    if (running) {
      clearInterval(timer);
    } else {
      const startTime = Date.now() - lapse;
      setTimer(() => {
        return setInterval(() => {
          setLapse(Date.now() - startTime);
        });
      });
    }
    setRunning(!running);
  };

  const lapseFormat = () => {
    let time;
    if (lapse / 1000 > 3600) {
      const hour = ~~(lapse / 3600000);
      const min_second = lapse - 3600000;
      const min = ~~(min_second / 60000);
      const second = ((lapse % 60000) / 1000).toFixed(2);
      time = `${hour}h ${min}m ${second}`;
    } else if (lapse > 60000 && lapse < 3600000) {
      console.log(~~(lapse / 60000.0));
      const min = ~~(lapse / 60000.0);
      const second = ((lapse % 60000.0) / 1000.0).toFixed(2);
      time = `${min}m ${second}`;
    } else {
      time = (lapse / 1000).toFixed(2);
    }

    return time;
  };
  const handleClearClick = () => {
    clearInterval(timer);
    setLapse(0);
    setRunning(false);
  };
  return (
    <div className="container">
      <h4>StopWatch:</h4>
      <div className="time">{lapseFormat(lapse)} s</div>
      <button onClick={e => handleWatch(timer)}>
        {running ? "Stop" : "Start"}
      </button>
      <button className="clear" onClick={e => handleClearClick()}>
        Reset
      </button>
    </div>
  );
};

export default StopWatchHooks;
