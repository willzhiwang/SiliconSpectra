<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <AddTodo v-on:add-todo="addTodo" />
    <div>
      <button class="btn" @click="checkTypes('a')">All</button>
      <button class="btn" @click="checkTypes('p')">Progressing</button>
      <button class="btn" @click="checkTypes('d')">Done</button>
    </div>
    <Todos
      :todos="displayTodos"
      v-on:edit-todo="editTodo"
      v-on:del-todo="deleteTodo"
    />
  </div>
</template>

<script>
import axios from "axios";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

export default {
  name: "TodoList",
  components: { Todos, AddTodo },
  data() {
    return { title: "Todo List", todos: [], type: "All", displayTodos: [] };
  },
  methods: {
    editTodo(todo) {
      console.log(todo.title);
      const { id, title, completed } = todo;
      axios
        .put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
          title,
          completed
        })
        .then(res => {
          console.log("res: ", res);
          this.displayType();
        });
    },
    deleteTodo(id) {
      console.log(id);
      axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => {
          //console.log(res);
          this.todos = this.todos.filter(todo => todo.id !== id);
          this.displayType();
        })
        .catch(err => console.log(err));
    },
    addTodo(newTodo) {
      console.log(newTodo);
      const { title, completed } = newTodo;
      axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          title,
          completed
        })
        .then(res => {
          this.todos = [...this.todos, res.data];
          this.displayType();
        })
        .catch(err => console.log(err));
    },
    checkTypes(e) {
      if (e == "a") {
        this.type = "All";
      }
      if (e == "p") {
        this.type = "Progress";
      }
      if (e == "d") {
        this.type = "Done";
      }
      this.displayType();
      console.log(this.type);
    },
    displayType() {
      console.log("todos", this.todos);
      if (this.type == "All") {
        this.displayTodos = this.todos;
      }
      if (this.type == "Progress") {
        this.displayTodos = this.todos.filter(todo => todo.completed === false);
      }
      if (this.type == "Done") {
        this.displayTodos = this.todos.filter(todo => todo.completed === true);
      }
      console.log(this.displayTodos);
    }
  },
  computed: {},
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(res => {
        this.todos = res.data;
        //console.log(this.todos);
        this.displayTodos = this.todos;
      })
      .catch(err => {
        console.log(err);
      });
    this.displayType();
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}
</style>
