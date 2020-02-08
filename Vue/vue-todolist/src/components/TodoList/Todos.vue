<template>
  <div class="container">
    <div :key="todo.id" v-for="todo in todos">
      <TodoItem
        :todo="todo"
        v-on:del-todo="$emit('del-todo', todo.id)"
        v-on:edit-todo="$emit('edit-todo', todo)"
      />
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  props: ["todos"],
  components: {
    TodoItem
  }
};
</script>

<style scoped>
.container {
  margin: 10px 10%;
}
</style>
