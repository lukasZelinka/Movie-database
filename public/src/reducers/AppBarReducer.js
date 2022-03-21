// all actions
import * as actions from "../actions/AppBarActions";
//store
export const initialState = {
  movies: [],
  loading: false,
  hasErrors: false,
};
//reducer
export default function inputReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_MOVIES:
      return { ...state, loading: true };
    case actions.GET_MOVIES_SUCCESS:
      return {
        movies: action.payload,
        loading: false,
        hasErrors: false,
      };
    case actions.GET_MOVIES_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
