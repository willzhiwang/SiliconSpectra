import React, { Component } from "react";

export class Todo extends Component {
  render() {
    const { todo, index, completeTodo, removeTodo } = this.props;
    return (
      <div style={{ textDecoration: todo.isCompleted && "line-through" }}>
        {todo.text}
        <div>
          <button onClick={() => completeTodo(index)}>Complete</button>
          <button onClick={() => removeTodo(index)}>X</button>
        </div>
      </div>
    );
  }
}

export default Todo;
