<template>
  <div>
    <input type="text" v-model="title" name="title" placeholder="Add Todo" />
    <button class="btn" @click="submitTodo">Submit</button>
    <!-- <P>{{ title }}</P> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    submitTodo(e) {
      e.preventDefault();
      this.addTodo(this.title);
      this.title = "";
    }
  }
  //computed: mapGetters(["title"])
};
</script>

<style></style>
