<template>
  <div>
    <input type="text" v-model="title" name="title" />
    <button @click="addTodo()">Submit</button>
    <P>{{ title }}</P>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    addTodo() {
      const newTodo = {
        title: this.title,
        completed: false
      };
      // Send up to parent
      this.$emit("add-todo", newTodo);
      this.title = "";
    }
  }
};
</script>

<style></style>
