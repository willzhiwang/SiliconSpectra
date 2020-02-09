import axios from "axios";

const state = {
  todos: [{ id: 1, title: "A" }]
};
const mutations = {};
const getters = {
  allTodos: state => {
    return state.todos;
  }
};
const actions = {};
export default {
  state,
  getters,
  actions,
  mutations
};
