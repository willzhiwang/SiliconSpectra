import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MoviesList from "../views/MoviesList.vue";
import LikedList from "../views/LikedList.vue";
import BlockedList from "../views/BlockedList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/movieslist",
    name: "MoviesList",
    component: MoviesList
  },
  {
    path: "/likedlist",
    name: "LikedList",
    component: LikedList
  },
  {
    path: "/blockedlist",
    name: "BlockedList",
    component: BlockedList
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
