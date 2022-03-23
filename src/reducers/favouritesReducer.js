import {
  ADD_FAVOURITE,
  DELETE_FAVOURITE,
  STAR_TRUE,
  STAR_FALSE,
  SET_FAVOURITES,
} from "../constants";

const initialState = {
  favourites: [],
  star: true,
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [...state.favourites, action.movie],
        star: false,
      };
    case DELETE_FAVOURITE:
      return {
        ...state,
        favourites: state.favourites.filter(
          (item) => item.imdbID !== action.movie.imdbID
        ),
        star: true,
      };
    case SET_FAVOURITES:
      return { ...state, favourites: action.favourites };
    case STAR_TRUE:
      return { ...state, star: true };
    case STAR_FALSE:
      return { ...state, star: false };
    default:
      return state;
  }
};
export default favouritesReducer;
