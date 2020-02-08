<template>
  <div class="todo-item">
    <p
      v-if="!edit"
      class="title"
      @click="handleComplete(todo)"
      v-bind:class="[{ 'is-complete': todo.completed }]"
    >
      {{ todo.title }}
    </p>
    <input type="text" v-else v-model="todo.title" />
    <div class="btns">
      <button
        @click="editTodo(todo.id, todo.title, todo.completed)"
        class="edit"
      >
        Edit
      </button>
      <button @click="$emit('del-todo', todo.id)" class="del">x</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["todo"],
  data() {
    return { edit: false, newTitle: "" };
  },
  methods: {
    handleComplete(todo) {
      todo.completed = !todo.completed;
      this.$emit("edit-todo", todo);
    },
    editTodo(id, title, completed) {
      !this.edit && (this.newTitle = title);
      this.edit = !this.edit;
      if (!this.edit && this.newTitle !== title) {
        const newTodo = {
          title,
          completed
        };
        this.$emit("edit-todo", newTodo);
      }
    }
  }
};
</script>

<style scoped>
.todo-item {
  display: flex;
  background: #f4f4f4;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}
.is-complete {
  text-decoration: line-through;
}
.del {
  background: #ff0000;
  color: #fff;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
}
.edit {
  background: darkgoldenrod;
  color: #fff;
  /* border: ; */
  padding: 5px 9px;
  cursor: pointer;
}

.btns {
  display: inline-block;
  /* float: right; */
}
p {
  /* max-width: 900px; */
}
p:hover {
  cursor: pointer;
}
</style>
