<template>
  <div>
    <input type="text" v-model="firstName" name="firstName" />
    <input type="text" v-model="lastName" name="lastName" />
    <button @click="submmitName">Submit</button>
  </div>
</template>

<script>
export default {
  name: "formSubmit",
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
    };
  },
  methods: {
    submmitName() {
      console.log(this.firstName + this.lastName);
    },
  },
};
</script>

<style>
</style>