import { MOVIES, UPDATE, REFRESH_PAGE } from "../constants";

const initialState = {
  movies: [],
  page: 1,
  inputValue: "",
};

const moviesReducer = (state = initialState, action) => {
  if (action.type === UPDATE) {
    return { ...state, inputValue: action.newValue };
  }
  if (action.type === MOVIES.LOAD_SUCCESS) {
    if (state.page === 1) {
      return {
        ...state,
        movies: action.movies,
        page: state.page + 1,
      };
    } else {
      return {
        ...state,
        movies: [...state.movies, ...action.movies],
        page: state.page + 1,
      };
    }
  }
  if (action.type === REFRESH_PAGE) {
    return { ...state, page: 1 };
  }
  return state;
};
export default moviesReducer;
