import React, { Component, Fragment } from "react";

export class AutoCompleteCom extends Component {
  items = [
    "Will",
    "Sam",
    "Sarah",
    "Tom",
    "Rich",
    "Jhon",
    "Jackson",
    "Jack",
    "Nick",
    "Tylor"
  ];
  state = {
    display: []
  };
  textChange = e => {
    let input = e.target.value;
    let displayText = [];
    input.length > 0 &&
      (displayText = this.items.filter(item =>
        item.toLowerCase().includes(input.toLowerCase())
      ));
    this.setState({ display: displayText });
  };
  autocompleteText = () => {
    return (
      this.state.display.length > 0 && (
        <ul>
          {this.state.display.map((d, index) => (
            <li key={index}>{d}</li>
          ))}
        </ul>
      )
    );
  };
  render() {
    return (
      <Fragment>
        <input onChange={this.textChange}></input>
        <div>{this.autocompleteText()}</div>
      </Fragment>
    );
  }
}

export default AutoCompleteCom;
