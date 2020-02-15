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
    commit("SET_TO_DOS", res.data);
  },
  async addTodo({ commit }, title) {
    const res = await axios.post(`https://jsonplaceholder.typicode.com/todos`, {
      title,
      completed: false
    });
    commit("NEW_TO_DO", res.data);
    console.log(state.todos);
  },
  async delTodo({ commit }, id) {
    const res = await axios.delete(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    commit("REMOVE_TO_DO", id);
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

    commit("CHANGE_TO_DO", todo);
  }
};
const mutations = {
  SET_TO_DOS: (state, todos) => (state.todos = todos),
  NEW_TO_DO: (state, todo) => state.todos.unshift(todo),
  REMOVE_TO_DO: (state, id) =>
    (state.todos = state.todos.filter(todo => todo.id !== id)),
  CHANGE_TO_DO: (state, updTodo) => {
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
