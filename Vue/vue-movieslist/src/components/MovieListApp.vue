<template>
  <div class="">
    <SideBar :opened="opened" :sidebar="sidebar" class="bar" />
    <h1 class="menu" @click="sidebar">Movies List Menu</h1>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import SideBar from "./SideBar";
export default {
  name: "MovieListApp",
  data() {
    return { opened: false };
  },
  components: { SideBar },
  methods: {
    sidebar() {
      this.opened = !this.opened;
      console.log(this.opened);
    }
  }
};
</script>

<style scoped>
.bar {
  display: block;
  position: fixed;
  text-align: center;
  height: 100%;
  background: rgb(162, 169, 248);
  color: #fff;
  margin-top: -90px;
  transition: all 0.9s;
  z-index: 1;
}
.menu {
  padding-top: 2rem;
}
</style>
