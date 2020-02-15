<template>
  <div>
    <img class="movie-image" :src="IMAGE_URL + movie.poster_path" />
    <h4>{{ movie.title }}</h4>
    <h5>{{ movie.release_date }}</h5>
    <h6>original title: {{ movie.original_title }}</h6>
    <h6>vote count: {{ movie.vote_count }}</h6>
    <h6>vote average: {{ movie.vote_average }}</h6>
    <p>overview: {{ movie.overview }}</p>
    <div>
      <b-button class="sort-btn">Like</b-button>
      <b-button class="sort-btn">Block</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  props: ["movie"],
  data() {
    return { IMAGE_URL: "https://image.tmdb.org/t/p/w500" };
  }
};
</script>

<style scoped>
.movie-image {
  max-width: 200px;
}
.sort-btn {
  padding: 0px 10px;
  margin: 0px;
  border: 1px;
}
</style>
