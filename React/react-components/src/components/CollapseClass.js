import React, { Component } from "react";
import ReactShow from "react-show";
export default class CollapseClass extends Component {
  state = {
    show: true
  };
  render() {
    const { show } = this.state;
    return (
      <div>
        <button
          onClick={() =>
            this.setState({
              show: !show
            })
          }
        >
          {show ? "Hide" : "Show"}
        </button>
        {/* <ReactShow show={show}>
          <div>This is some content!</div>
        </ReactShow>{" "} */}
      </div>
    );
  }
}
