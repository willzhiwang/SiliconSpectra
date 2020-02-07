import React, { useState } from "react";
import ReactShow from "react-show";

const CollapseHooks = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  let content = {};
  if (click) {
    content = {
      backgroundColor: "#f1f1f1",
      overFlow: "hidden",
      transition: "height 1s  ease-out"
    };
  } else {
    content = {
      backgroundColor: "#f1f1f1"
    };
  }

  return (
    <div>
      <button onClick={handleClick}>Toggle</button>
      {click && <div style={content}>Hello, This is the insert text</div>}
      <div>
        <p> This is the text, press toggle to insert the content</p>
      </div>
      {/* <ReactShow show={click}></ReactShow> */}
      {/* <ReactShow show={click}>
        <div>This is some content!</div>
      </ReactShow>{" "} */}
    </div>
  );
};

export default CollapseHooks;
