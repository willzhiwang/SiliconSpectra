import React from "react";
import "./App.css";
import TodoListHooks from "./components/hooks/TodoListHooks";
import TodoListClass from "./components/class/TodoListClass";

function App() {
  return (
    <div className="App">
      <div>
        Hooks:
        <TodoListHooks />
      </div>
      <hr></hr>
      <div>
        Class:
        <TodoListClass />
      </div>
    </div>
  );
}

export default App;
