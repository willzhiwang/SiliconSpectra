import React, { Component } from "react";

export class TodoForm extends Component {
  state = {
    value: ""
  };
  handleChange = e => {
    e.preventDefault();
    const val = e.target.value;
    this.setState(state => ({
      value: val
    }));
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state.value);
    if (!this.state.value) {
      return;
    }
    this.props.addTodo(this.state.value);
    this.setState(state => ({
      value: ""
    }));
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        ></input>
      </form>
    );
  }
}

export default TodoForm;
