import React, { useState } from "react";

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const increaseProgress = () => {
    progress < 100 && setInterval(setProgress(progress + 20), 50);
  };

  const progressBar = {
    backgroundColor: "gray",
    left: 0,
    height: "50px",
    borderStyle: "solid",
    width: progress + "%",
    color: "white",
    transition: "width 0.8s ease-in",
  };

  return (
    <div>
      <div className="progress-bar" style={progressBar}>
        {progress}%
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <button onClick={() => increaseProgress()}>
          Click to increase progress
        </button>
        <button onClick={() => setProgress(0)}> clear </button>
      </div>
    </div>
  );
};
