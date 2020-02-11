import axios from "axios";
const API_KEY = "66730ff65883e16b04d141e728064251";
const state = {
  movies: [],
  page: 1,
  sort: "popularity.desc",
  totalPage: null
};
const getters = {
  allMovies: state => {
    return state.movies;
  },
  totalPage: state => {
    return state.totalPage;
  },
  currentPage: state => {
    return state.page;
  }
};
const actions = {
  async fetchMovies({ commit }) {
    const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&region=US&sort_by=${state.sort}&include_adult=false&include_video=false&page=${state.page}`;
    const res = await axios.get(URL);
    console.log(res.data);
    commit("setMovies", res.data.results);
    commit("setTotalPages", res.data.total_pages);
  },
  addPage({ commit }) {
    commit("setPage", state.page + 1);
  },
  prevPage({ commit }) {
    commit("setPage", state.page - 1);
  }
};
const mutations = {
  setMovies: (state, movies) => (state.movies = movies),
  setTotalPages: (state, totalPage) => (state.totalPage = totalPage),
  setPage: (state, page) => (state.page = page)
};
export default {
  state,
  getters,
  actions,
  mutations
};
