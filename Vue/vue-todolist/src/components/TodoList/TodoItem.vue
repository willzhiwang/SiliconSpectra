<template>
  <div class="todo-item">
    <p
      @click="handleComplete"
      v-bind:class="[{ 'is-complete': todo.completed }]"
    >
      {{ todo.title }}
    </p>
    <button @click="$emit('del-todo', todo.id)" class="del">x</button>
  </div>
</template>

<script>
export default {
  props: ["todo"],
  methods: {
    handleComplete() {
      this.todo.completed = !this.todo.completed;
    }
  }
};
</script>

<style scoped>
.todo-item {
  display: flex;
  flex-direction: column;
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}
p:hover {
  cursor: pointer;
}
.is-complete {
  text-decoration: line-through;
}
.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  cursor: pointer;
}
</style>
