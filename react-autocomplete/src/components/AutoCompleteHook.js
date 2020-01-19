import React, { useState, Fragment } from "react";

const AutoComplete = () => {
  const items = [
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
  const [display, setDisplay] = useState([]);

  const textChange = e => {
    const inputValue = e.target.value;
    //console.log(inputValue);
    let displaying = [];
    if (inputValue.length > 0) {
      displaying = items.filter(item =>
        item.toLowerCase().includes(inputValue.toLowerCase())
      );
    }
    setDisplay(displaying);
  };

  return (
    <Fragment>
      <input onChange={textChange}></input>
      <div>
        {display.length > 0 && (
          <ul>
            {display.map((i, index) => {
              return (
                <li key={index}>
                  {i} {index}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </Fragment>
  );
};

export default AutoComplete;
