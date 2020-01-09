import React, { useState } from "react";
import SearchTodo from "./SearchTodo";
import TodoForm from "./TodoForm";
import Todo from "./Todos";
import { Button } from "reactstrap";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todoToShow, setTodoToShow] = useState("all");
  const [searchtext, setSearchText] = useState("");

  const addTodo = todoNew => {
    if (todos.some(todo => todo.text === todoNew.text)) {
      alert("existed");
    } else {
      setTodos([todoNew, ...todos]);
    }
  };

  const toggleComplete = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id && todo.edit === false) {
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    );
  };
  const setOrder = (event, id, order) => {
    if (event.key === "Enter") {
      setTodos(
        todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              order
            };
          } else {
            return todo;
          }
        })
      );
    }
  };
  const setSearching = event => {
    event.preventDefault();
    if (event.target.value === "") {
      updateTodoToShow("all");
    } else {
      setSearchText(event.target.value);
      updateTodoToShow("search");
    }
  };
  const updateTodoToShow = s => {
    setTodoToShow(s);
  };

  const handleDeleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEditTodo = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            edit: !todo.edit
          };
        } else {
          return todo;
        }
      })
    );
  };

  const submitNewText = (id, text, e) => {
    if (e.key === "Enter" || e.target.type === "submit") {
      setTodos(
        todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              edit: !todo.edit,
              text
            };
          } else {
            return todo;
          }
        })
      );
    }
  };

  let todosDisplay = [];
  if (todoToShow === "all") {
    todosDisplay = todos;
  } else if (todoToShow === "progressing") {
    todosDisplay = todos.filter(todo => !todo.complete);
  } else if (todoToShow === "done") {
    todosDisplay = todos.filter(todo => todo.complete);
  } else if (todoToShow === "search") {
    todosDisplay = todos.filter(todo =>
      todo.text.toUpperCase().includes(searchtext.toUpperCase())
    );
  }
  return (
    <div>
      <SearchTodo setSearching={setSearching} />
      <TodoForm onSubmit={addTodo} />
      {todosDisplay
        .sort((a, b) => a.order - b.order)
        .map(todo => (
          <Todo
            key={todo.id}
            setOrder={setOrder}
            submitNewText={submitNewText}
            toggleComplete={() => toggleComplete(todo.id)}
            onEdit={() => handleEditTodo(todo.id)}
            onDelete={() => handleDeleteTodo(todo.id)}
            todo={todo}
          />
        ))}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <Button color="info" onClick={() => updateTodoToShow("all")}>
          all
        </Button>
        <Button color="info" onClick={() => updateTodoToShow("progressing")}>
          progressing
        </Button>
        <Button color="info" onClick={() => updateTodoToShow("done")}>
          Done
        </Button>
      </div>
    </div>
  );
};
export default TodoList;
