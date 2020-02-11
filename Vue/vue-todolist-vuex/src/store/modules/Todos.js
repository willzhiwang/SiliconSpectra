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
    commit("Set_To_Dos", res.data);
  },
  async addTodo({ commit }, title) {
    const res = await axios.post(`https://jsonplaceholder.typicode.com/todos`, {
      title,
      completed: false
    });
    commit("New_To_Do", res.data);
    console.log(state.todos);
  },
  async delTodo({ commit }, id) {
    const res = await axios.delete(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    commit("Remove_To_Do", id);
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

    commit("Change_To_Do", todo);
  }
};
const mutations = {
  Set_To_Dos: (state, todos) => (state.todos = todos),
  New_To_Do: (state, todo) => state.todos.unshift(todo),
  Remove_To_Do: (state, id) =>
    (state.todos = state.todos.filter(todo => todo.id !== id)),
  Change_To_Do: (state, updTodo) => {
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
