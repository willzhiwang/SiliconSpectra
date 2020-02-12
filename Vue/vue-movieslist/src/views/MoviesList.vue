<template>
  <div class="container">
    <h2>Movies List</h2>
    <div class="buttons">
      <b-button class="sort-btn">Title</b-button>
      <b-button class="sort-btn">Release Date</b-button>
      <b-button class="sort-btn">Vote Count</b-button>
      <b-button class="sort-btn">Vote Average</b-button>
    </div>
    <div class="buttons">
      <b-button @click="minusPage()">-</b-button>
      <p>{{ currentPage }}/{{ totalPage }}</p>
      <b-button @click="plusPage()">+</b-button>
    </div>
    <div v-for="movie in allMovies" :key="movie.id" class="movies-container">
      <MovieItem :movie="movie" class="movie" />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import MovieItem from "../components/MovieItem";
export default {
  name: "MoviesList",
  components: { MovieItem },
  methods: {
    ...mapActions(["fetchMovies", "addPage", "prevPage"]),
    minusPage() {
      this.currentPage > 1 && this.prevPage();
      this.fetchMovies();
    },
    plusPage() {
      this.currentPage < this.totalPage && this.addPage();
      this.fetchMovies();
    }
  },
  computed: mapGetters(["allMovies", "totalPage", "currentPage"]),
  created() {
    this.fetchMovies();
  }
};
</script>
<style scoped>
.buttons {
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  margin: 20px 0px;
  border: 1px solid #bbb;
}
.movie {
  max-width: 400px;
}
.movies-container {
  display: flex;
  justify-content: center;
  align-self: center;
}
.sort-btn {
  padding: 0px 10px;
  margin: 0px;
  border: 1px;
}
</style>
