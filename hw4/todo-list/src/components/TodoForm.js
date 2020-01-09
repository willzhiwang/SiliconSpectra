import React, { useState } from "react";
import shortid from "shortid";

const TodoForm = props => {
  const [text, setText] = useState("");

  const handleChange = event => {
    setText(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (text !== "") {
      props.onSubmit({
        id: shortid.generate(),
        text: text,
        edit: false,
        complete: false,
        order: 1
      });
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        Add:
        <input
          name="text"
          value={text}
          onChange={handleChange}
          placeholder="Add Todo"
        />
      </h2>
    </form>
  );
};
export default TodoForm;
