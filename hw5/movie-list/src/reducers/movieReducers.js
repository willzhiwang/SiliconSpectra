import {
  GET_ALL_MOVIES,
  MOVIES_LOADING,
  GET_MOVIES_ERRORS,
  CHANGE_PAGE,
  ADD_LIKED_MOVIES,
  ADD_BLOCKED_MOVIES,
  GET_TOTAL_PAGES,
  SET_SORT
} from "../actions/types";

const initialState = {
  movies: [],
  page: 1,
  total_pages: 500,
  current_movie: {},
  likedmovies: [],
  blockedmovies: [],
  loading: false,
  error: null,
  likeButton: "Like",
  sort: "original_title.desc",
  asc: true,
  title_asc: true,
  voteC_asc: true,
  voteA_asc: true,
  releaseDate_asc: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MOVIES_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_MOVIES_ERRORS:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload
      };
    case GET_ALL_MOVIES:
      //console.log("get all movies...", action.payload);
      return {
        ...state,
        movies: action.payload,
        loading: false
      };
    case CHANGE_PAGE:
      //console.log("reducer next page...");
      return {
        ...state,
        page: action.payload
      };
    case ADD_LIKED_MOVIES:
      return {
        ...state,
        likedmovies: action.payload
      };
    case ADD_BLOCKED_MOVIES:
      return {
        ...state,
        blockedmovies: action.payload
      };
    case GET_TOTAL_PAGES:
      return {
        ...state,
        total_pages: action.payload
      };
    case SET_SORT:
      //console.log(action.payload);
      if (
        action.payload === "original_title.asc" ||
        action.payload === "original_title.desc"
      ) {
        //console.log("original_title.asc || original_title.desc");
        return {
          ...state,
          sort: action.payload,
          title_asc: !state.title_asc
        };
      }
      if (
        action.payload === "vote_count.asc" ||
        action.payload === "vote_count.desc"
      ) {
        //console.log("vote_count.asc || vote_count.desc");
        return {
          ...state,
          sort: action.payload,
          voteC_asc: !state.voteC_asc
        };
      }
      if (
        action.payload === "vote_average.asc" ||
        action.payload === "vote_average.desc"
      ) {
        return {
          ...state,
          sort: action.payload,
          voteA_asc: !state.voteA_asc
        };
      }
      if (
        action.payload === "primary_release_date.asc" ||
        action.payload === "primary_release_date.desc"
      ) {
        return {
          ...state,
          sort: action.payload,
          releaseDate_asc: !state.releaseDate_asc
        };
      }
      break;
    default:
      return state;
  }
};
