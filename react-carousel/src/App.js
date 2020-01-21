import React from "react";
// import logo from './logo.svg';
// import './App.css';
import CarouselHooks from "./component/CarouselHooks";
import CarouselClass from "./component/CarouselClass";

function App() {
  return (
    <div>
      <div>
        <h3>Hooks {"&"} Axios</h3>
        <CarouselHooks />
      </div>
      <hr />
      <div>
        <h3>Class {"&"} Fetch</h3>
        <CarouselClass />
      </div>
    </div>
  );
}

export default App;
