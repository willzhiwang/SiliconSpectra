import React, { Component } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

export class TodoListClass extends Component {
  state = {
    todos: [
      {
        text: "Learn React",
        isCompleted: true
      },
      {
        text: "Learn CSS and HTML",
        isCompleted: false
      },
      {
        text: "Study Redux",
        isCompleted: false
      }
    ]
  };

  addTodo = text => {
    //console.log(text);
    const newTodo = { text: text, isCompleted: false };
    this.setState(state => ({
      todos: [...this.state.todos, newTodo]
    }));
  };
  completeTodo = index => {
    let newTodos = [...this.state.todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    //console.log(newTodos);
    this.setState(state => ({
      todos: newTodos
    }));
  };
  removeTodo = index => {
    let newTodos = [...this.state.todos];
    newTodos.splice(index, 1);
    this.setState(state => ({
      todos: newTodos
    }));
  };
  render() {
    {
      console.log(this.state.todos);
    }
    return (
      <div>
        {this.state.todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={this.completeTodo}
            removeTodo={this.removeTodo}
          />
        ))}
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoListClass;
