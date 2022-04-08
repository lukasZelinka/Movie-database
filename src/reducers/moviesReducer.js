import { MOVIES, INFINITE_MOVIES, UPDATE, REFRESH_PAGE } from "../constants";

const initialState = {
  movies: [],
  infiniteMovies: [],
  page: 1,
  inputValue: "",
};

const moviesReducer = (state = initialState, action) => {
  if (action.type === UPDATE) {
    return { ...state, inputValue: action.newValue };
  }
  if (action.type === REFRESH_PAGE) {
    return { ...state, page: 1, movies: [], infiniteMovies: [] };
  }
  if (action.type === MOVIES.LOAD_SUCCESS) {
    return {
      ...state,
      movies: action.movies,
      page: state.page + 1,
    };
  }
  if (action.type === INFINITE_MOVIES.LOAD_SUCCESS) {
    if (state.page === 2) {
      return {
        ...state,
        infiniteMovies: action.infiniteMovies,
        page: state.page + 1,
      };
    } else {
      return {
        ...state,
        infiniteMovies: [...state.infiniteMovies, ...action.infiniteMovies],
        page: state.page + 1,
      };
    }
  }

  return state;
};
export default moviesReducer;
