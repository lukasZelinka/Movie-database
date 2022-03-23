import {
  MOVIES,
  MOVIE,
  UPDATE,
  REFRESH_PAGE,
  SAVE_ID,
  ADD_FAVOURITE,
  DELETE_FAVOURITE,
  STAR_TRUE,
  STAR_FALSE,
  SEARCH,
} from "../constants";

const loadMovies = () => ({
  type: MOVIES.LOAD,
});

const setMovies = (movies) => ({
  type: MOVIES.LOAD_SUCCESS,
  movies,
});

const setError = () => ({
  type: MOVIES.LOAD_FAIL,
});

const loadMovie = () => ({
  type: MOVIE.LOAD,
});

const setMovie = (movie) => ({
  type: MOVIE.LOAD_SUCCESS,
  movie,
});

const setErrorMovie = () => ({
  type: MOVIE.LOAD_FAIL,
});

const setInputValue = (newValue) => ({
  type: UPDATE,
  newValue,
});

const refreshPage = () => ({
  type: REFRESH_PAGE,
});

const saveId = (id) => ({
  type: SAVE_ID,
  id,
});

const addFavouriteMovie = (movie) => ({
  type: ADD_FAVOURITE,
  movie,
});

const deleteFavouriteMovie = (movie) => ({
  type: DELETE_FAVOURITE,
  movie,
});

const setStarTrue = () => ({
  type: STAR_TRUE,
});

const setStarFalse = () => ({
  type: STAR_FALSE,
});

const setSearchHide = () => ({
  type: SEARCH.HIDE,
});

const setSearchShow = () => ({
  type: SEARCH.SHOW,
});

export {
  loadMovies,
  setMovies,
  setError,
  setInputValue,
  refreshPage,
  loadMovie,
  setMovie,
  setErrorMovie,
  saveId,
  addFavouriteMovie,
  deleteFavouriteMovie,
  setStarTrue,
  setStarFalse,
  setSearchHide,
  setSearchShow,
};
