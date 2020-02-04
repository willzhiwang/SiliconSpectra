import React, { useState, useEffect } from "react";
import axios from "axios";
const AutoComplete = () => {
  const [users, setUsers] = useState([]);
  const [display, setDisplay] = useState([]);
  const [text, setText] = useState("");
  const [modal, setModal] = useState({});

  let modalStyle = {
    display: modal.street ? "inline" : "none"
  };

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    let response = await axios(`https://jsonplaceholder.typicode.com/users`);
    setUsers(response.data);
  };

  const textChange = e => {
    const input = e.target.value;
    setText(input);
    let newDisplay = [];
    if (input.length > 0) {
      //for of
      // for (let user of users) {
      //   let name = user.name;
      //   if (name.toLowerCase().includes(input.toLowerCase())) {
      //     newDisplay.push(user);
      //   }
      // }

      //filter
      newDisplay = users.filter(user => {
        return user.name.toLowerCase().includes(input.toLowerCase());
      });
    }
    console.log(newDisplay);
    setDisplay(newDisplay);
    setModal({});
  };

  const handleName = e => {
    //console.log(e.target.innerText);
    setText(e.target.innerText);
    setDisplay([]);

    // for (let user of users) {
    //   let name = user.name;
    //   name === e.target.innerText && setModal(user.address);
    // }
    //find
    const currentUser = users.find(user => {
      return user.name === e.target.innerText;
    });
    console.log(currentUser);
    setModal(currentUser.address);
  };

  return (
    <div>
      <input onChange={textChange} value={text} />
      <ul>
        {display.map(display => {
          return (
            <li onClick={handleName} key={display.id}>
              {display.name}
            </li>
          );
        })}
      </ul>
      <div style={modalStyle}>
        <p>Street: {modal.street}</p>
        <p>Suite: {modal.suite}</p>
        <p>City: {modal.city}</p>
        <p>Zip: {modal.zipcode}</p>
      </div>
    </div>
  );
};

export default AutoComplete;
