<template>
  <div>
    <input type="text" v-model="title" name="title" />
    <button class="btn" @click="addTodo()">Submit</button>
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
      if (this.title.length > 0) {
        const newTodo = {
          title: this.title,
          completed: false
        };
        // Send up to parent
        this.$emit("add-todo", newTodo);
        this.title = "";
      }
    }
  }
};
</script>

<style></style>
