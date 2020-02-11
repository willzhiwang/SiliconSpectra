<template>
  <div id="nav" :class="[{ openNav: opened }, { closeNav: !opened }]">
    <b-button
      class="btn"
      size="md"
      variant="danger"
      @click="sidebar"
      :class="[{ openNavItem: opened }, { closeNavItem: !opened }]"
      >Close
    </b-button>
    <router-link
      class="link"
      :class="[{ openNavItem: opened }, { closeNavItem: !opened }]"
      to="/"
      >Home</router-link
    >
    <router-link
      class="link"
      :class="[{ openNavItem: opened }, { closeNavItem: !opened }]"
      to="/moviesList"
      >Movies List</router-link
    >
    <router-link
      class="link"
      :class="[{ openNavItem: opened }, { closeNavItem: !opened }]"
      to="/likedlist"
      >Liked List</router-link
    >
    <router-link
      class="link"
      :class="[{ openNavItem: opened }, { closeNavItem: !opened }]"
      to="/blockedlist"
      >Blocked List</router-link
    >
  </div>
</template>

<script>
export default { name: "SideBar", props: ["opened", "sidebar"] };
</script>

<style scoped>
#nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0;
}
.link {
  margin: 10px 0;
  text-decoration: none;
  color: black;
  font-weight: bold;
}
.openNav {
  width: 500px;
}
.closeNav {
  width: 0px;
}
.openNavItem {
  transition: all 0.9s;
  margin-left: 0px;
}
.closeNavItem {
  transition: all 0.9s;
  margin-left: -500px;
}
.btn {
  /* margin-left: 400px; */
  width: 80px;
}
</style>
