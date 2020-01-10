import React, { useState } from "react";
import { Button } from "reactstrap";

const Todos = props => {
  const [text, setText] = useState(props.todo.text);
  const [order, setOrder] = useState(props.todo.order);

  const handleText = event => {
    setText(event.target.value);
  };
  const handleOrder = event => {
    event.preventDefault();
    event.target.name === "order" &&
      setOrder(
        parseInt(event.target.value) ? parseInt(event.target.value) : ""
      );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "5px 30px"
      }}
    >
      <input
        name="order"
        onChange={handleOrder}
        value={order}
        placeholder="Order text"
        onKeyPress={e => props.setOrder(e, props.todo.id, order)}
      />
      {props.todo.edit === true ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "0 30px"
          }}
        >
          <input
            name="text"
            onChange={handleText}
            value={text}
            placeholder="Todo Text"
            onKeyPress={e => props.submitNewText(props.todo.id, text, e)}
          />
          {/* </form> */}
          <div>
            <Button
              color="success"
              type="submit"
              onClick={e => props.submitNewText(props.todo.id, text, e)}
            >
              save
            </Button>
            <Button color="secondary" onClick={props.onEdit}>
              cancle
            </Button>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "0 30px"
          }}
        >
          <div
            style={{
              textDecoration: props.todo.complete ? "line-through" : ""
            }}
            onClick={props.toggleComplete}
          >
            <h5>{props.todo.text}</h5>
          </div>
          <div style={{ padding: "0 30px" }}>
            <Button color="warning" onClick={props.onEdit}>
              edit
            </Button>
            <Button color="danger" onClick={props.onDelete}>
              X
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Todos;
