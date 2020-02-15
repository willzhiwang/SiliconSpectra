<template>
  <div class="container">
    <h2>Movies List</h2>
    <div class="buttons">
      <b-button @click="sort" size="sm" value="Popularity">
        <b-icon v-if="allTypes.pop" icon="arrow-up"></b-icon>
        <b-icon v-if="!allTypes.pop" icon="arrow-down"></b-icon>Popularity
      </b-button>

      <b-button @click="sort" size="sm" value="Title">
        <b-icon v-if="allTypes.title" icon="arrow-up"></b-icon>
        <b-icon v-if="!allTypes.title" icon="arrow-down"></b-icon>Title
        Title
      </b-button>
      <b-button @click="sort" size="sm" value="Release Date">
        <b-icon v-if="allTypes.date" icon="arrow-up"></b-icon>
        <b-icon v-if="!allTypes.date" icon="arrow-down"></b-icon>Release Date
      </b-button>
      <b-button @click="sort" size="sm" value="Vote Count">
        <b-icon v-if="allTypes.vote_c" icon="arrow-up"></b-icon>
        <b-icon v-if="!allTypes.vote_c" icon="arrow-down"></b-icon>Vote Count
      </b-button>
      <b-button @click="sort" size="sm" value="Vote Average">
        <b-icon v-if="allTypes.vote_a" icon="arrow-up"></b-icon>
        <b-icon v-if="!allTypes.vote_a" icon="arrow-down"></b-icon>Vote Average
      </b-button>
    </div>
    <div class="buttons">
      <b-button @click="minusPage">-</b-button>
      <p>{{ currentPage }}/{{ totalPage }}</p>
      <b-button @click="plusPage">+</b-button>
    </div>
    <div class="row">
      <div v-for="movie in allMovies" :key="movie.id" class=".col-xl-2 col-lg-3 col-md-4 col-sm-6">
        <MovieItem :movie="movie" class />
      </div>
    </div>
  </div>
</template>
<script>
import { BIconArrowUp, BIconArrowDown } from "bootstrap-vue";
import { mapGetters, mapActions } from "vuex";
import MovieItem from "../components/MovieItem";
export default {
  name: "MoviesList",
  components: { MovieItem },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["fetchMovies", "addPage", "prevPage", "sortPage"]),
    minusPage() {
      this.currentPage > 1 && this.prevPage();
      this.fetchMovies();
    },
    plusPage() {
      this.currentPage < this.totalPage && this.addPage();
      this.fetchMovies();
    },
    sort(e) {
      const type = e.target.value;
      //console.log(this.allTypes);
      this.sortPage(type);
      this.fetchMovies();
    }
  },
  computed: mapGetters(["allMovies", "totalPage", "currentPage", "allTypes"]),
  created() {
    this.fetchMovies();
  }
};
</script>
<style scoped>
.buttons {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-self: center;
  margin: 20px 5%;
  border: 1px solid #bbb;
}

/* .sort-btn {
  padding: 0px 10px;
  margin: 0px;
  border: 1px;
} */
</style>
