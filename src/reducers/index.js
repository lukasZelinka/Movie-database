import { combineReducers } from "redux";
import loadingReducer from "./loadingReducer";
import moviesReducer from "./moviesReducer";
import errorReducer from "./errorReducer";
import movieReducer from "./movieReducer";
import saveIdReducer from "./saveIdReducer";
import favouritesReducer from "./favouritesReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  moviesReducer: moviesReducer,
  error: errorReducer,
  movieReducer: movieReducer,
  saveIdReducer: saveIdReducer,
  favouritesReducer: favouritesReducer,
  searchReducer: searchReducer,
});

export default rootReducer;
