import axios from "axios";

const state = {
  todos: []
};
const getters = {
  allTodos: state => {
    return state.todos;
  }
};
const actions = {
  async fetchTodos({ commit }) {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=5`
    );
    //console.log(res.data);
    commit("setTodos", res.data);
  },
  async addTodo({ commit }, title) {
    const res = await axios.post(`https://jsonplaceholder.typicode.com/todos`, {
      title,
      completed: false
    });
    commit("newTodo", res.data);
    console.log(state.todos);
  },
  async delTodo({ commit }, id) {
    const res = await axios.delete(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    commit("removeTodo", id);
  },
  async updateTodo({ commit }, todo) {
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
      {
        todo
      }
    );
    console.log(res.data);
    console.log(state.todos);

    commit("changeTodo", todo);
  }
};
const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter(todo => todo.id !== id)),
  changeTodo: (state, updTodo) => {
    console.log(state.todos);
    const index = state.todos.findIndex(todo => todo.id === updTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updTodo);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
