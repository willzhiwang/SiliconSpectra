import React, {useState} from "react";


const StopWatchHooks = () => {
  const [lapse, setLapse] = useState(0);
  const [running, setRunning] = useState(false);
  let timer;

  const handleWatch = ()=>{

    if (running) {
      console.log("",timer);
      clearInterval(timer);
    } else {
      const startTime = Date.now() - lapse;
       timer = setInterval(() => {
        setLapse(Date.now() - startTime
        );
      });
      console.log(timer);
    }
    setRunning(!running);
  }

  const lapseFormat=()=>{
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
  const handleClearClick =()=>{
    clearInterval(timer);
    setLapse(0);
    setRunning(false);
  }
  return (
    <div className="container">
        <h4>StopWatch:</h4>
        <div className="time">{lapseFormat(lapse)} s</div>
        <button onClick={e => handleWatch()}>
          {running ? "Stop" : "Start"}
        </button>
        <button className="clear" onClick={e => handleClearClick()}>
          Reset
        </button>
      </div>
  );
};

export default StopWatchHooks;
