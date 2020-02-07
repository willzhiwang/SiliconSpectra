import React from "react";
import "./App.css";
import AutoCompleteHook from "./components/AutoCompleteHook";
import AutoCompleteCom from "./components/AutoCompleteCom";

function App() {
  return (
    <div className="App">
      Hook
      <AutoCompleteHook />
      Component
      <AutoCompleteCom />
    </div>
  );
}

export default App;
