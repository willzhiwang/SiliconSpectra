<template>
  <div class="container">
    <h4>Todos</h4>
    <AddTodo />
    <div class="todos">
      <div v-for="todo in allTodos" :key="todo.id">
        <TodoItem :todo="todo" class="todo" />
      </div>
    </div>
  </div>
</template>

<script>
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  components: { AddTodo, TodoItem },
  methods: {
    ...mapActions(["fetchTodos"])
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  }
};
</script>

<style scoped>
.container {
  margin: 0px 10%;
}
.todo {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
  justify-content: space-between;
  text-align: center;
  /* align-content: center; */
  align-items: center;
  border: 1px solid #ccc;
  padding: 5px 10px;
  margin: 0 10px;
}
</style>
