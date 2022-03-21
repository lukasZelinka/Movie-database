import { MOVIES, MOVIE } from "../constants";

const errorReducer = (state = false, action) => {
  switch (action.type) {
    case MOVIES.LOAD_FAIL:
      return true;
    case MOVIES.LOAD:
      return false;
    case MOVIES.LOAD_SUCCESS:
      return false;
    case MOVIE.LOAD_FAIL:
      return true;
    case MOVIE.LOAD:
      return false;
    case MOVIE.LOAD_SUCCESS:
      return false;
    default:
      return state;
  }
};
export default errorReducer;
