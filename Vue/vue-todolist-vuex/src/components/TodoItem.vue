<template>
  <div>
    <p
      v-if="!edit"
      class="title"
      :class="[{ 'is-complete': todo.completed }]"
      @click="setComplete(todo)"
    >
      {{ todo.title }}
    </p>
    <input type="text" v-else v-model="todo.title" />
    <div>
      <button class="btn" @click="editTodo(todo)">Edit</button>
      <i class="del fas fa-trash-alt" @click="delTodo(todo.id)"></i>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "TodoItem",
  components: {},
  props: ["todo"],
  data() {
    return { edit: false };
  },
  methods: {
    ...mapActions(["delTodo", "updateTodo"]),
    setComplete(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      };
      this.updateTodo(updTodo);
      //   todo.completed = !todo.completed;
      //   this.updateTodo(todo);
    },
    editTodo(todo) {
      this.edit = !this.edit;
      console.log(todo);
      if (this.edit === false) {
        this.updateTodo(todo);
      }
    }
  }
};
</script>

<style scoped>
.is-complete {
  text-decoration: line-through;
}
i {
  /* position: relative; */
  padding: 5px 10px;
  margin: 0 10px;
  background-color: rgb(231, 53, 53);
  border: 1px solid #111;
}
.btn {
  /* position: relative; */
  padding: 5px 10px;
}
.del:hover {
  cursor: pointer;
}
p:hover {
  cursor: pointer;
}
</style>
