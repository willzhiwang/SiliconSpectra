import React from "react";
import SearchTodo from "./SearchTodo";
import TodoForm from "./TodoForm";
import Todo from "./Todos";
import { Button } from 'reactstrap';

export default class TodoList extends React.Component {
    state = {
        todos: [],
        todoToShow: "all",
        searchtext: ""
    };

    addTodo = todoNew => {
        //console.log(todoNew.text);
        if (this.state.todos.some(todo => todo.text === todoNew.text)) {
            //console.log("exist");
            alert("existed");
        }
        else {
            this.setState(state => ({
                todos: [todoNew, ...state.todos]
            }));
        }
    };

    toggleComplete = id => {
        this.setState(state => ({
            todos: state.todos.map(todo => {
                if (todo.id === id && todo.edit === false) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    };
                } else {
                    return todo;
                }
            })
        }));
    };
    setOrder = (event, id, order) => {
        if (event.key === 'Enter') {
            this.setState(state => ({
                todos: state.todos.map(todo => {
                    if (todo.id === id) {
                        return {
                            ...todo,
                            order
                        };
                    } else {
                        return todo;
                    }
                })
            }));
        }
    }
    setSearching = (event) => {
        event.preventDefault();
        if (event.target.value === "") {
            this.updateTodoToShow("all");
        }
        else {
            this.setState({
                [event.target.name]: event.target.value
            });
            this.updateTodoToShow("search");
        }
    }
    updateTodoToShow = s => {
        this.setState({
            todoToShow: s
        });
    };

    handleDeleteTodo = id => {
        this.setState(state => ({
            todos: state.todos.filter(todo => todo.id !== id)
        }));
    };

    handleEditTodo = id => {
        this.setState(state => ({
            todos: state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        edit: !todo.edit
                    };
                } else {
                    return todo;
                }
            })
        }));
    };

    submitNewText = (id, text, e) => {
        //console.log(e.target.type);
        if (e.key === 'Enter' || e.target.type === 'submit') {
            this.setState(state => ({
                todos: state.todos.map(todo => {
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
            }));
        }
    };

    render() {
        let todos = [];
        if (this.state.todoToShow === "all") {
            todos = this.state.todos;
        }
        else if (this.state.todoToShow === "progressing") {
            todos = this.state.todos.filter(todo => !todo.complete);
        }
        else if (this.state.todoToShow === "done") {
            todos = this.state.todos.filter(todo => todo.complete);
        }
        else if (this.state.todoToShow === "search") {
            todos = this.state.todos.filter(todo => todo.text.toUpperCase().includes(this.state.searchtext.toUpperCase()));
        }
        return (
            <div>
                <SearchTodo
                    setSearching={this.setSearching}
                />
                <TodoForm onSubmit={this.addTodo} />
                {
                    todos.sort((a, b) => a.order - b.order).map(todo => (
                        <Todo
                            key={todo.id}
                            setOrder={this.setOrder}
                            submitNewText={this.submitNewText}
                            toggleComplete={() => this.toggleComplete(todo.id)}
                            onEdit={() => this.handleEditTodo(todo.id)}
                            onDelete={() => this.handleDeleteTodo(todo.id)}
                            todo={todo}
                        />
                    ))
                }
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Button color="info" onClick={() => this.updateTodoToShow("all")}>all</Button>
                    <Button color="info" onClick={() => this.updateTodoToShow("progressing")}>progressing</Button>
                    <Button color="info" onClick={() => this.updateTodoToShow("done")}>Done</Button>
                </div>
            </div>
        );
    }
}