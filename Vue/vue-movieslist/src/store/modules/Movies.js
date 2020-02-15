import axios from "axios";
const API_KEY = "66730ff65883e16b04d141e728064251";
const state = {
  movies: [],
  page: 1,
  sort: "popularity.desc",
  totalPage: null,
  types: {
    pop: true,
    title: true,
    date: true,
    vote_c: true,
    vote_a: true
  }
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
  },
  allTypes: state => {
    return state.types;
  }
};
const actions = {
  async fetchMovies({ commit }) {
    const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${state.sort}&include_adult=true&include_video=false&page=${state.page}`;
    const res = await axios.get(URL);
    commit("SET_MOVIES", res.data.results);
    commit("SET_TOTAL_PAGES", res.data.total_pages);
  },
  addPage({ commit }) {
    commit("SET_PAGE", state.page + 1);
  },
  prevPage({ commit }) {
    commit("SET_PAGE", state.page - 1);
  },
  sortPage({ commit }, type) {
    let sort = "";

    if (type === "Popularity") {
      state.types.pop = !state.types.pop;
      sort = "popularity";
      if (state.types.pop) {
        sort = sort.concat(".asc");
      } else {
        sort = sort.concat(".desc");
      }
    }
    if (type === "Title") {
      state.types.title = !state.types.title;
      sort = "original_title";
      if (state.types.title) {
        sort = sort.concat(".asc");
      } else {
        sort = sort.concat(".desc");
      }
    }
    if (type === "Release Date") {
      state.types.date = !state.types.date;
      sort = "release_date";
      if (state.types.date) {
        sort = sort.concat(".asc");
      } else {
        sort = sort.concat(".desc");
      }
    }
    if (type === "Vote Count") {
      state.types.vote_c = !state.types.vote_c;
      sort = "vote_count";
      if (state.types.vote_c) {
        sort = sort.concat(".asc");
      } else {
        sort = sort.concat(".desc");
      }
    }
    if (type === "Vote Average") {
      state.types.vote_a = !state.types.vote_a;
      sort = "vote_average";
      if (state.types.vote_a) {
        sort = sort.concat(".asc");
      } else {
        sort = sort.concat(".desc");
      }
    }
    // console.log(type);
    // console.log(sort);
    commit("SET_TYPES", state.types);
    commit("SET_SORT", sort);
  }
};
const mutations = {
  SET_MOVIES: (state, movies) => (state.movies = movies),
  SET_TOTAL_PAGES: (state, totalPage) => (state.totalPage = totalPage),
  SET_PAGE: (state, page) => (state.page = page),
  SET_TYPES: (state, types) => (state.types = types),
  SET_SORT: (state, sort) => (state.sort = sort)
};
export default {
  state,
  getters,
  actions,
  mutations
};
