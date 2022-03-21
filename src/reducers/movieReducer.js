import { MOVIE } from "../constants";

const initialState = {
  movie: [],
};

const movieReducer = (state = initialState, action) => {
  if (action.type === MOVIE.LOAD_SUCCESS) {
    return {
      ...state,
      movie: action.movie,
    };
  }

  return state;
};
export default movieReducer;
